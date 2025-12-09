'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import './RecentNews.css'

const news = [
  {
    id: 1,
    title: 'How to choose perfect gadgets',
    date: 'October 5, 2019',
    image: '/media/Apple.png',
    excerpt: 'Discover the best tips and tricks for selecting the perfect gadgets that match your lifestyle and needs.',
  },
  {
    id: 2,
    title: 'Latest Tech Trends 2024',
    date: 'October 10, 2019',
    image: '/media/Red.png',
    excerpt: 'Explore the cutting-edge technology trends that are shaping the future of electronics and digital devices.',
  },
  {
    id: 3,
    title: 'Wireless Technology Revolution',
    date: 'October 15, 2019',
    image: '/media/Black.png',
    excerpt: 'Learn about the latest advancements in wireless technology and how they are transforming our daily lives.',
  },
]

export default function RecentNews() {
  return (
    <section className="news-section section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Recent News</h2>
          <p className="section-subtitle">
            Stay updated with the latest news and insights from the tech world
          </p>
        </motion.div>

        <div className="news-grid">
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              className="news-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link href={`/blog/${article.id}`}>
                <div className="news-image-wrapper">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="news-image"
                  />
                </div>
                <div className="news-content">
                  <p className="news-date">{article.date}</p>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-excerpt">{article.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

