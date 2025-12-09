'use client'

import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import Link from 'next/link'
import Image from 'next/image'
import './PromotionalBanners.css'

const banners = [
  {
    id: 1,
    discount: '20% OFF',
    tagline: 'FINAL SMILE',
    date: '15 Nov To 7 Dec',
    title: 'Beats Solo Air',
    subtitle: 'Summer Sale',
    description: 'Experience premium sound quality with our wireless headphones. Perfect for music lovers and professionals alike.',
    image: '/media/Red.png',
    bgColor: '#e63946',
    textColor: '#ffffff',
  },
  {
    id: 2,
    discount: '20% OFF',
    tagline: 'HAPPY HOUR',
    date: '15 Nov To 7 Dec',
    title: 'Smart Watch Pro',
    subtitle: 'Summer Sale',
    description: 'Stay connected with our latest smartwatch. Track your fitness, receive notifications, and more.',
    image: '/media/Apple.png',
    bgColor: '#4CAF50',
    textColor: '#ffffff',
  },
]

export default function PromotionalBanners() {
  return (
    <section className="promotional-section section">
      <div className="container">
        <div className="promotional-grid">
          {banners.map((banner, index) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Parallax strength={200} className="banner-parallax">
                <div
                  className="promotional-banner"
                  style={{ backgroundColor: banner.bgColor, color: banner.textColor }}
                >
                  <div className="banner-content">
                    <div className="banner-left">
                      <motion.div
                        className="banner-discount"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', delay: 0.2 }}
                      >
                        {banner.discount}
                      </motion.div>
                      <h3 className="banner-tagline">{banner.tagline}</h3>
                      <p className="banner-date">{banner.date}</p>
                    </div>

                    <div className="banner-center">
                      <motion.div
                        className="banner-image-wrapper"
                        animate={{
                          y: [0, -15, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Image
                          src={banner.image}
                          alt={banner.title}
                          width={300}
                          height={300}
                          className="banner-image"
                        />
                      </motion.div>
                    </div>

                    <div className="banner-right">
                      <h2 className="banner-title">{banner.title}</h2>
                      <h3 className="banner-subtitle">{banner.subtitle}</h3>
                      <p className="banner-description">{banner.description}</p>
                      <Link href="/shop">
                        <motion.button
                          className="btn btn-white banner-btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Shop
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Parallax>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

