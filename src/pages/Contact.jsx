import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <section className="bg-neutral-50 border-b">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-2 text-neutral-700">We would love to hear from you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid lg:grid-cols-2 gap-10">
        <div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required name="name" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea required name="message" rows="5" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700" />
            </div>
            <button className="inline-flex items-center justify-center rounded-md bg-amber-700 px-5 py-2 text-white font-medium hover:bg-amber-800">Send</button>
            {submitted && (
              <p className="text-green-700">Thanks! We will get back to you soon.</p>
            )}
          </form>
        </div>
        <div>
          <div className="aspect-video w-full overflow-hidden rounded-md border">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193823941946!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e2f1b7f%3A0x4b0b1dbd2e2e2e2e!2sCoffee%20Shop!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-neutral-700">123 Coffee St, Your City, ST 00000</p>
        </div>
      </section>
    </div>
  )
}

export default Contact


