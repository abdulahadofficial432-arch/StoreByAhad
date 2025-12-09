'use client'

import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import Image from 'next/image'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <Parallax strength={300} className="hero-parallax">
        <div className="hero-container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Beats Solo
              </motion.h1>
              <motion.h2
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Wireless
              </motion.h2>
              <motion.h3
                className="hero-tagline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                HEADONE
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.button
                  className="btn btn-primary hero-btn"
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(230, 57, 70, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop By Category
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, x: 50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div
                className="hero-image"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/media/Black.png"
                  alt="Beats Solo Wireless Headphones"
                  width={600}
                  height={600}
                  priority
                  className="headphone-image"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p>
                Experience premium sound quality with our wireless headphones.
                Perfect for music lovers and professionals alike.
              </p>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

