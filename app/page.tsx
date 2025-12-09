'use client'

import Hero from '@/components/Hero'
import CategoryGrid from '@/components/CategoryGrid'
import ServiceBenefits from '@/components/ServiceBenefits'
import PromotionalBanners from '@/components/PromotionalBanners'
import BestSellers from '@/components/BestSellers'
import RecentNews from '@/components/RecentNews'
import BrandPartners from '@/components/BrandPartners'

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ServiceBenefits />
      <PromotionalBanners />
      <BestSellers />
      <RecentNews />
      <BrandPartners />
    </>
  )
}

