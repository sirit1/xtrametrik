'use client'

import Header from '@/components/header'
import HeroPremium from '@/components/hero-premium'
import HomeAilock from '@/components/home-ailock'
import HomeO2o from '@/components/home-o2o'
import LiveProjects from '@/components/live-projects'
import HomeBlogLine from '@/components/home-blog-line'
import ConsultationForm from '@/components/consultation-form'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroPremium />
        <HomeAilock />
        <HomeO2o />
        <LiveProjects />
        <HomeBlogLine />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  )
}
