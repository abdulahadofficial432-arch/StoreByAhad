'use client'

import { motion } from 'framer-motion'
import './BrandPartners.css'

const brands = ['GOLDEN', 'SWEETY', 'FASTLANE', 'MIGHTY FURNITURES', 'JR']

export default function BrandPartners() {
  return (
    <section className="brands-section section">
      <div className="container">
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              className="brand-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <span className="brand-name">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

