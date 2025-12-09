'use client'

import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import './about.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <Parallax strength={300} className="about-parallax">
          <div className="container">
            <motion.div
              className="about-header"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="about-title">About Us</h1>
              <p className="about-subtitle">
                Your trusted destination for premium electronics
              </p>
            </motion.div>
          </div>
        </Parallax>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="content-title">Our Story</h2>
              <p className="content-text">
                EARMA was founded with a vision to bring the latest and greatest
                in technology to consumers worldwide. We believe that everyone
                deserves access to premium electronics that enhance their daily
                lives.
              </p>
              <p className="content-text">
                Since our inception, we've been committed to providing exceptional
                products, outstanding customer service, and an unparalleled shopping
                experience. Our team of experts carefully curates each product to
                ensure quality and innovation.
              </p>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-placeholder">
                <img src="/media/Apple.png" alt="About Us" />
              </div>
            </motion.div>
          </div>

          <div className="values-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Values
            </motion.h2>
            <div className="values-grid">
              {[
                {
                  title: 'Quality',
                  description:
                    'We only offer products that meet our high standards of quality and durability.',
                },
                {
                  title: 'Innovation',
                  description:
                    'We stay ahead of the curve by offering the latest technological innovations.',
                },
                {
                  title: 'Customer First',
                  description:
                    'Your satisfaction is our top priority. We go above and beyond to serve you.',
                },
                {
                  title: 'Integrity',
                  description:
                    'We conduct business with honesty, transparency, and ethical practices.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="value-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

