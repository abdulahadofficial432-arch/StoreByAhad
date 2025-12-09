'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import './blog-detail.css'

const blogPosts = [
  {
    id: 1,
    title: 'How to choose perfect gadgets',
    date: 'October 5, 2019',
    image: '/media/Apple.png',
    category: 'Guides',
    content: `
      <p>Choosing the perfect gadgets for your needs can be overwhelming with so many options available. Here are some key factors to consider:</p>
      
      <h2>1. Identify Your Needs</h2>
      <p>Before making a purchase, clearly define what you need the gadget for. Are you looking for productivity, entertainment, or fitness tracking?</p>
      
      <h2>2. Research and Compare</h2>
      <p>Take time to research different brands and models. Read reviews, compare specifications, and watch video demonstrations.</p>
      
      <h2>3. Set a Budget</h2>
      <p>Determine how much you're willing to spend. Remember that the most expensive option isn't always the best for your needs.</p>
      
      <h2>3. Consider Compatibility</h2>
      <p>Ensure the gadget is compatible with your existing devices and ecosystem. Check for required software or hardware.</p>
      
      <h2>4. Read User Reviews</h2>
      <p>User reviews provide valuable insights into real-world performance and potential issues. Look for patterns in reviews.</p>
      
      <h2>5. Warranty and Support</h2>
      <p>Check the warranty period and customer support options. Good after-sales support is crucial for electronics.</p>
    `,
  },
  {
    id: 2,
    title: 'Latest Tech Trends 2024',
    date: 'October 10, 2019',
    image: '/media/Red.png',
    category: 'Trends',
    content: `
      <p>The technology landscape is constantly evolving. Here are the latest trends shaping 2024:</p>
      
      <h2>Artificial Intelligence</h2>
      <p>AI is becoming more integrated into everyday devices, making them smarter and more intuitive.</p>
      
      <h2>5G Connectivity</h2>
      <p>5G networks are expanding, enabling faster internet speeds and better connectivity for IoT devices.</p>
      
      <h2>Sustainable Technology</h2>
      <p>Eco-friendly gadgets and sustainable manufacturing practices are gaining importance.</p>
    `,
  },
  {
    id: 3,
    title: 'Wireless Technology Revolution',
    date: 'October 15, 2019',
    image: '/media/Black.png',
    category: 'Technology',
    content: `
      <p>Wireless technology has revolutionized how we interact with our devices. From Bluetooth to Wi-Fi 6, the future is wireless.</p>
      
      <h2>Bluetooth Evolution</h2>
      <p>Latest Bluetooth versions offer improved range, speed, and battery efficiency.</p>
      
      <h2>Wireless Charging</h2>
      <p>Wireless charging is becoming standard across devices, eliminating the need for cables.</p>
    `,
  },
]

export default function BlogDetailPage() {
  const params = useParams()
  const postId = parseInt(params.id as string)
  const post = blogPosts.find((p) => p.id === postId) || blogPosts[0]

  return (
    <div className="blog-detail-page">
      <section className="blog-detail-hero section">
        <div className="container">
          <motion.div
            className="blog-detail-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="breadcrumb">
              <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> /{' '}
              {post.title}
            </div>
            <span className="blog-category">{post.category}</span>
            <h1 className="blog-detail-title">{post.title}</h1>
            <p className="blog-detail-date">{post.date}</p>
          </motion.div>
        </div>
      </section>

      <section className="blog-detail-content section">
        <div className="container">
          <motion.div
            className="blog-image-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="blog-detail-image"
            />
          </motion.div>

          <motion.article
            className="blog-article"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
        </div>
      </section>
    </div>
  )
}

