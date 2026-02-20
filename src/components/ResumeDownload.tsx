import { client } from '@/sanity/client'
import { resumeQuery } from '@/sanity/resumeQuery'
import { Resume } from '@/types/Resume'

export default async function ResumeDownload() {
  let resume: Resume | null = null

  try {
    if (!client) {
      console.log('Sanity client not configured')
      return null
    }
    const result = await client.fetch<Resume | null>(resumeQuery, {}, { cache: 'no-store' })
    console.log('Raw resume fetch result:', JSON.stringify(result, null, 2))
    
    resume = result
    
    if (!resume) {
      console.log('No resume document found in Sanity')
      // Try a simpler query to see if document exists at all
      const allResumes = await client.fetch(`*[_type == "resume"]`)
      console.log('All resume documents:', JSON.stringify(allResumes, null, 2))
      return null
    }
    
    if (!resume.resumeUrl) {
      console.log('Resume document exists but no file URL found. Full object:', JSON.stringify(resume, null, 2))
      return null
    }
    
    console.log('Resume found successfully:', {
      url: resume.resumeUrl,
      fileName: resume.fileName,
    })
  } catch (error) {
    console.error('Error fetching resume:', error)
    if (error instanceof Error) {
      console.error('Error details:', error.message, error.stack)
    }
    return null
  }

  return (
    <a
      href={resume.resumeUrl}
      download={resume.fileName || 'resume.pdf'}
      className="button-hover-fill inline-flex items-center gap-2 px-8 py-3 border border-zinc-700 text-sm font-medium text-zinc-200"
    >
      <svg
        className="w-4 h-4 relative z-10 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <span className="relative z-10 transition-colors duration-300">Resume</span>
    </a>
  )
}

