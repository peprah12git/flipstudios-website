import { useState } from 'react'
import { Reveal, RevealItem } from './Reveal'
import './ContactSection.css'

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact bg-dot-grid">
      <Reveal className="container contact__inner">
        <RevealItem as="span" className="eyebrow">
          Contact
        </RevealItem>
        <RevealItem as="h2">Let's talk about your next project</RevealItem>
        <RevealItem as="p">
          Tell us exactly what you're looking for and we will contact you to discuss your project.
        </RevealItem>

        <RevealItem
          as="form"
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Type your message here"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn">
            Send
          </button>

          {submitted && <p className="contact__success">Thanks! We'll be in touch soon.</p>}
        </RevealItem>
      </Reveal>
    </section>
  )
}

export default ContactSection
