'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'
import './BestSellers.css'

const products = [
  {
    id: 1,
    name: 'Beats',
    price: 995,
    image: '/media/Black.png',
    sale: false,
  },
  {
    id: 2,
    name: 'Rocky Mountain',
    price: 8250,
    image: '/media/Apple.png',
    sale: false,
  },
  {
    id: 3,
    name: 'Game Console Controller Cable',
    price: 8250,
    image: '/media/Red.png',
    sale: false,
  },
  {
    id: 4,
    name: 'Gore Wear C7',
    price: 499,
    image: '/media/Black.png',
    sale: false,
  },
  {
    id: 5,
    name: 'Wireless Audio System Multiroom 360',
    price: 8250,
    image: '/media/Apple.png',
    sale: false,
  },
  {
    id: 6,
    name: 'Beats',
    price: 9950,
    originalPrice: 11000,
    image: '/media/Red.png',
    sale: true,
  },
  {
    id: 7,
    name: 'Smartwatch 2.0 LTE WII',
    price: 499,
    image: '/media/Apple.png',
    sale: false,
  },
]

export default function BestSellers() {
  const addToCart = (product: typeof products[0]) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find((item: typeof product) => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cartUpdated'))
    alert(`${product.name} added to cart!`)
  }

  return (
    <section className="bestsellers-section section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Best Seller Products</h2>
          <p className="section-subtitle">
            Discover our most popular products loved by customers worldwide
          </p>
        </motion.div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link href={`/shop/${product.id}`}>
                <div className="product-image-wrapper">
                  {product.sale && (
                    <span className="sale-badge">Sale</span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="product-image"
                  />
                  <motion.button
                    className="add-to-cart-btn"
                    onClick={(e) => {
                      e.preventDefault()
                      addToCart(product)
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiShoppingCart />
                  </motion.button>
                </div>
              </Link>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  {product.sale && product.originalPrice && (
                    <span className="original-price">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="current-price">
                    ${product.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

