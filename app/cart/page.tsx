'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi'
import './cart.css'

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  originalPrice?: number
  sale?: boolean
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(cartData)
    setLoading(false)
  }, [])

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const updateQuantity = (id: number, change: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    updateCart(updatedCart)
  }

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    updateCart(updatedCart)
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = subtotal > 0 ? 50 : 0
  const total = subtotal + shipping

  if (loading) {
    return <div className="cart-loading">Loading...</div>
  }

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <section className="cart-empty section">
          <div className="container">
            <motion.div
              className="empty-cart-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FiShoppingBag className="empty-icon" />
              <h2>Your cart is empty</h2>
              <p>Start shopping to add items to your cart</p>
              <Link href="/shop">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue Shopping
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <section className="cart-hero section">
        <div className="container">
          <motion.h1
            className="cart-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Shopping Cart
          </motion.h1>
        </div>
      </section>

      <section className="cart-content section">
        <div className="container">
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="cart-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="item-image">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-price">
                      {item.sale && item.originalPrice && (
                        <span className="original-price">
                          ${item.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="current-price">
                        ${item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="quantity-btn"
                    >
                      <FiMinus />
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="quantity-btn"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <div className="item-total">
                    <span className="total-price">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="remove-btn"
                  >
                    <FiTrash2 />
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="cart-summary"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="summary-title">Order Summary</h2>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>${shipping.toLocaleString()}</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
              <motion.button
                className="btn btn-primary checkout-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert('Checkout functionality would be implemented here!')}
              >
                Proceed to Checkout
              </motion.button>
              <Link href="/shop">
                <motion.button
                  className="btn btn-white continue-shopping"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue Shopping
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

