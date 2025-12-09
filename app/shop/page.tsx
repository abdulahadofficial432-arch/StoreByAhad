'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FiShoppingCart, FiFilter } from 'react-icons/fi'
import './shop.css'

const allProducts = [
  {
    id: 1,
    name: 'Beats',
    price: 995,
    image: '/media/Black.png',
    category: 'earphones',
    sale: false,
  },
  {
    id: 2,
    name: 'Rocky Mountain',
    price: 8250,
    image: '/media/Apple.png',
    category: 'earphones',
    sale: false,
  },
  {
    id: 3,
    name: 'Game Console Controller Cable',
    price: 8250,
    image: '/media/Red.png',
    category: 'gaming',
    sale: false,
  },
  {
    id: 4,
    name: 'Gore Wear C7',
    price: 499,
    image: '/media/Black.png',
    category: 'earphones',
    sale: false,
  },
  {
    id: 5,
    name: 'Wireless Audio System Multiroom 360',
    price: 8250,
    image: '/media/Apple.png',
    category: 'speakers',
    sale: false,
  },
  {
    id: 6,
    name: 'Beats',
    price: 9950,
    originalPrice: 11000,
    image: '/media/Red.png',
    category: 'earphones',
    sale: true,
  },
  {
    id: 7,
    name: 'Smartwatch 2.0 LTE WII',
    price: 499,
    image: '/media/Apple.png',
    category: 'wearables',
    sale: false,
  },
  {
    id: 8,
    name: 'Premium Laptop Pro',
    price: 1299,
    image: '/media/Black.png',
    category: 'laptops',
    sale: false,
  },
  {
    id: 9,
    name: 'VR Headset Elite',
    price: 599,
    image: '/media/Red.png',
    category: 'vr',
    sale: false,
  },
]

const categories = [
  'All',
  'earphones',
  'wearables',
  'laptops',
  'gaming',
  'vr',
  'speakers',
]

function ShopContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || 'All'
  )
  const [products, setProducts] = useState(allProducts)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    if (selectedCategory === 'All') {
      setProducts(allProducts)
    } else {
      setProducts(
        allProducts.filter((p) => p.category === selectedCategory.toLowerCase())
      )
    }
  }, [selectedCategory])

  const addToCart = (product: typeof allProducts[0]) => {
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
    <div className="shop-page">
      <section className="shop-hero section">
        <div className="container">
          <motion.div
            className="shop-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="shop-title">Shop</h1>
            <p className="shop-subtitle">Discover our amazing collection</p>
          </motion.div>
        </div>
      </section>

      <section className="shop-content section">
        <div className="container">
          <div className="shop-layout">
            <motion.aside
              className="shop-sidebar"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sidebar-header">
                <h3>Categories</h3>
                <button
                  className="filter-toggle"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <FiFilter />
                </button>
              </div>
              <div className={`category-filters ${showFilters ? 'show' : ''}`}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-filter ${
                      selectedCategory === category ? 'active' : ''
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </motion.aside>

            <div className="shop-products">
              <motion.div
                className="products-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="product-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="shop-loading">Loading...</div>}>
      <ShopContent />
    </Suspense>
  )
}

