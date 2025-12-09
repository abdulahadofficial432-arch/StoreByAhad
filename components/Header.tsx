'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Get cart count from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartCount(cart.length)
    
    // Listen for cart updates
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartCount(updatedCart.length)
    }
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('cartUpdated', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cartUpdated', handleStorageChange)
    }
  }, [])

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <Link href="/" className="logo">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PHLOX
          </motion.span>
        </Link>

        <nav className="nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/shop" className="nav-link">Shop</Link>
          <Link href="/about" className="nav-link">About Us</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
        </nav>

        <div className="header-actions">
          <motion.button
            className="icon-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              const searchModal = document.getElementById('search-modal')
              if (searchModal) searchModal.style.display = 'flex'
            }}
          >
            <FiSearch />
          </motion.button>
          <Link href="/cart" className="icon-btn cart-btn">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiShoppingCart />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </motion.div>
          </Link>
          <Link href="/login" className="icon-btn">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiUser />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Search Modal */}
      <div id="search-modal" className="search-modal">
        <div className="search-modal-content">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            autoFocus
          />
          <button
            className="close-search"
            onClick={() => {
              const searchModal = document.getElementById('search-modal')
              if (searchModal) searchModal.style.display = 'none'
            }}
          >
            ×
          </button>
        </div>
      </div>
    </motion.header>
  )
}

