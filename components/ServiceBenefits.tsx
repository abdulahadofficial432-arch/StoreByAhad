'use client'

import { motion } from 'framer-motion'
import { FiTruck, FiShield, FiHeadphones, FiCreditCard } from 'react-icons/fi'
import './ServiceBenefits.css'

const services = [
  {
    icon: FiTruck,
    title: 'Free Shipping On All Order',
  },
  {
    icon: FiShield,
    title: '30 Day Money Back',
  },
  {
    icon: FiHeadphones,
    title: 'Online Support 24/7 Technical Support 24/7',
  },
  {
    icon: FiCreditCard,
    title: 'Secure Payment All Cards Accepted',
  },
]

export default function ServiceBenefits() {
  return (
    <section className="service-section section">
      <div className="container">
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="service-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon />
              </motion.div>
              <p className="service-text">{service.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

