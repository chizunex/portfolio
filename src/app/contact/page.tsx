import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center px-6 py-16">
      <div className="container mx-auto max-w-2xl w-full">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-zinc-100 mb-4 tracking-tight">
            Contact
          </h1>
          <p className="text-zinc-400 text-lg font-light">Get in touch with me</p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
