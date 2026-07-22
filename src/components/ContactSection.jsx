import { useState } from 'react'
import './ContactSection.css'
import contactBg from '../../images/why contact us.png'

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
    <section
      id="contact"
      className="contact"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="contact__overlay" aria-hidden="true" />
      <div className="container contact__inner">
        <h2>Let's talk about your next project</h2>
        <p>Tell us exactly what you're looking for and we will contact you to discuss your project.</p>

        <form className="contact__form" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </section>
  )
}

export default ContactSection
