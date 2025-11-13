import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 }) // 15 minutes
    return true
  }

  if (limit.count >= 3) {
    // Max 3 requests per 15 minutes
    return false
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Get recipient email from environment variable, or use a default
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.RESEND_FROM_EMAIL || 'your-email@example.com'
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #18181b; color: #f4f4f5;">
          <h2 style="color: #f4f4f5; border-bottom: 1px solid #27272a; padding-bottom: 10px; margin-bottom: 20px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #27272a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 10px 0; color: #a1a1aa;">
              <strong style="color: #f4f4f5;">Name:</strong> ${name}
            </p>
            <p style="margin: 10px 0; color: #a1a1aa;">
              <strong style="color: #f4f4f5;">Email:</strong> 
              <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
            </p>
          </div>
          <div style="background-color: #27272a; padding: 20px; border-radius: 8px;">
            <p style="margin: 0 0 10px 0; color: #f4f4f5; font-weight: bold;">Message:</p>
            <p style="margin: 0; color: #a1a1aa; white-space: pre-wrap; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

