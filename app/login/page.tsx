'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import './login.css'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login/register
    alert(
      isLogin
        ? 'Login successful! (This is a demo)'
        : 'Registration successful! (This is a demo)'
    )
    router.push('/')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="login-page">
      <section className="login-section section">
        <div className="container">
          <motion.div
            className="login-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="login-header">
              <h1 className="login-title">
                {isLogin ? 'Login' : 'Create Account'}
              </h1>
              <p className="login-subtitle">
                {isLogin
                  ? 'Welcome back! Please login to your account.'
                  : 'Create a new account to get started.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  minLength={6}
                />
              </div>

              {isLogin && (
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="forgot-link">
                    Forgot password?
                  </Link>
                </div>
              )}

              <motion.button
                type="submit"
                className="btn btn-primary login-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLogin ? 'Login' : 'Create Account'}
              </motion.button>
            </form>

            <div className="login-footer">
              <p>
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  className="toggle-link"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign up' : 'Login'}
                </button>
              </p>
            </div>

            <div className="login-divider">
              <span>Or continue with</span>
            </div>

            <div className="social-login">
              <motion.button
                className="social-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Google
              </motion.button>
              <motion.button
                className="social-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Facebook
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

