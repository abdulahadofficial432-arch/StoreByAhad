'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import './CategoryGrid.css'

const categories = [
  {
    id: 1,
    title: 'Enjoy With EARPHONE',
    image: '/media/Black.png',
    color: '#000000',
    link: '/shop?category=earphones',
  },
  {
    id: 2,
    title: 'New Wearable Gadgets',
    image: '/media/Apple.png',
    color: '#FFD700',
    link: '/shop?category=wearables',
  },
  {
    id: 3,
    title: 'Trend Devices LAPTOP',
    image: '/media/Red.png',
    color: '#e63946',
    link: '/shop?category=laptops',
  },
  {
    id: 4,
    title: 'Best Gaming CONSOLE',
    image: '/media/Black.png',
    color: '#E0E0E0',
    link: '/shop?category=gaming',
  },
  {
    id: 5,
    title: 'Play Game OCULUS',
    image: '/media/Apple.png',
    color: '#4CAF50',
    link: '/shop?category=vr',
  },
  {
    id: 6,
    title: 'New Amazon SPEAKER',
    image: '/media/Red.png',
    color: '#2196F3',
    link: '/shop?category=speakers',
  },
]

export default function CategoryGrid() {
  return (
    <section className="category-section section">
      <div className="container">
        <div className="category-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={category.link}>
                <motion.div
                  className="category-card"
                  style={{ backgroundColor: category.color }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="category-image"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="category-img"
                    />
                  </motion.div>
                  <h3 className="category-title">{category.title}</h3>
                  <motion.button
                    className="category-browse-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Browse
                  </motion.button>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

