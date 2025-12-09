'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import './contact.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              We'd love to hear from you. Get in touch!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="info-title">Get In Touch</h2>
              <p className="info-text">
                Have a question or need assistance? We're here to help! Reach out
                to us through any of the following methods.
              </p>

              <div className="contact-methods">
                <motion.div
                  className="contact-method"
                  whileHover={{ x: 10 }}
                >
                  <div className="method-icon">
                    <FiPhone />
                  </div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  className="contact-method"
                  whileHover={{ x: 10 }}
                >
                  <div className="method-icon">
                    <FiMail />
                  </div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>info@earma.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="contact-method"
                  whileHover={{ x: 10 }}
                >
                  <div className="method-icon">
                    <FiMapPin />
                  </div>
                  <div className="method-details">
                    <h3>Address</h3>
                    <p>123 Tech Street, Digital City, DC 12345</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary form-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}

