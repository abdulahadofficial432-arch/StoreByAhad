'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiShoppingCart, FiMinus, FiPlus } from 'react-icons/fi'
import './product.css'

const products = [
  {
    id: 1,
    name: 'Beats',
    price: 995,
    image: '/media/Black.png',
    category: 'earphones',
    sale: false,
    description:
      'Premium wireless headphones with exceptional sound quality. Perfect for music lovers and professionals.',
    features: [
      'Wireless connectivity',
      '30-hour battery life',
      'Noise cancellation',
      'Premium build quality',
    ],
  },
  {
    id: 2,
    name: 'Rocky Mountain',
    price: 8250,
    image: '/media/Apple.png',
    category: 'earphones',
    sale: false,
    description:
      'High-end audio experience with crystal clear sound. Designed for audiophiles who demand the best.',
    features: [
      'Studio-quality sound',
      'Comfortable fit',
      'Durable construction',
      'Premium materials',
    ],
  },
  {
    id: 3,
    name: 'Game Console Controller Cable',
    price: 8250,
    image: '/media/Red.png',
    category: 'gaming',
    sale: false,
    description:
      'High-quality controller cable for your gaming console. Low latency and reliable connection.',
    features: [
      'Low latency',
      'Durable cable',
      'Universal compatibility',
      'Fast charging',
    ],
  },
  {
    id: 4,
    name: 'Gore Wear C7',
    price: 499,
    image: '/media/Black.png',
    category: 'earphones',
    sale: false,
    description:
      'Comfortable and stylish earphones with great sound quality. Perfect for everyday use.',
    features: [
      'Comfortable design',
      'Great sound quality',
      'Affordable price',
      'Long battery life',
    ],
  },
  {
    id: 5,
    name: 'Wireless Audio System Multiroom 360',
    price: 8250,
    image: '/media/Apple.png',
    category: 'speakers',
    sale: false,
    description:
      'Multiroom audio system that fills your entire home with rich, immersive sound.',
    features: [
      'Multiroom support',
      '360-degree sound',
      'Wireless connectivity',
      'Easy setup',
    ],
  },
  {
    id: 6,
    name: 'Beats',
    price: 9950,
    originalPrice: 11000,
    image: '/media/Red.png',
    category: 'earphones',
    sale: true,
    description:
      'Premium wireless headphones with exceptional sound quality. Now on sale!',
    features: [
      'Wireless connectivity',
      '30-hour battery life',
      'Noise cancellation',
      'Premium build quality',
    ],
  },
  {
    id: 7,
    name: 'Smartwatch 2.0 LTE WII',
    price: 499,
    image: '/media/Apple.png',
    category: 'wearables',
    sale: false,
    description:
      'Advanced smartwatch with LTE connectivity. Stay connected wherever you go.',
    features: [
      'LTE connectivity',
      'Health tracking',
      'Long battery life',
      'Water resistant',
    ],
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState(
    products.find((p) => p.id === productId) || products[0]
  )

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId)
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [productId])

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find((item: typeof product) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + quantity
    } else {
      cart.push({ ...product, quantity })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cartUpdated'))
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="product-page">
      <section className="product-section section">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> /{' '}
            {product.name}
          </div>

          <div className="product-detail">
            <motion.div
              className="product-image-section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="product-image-wrapper">
                {product.sale && (
                  <span className="sale-badge">Sale</span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="product-main-image"
                />
              </div>
            </motion.div>

            <motion.div
              className="product-info-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="product-title">{product.name}</h1>
              <div className="product-price-section">
                {product.sale && product.originalPrice && (
                  <span className="original-price">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="current-price">
                  ${product.price.toLocaleString()}
                </span>
              </div>

              <p className="product-description">{product.description}</p>

              <div className="product-features">
                <h3>Features:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions">
                <div className="quantity-selector">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                  >
                    <FiMinus />
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                  >
                    <FiPlus />
                  </button>
                </div>

                <motion.button
                  className="btn btn-primary add-to-cart-btn"
                  onClick={addToCart}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiShoppingCart /> Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

