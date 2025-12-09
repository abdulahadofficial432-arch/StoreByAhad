'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import './blog.css'

const blogPosts = [
  {
    id: 1,
    title: 'How to choose perfect gadgets',
    date: 'October 5, 2019',
    image: '/media/Apple.png',
    excerpt:
      'Discover the best tips and tricks for selecting the perfect gadgets that match your lifestyle and needs. Learn what to look for when shopping for electronics.',
    category: 'Guides',
  },
  {
    id: 2,
    title: 'Latest Tech Trends 2024',
    date: 'October 10, 2019',
    image: '/media/Red.png',
    excerpt:
      'Explore the cutting-edge technology trends that are shaping the future of electronics and digital devices. Stay ahead of the curve.',
    category: 'Trends',
  },
  {
    id: 3,
    title: 'Wireless Technology Revolution',
    date: 'October 15, 2019',
    image: '/media/Black.png',
    excerpt:
      'Learn about the latest advancements in wireless technology and how they are transforming our daily lives. From Bluetooth to 5G.',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'Best Headphones for Music Lovers',
    date: 'October 20, 2019',
    image: '/media/Apple.png',
    excerpt:
      'A comprehensive guide to finding the perfect headphones for your music listening experience. Compare features and find your match.',
    category: 'Reviews',
  },
  {
    id: 5,
    title: 'Smart Home Integration Guide',
    date: 'October 25, 2019',
    image: '/media/Red.png',
    excerpt:
      'Transform your home into a smart home with our comprehensive integration guide. Connect all your devices seamlessly.',
    category: 'Guides',
  },
  {
    id: 6,
    title: 'Gaming Setup Essentials',
    date: 'October 30, 2019',
    image: '/media/Black.png',
    excerpt:
      'Build the ultimate gaming setup with our essential guide. From consoles to accessories, we cover everything you need.',
    category: 'Gaming',
  },
]

export default function BlogPage() {
  return (
    <div className="blog-page">
      <section className="blog-hero section">
        <div className="container">
          <motion.div
            className="blog-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="blog-title">Blog</h1>
            <p className="blog-subtitle">
              Stay updated with the latest news and insights
            </p>
          </motion.div>
        </div>
      </section>

      <section className="blog-content section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="blog-image-wrapper">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="blog-image"
                    />
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <div className="blog-content-wrapper">
                    <p className="blog-date">{post.date}</p>
                    <h2 className="blog-post-title">{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <span className="blog-read-more">Read More →</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

