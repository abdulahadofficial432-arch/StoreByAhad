# PHLOX - E-Commerce Store

A modern, fully functional e-commerce website built with Next.js, featuring animations, parallax effects, and a complete shopping experience.

## Features

- 🎨 **Modern Design** - Clean, professional UI matching the original design
- ✨ **Animations** - Smooth animations using Framer Motion
- 🌊 **Parallax Effects** - Engaging parallax scrolling effects
- 🛒 **Shopping Cart** - Full cart functionality with localStorage
- 📱 **Responsive** - Mobile-friendly design
- 🔍 **Search** - Product search functionality
- 📄 **All Pages** - Home, Shop, About, Blog, Contact, Cart, Login
- 🎯 **Fully Functional** - All buttons, links, and interactions working

## Pages

- **Home** - Hero section, categories, services, promotional banners, best sellers, news, and brand partners
- **Shop** - Product listings with category filters
- **Product Detail** - Individual product pages with add to cart
- **About** - Company information and values
- **Blog** - Blog listing and individual blog posts
- **Contact** - Contact form and information
- **Cart** - Shopping cart with quantity management
- **Login** - Login and registration page

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header and footer
│   ├── page.tsx            # Home page
│   ├── shop/               # Shop pages
│   ├── about/              # About page
│   ├── blog/               # Blog pages
│   ├── contact/            # Contact page
│   ├── cart/               # Cart page
│   └── login/              # Login page
├── components/             # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── CategoryGrid.tsx
│   ├── ServiceBenefits.tsx
│   ├── PromotionalBanners.tsx
│   ├── BestSellers.tsx
│   ├── RecentNews.tsx
│   └── BrandPartners.tsx
├── public/
│   └── media/              # Product images
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **React Parallax** - Parallax effects
- **React Icons** - Icon library
- **CSS Modules** - Styling

## Features in Detail

### Animations
- Smooth page transitions
- Hover effects on products and buttons
- Scroll-triggered animations
- Loading animations

### Shopping Cart
- Add/remove items
- Quantity management
- Persistent storage (localStorage)
- Real-time cart updates

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

## Customization

### Colors
Edit `app/globals.css` to change the color scheme:
```css
:root {
  --primary-red: #e63946;
  --primary-black: #1a1a1a;
  --primary-gray: #f5f5f5;
}
```

### Products
Update product data in:
- `components/BestSellers.tsx`
- `app/shop/page.tsx`
- `app/shop/[id]/page.tsx`

## License

This project is created for demonstration purposes.

