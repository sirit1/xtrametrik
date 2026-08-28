'use client'

import Header from '@/components/header'
import HeroPremium from '@/components/hero-premium'
import MethodSteps from '@/components/method-steps'
import EnginesSection from '@/components/engines-section'
import PainPointsUrgency from '@/components/pain-points-urgency'
import AuthorityHero from '@/components/authority-hero'
import RiskMatrixCompact from '@/components/risk-matrix-compact'
import CasesGridCompact from '@/components/cases-grid-compact'
import LiveProjects from '@/components/live-projects'
import BlogSection from '@/components/blog-section'
import ConsultationForm from '@/components/consultation-form'
import PremiumCTA from '@/components/premium-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroPremium />
        <MethodSteps />
        <EnginesSection />
        <LiveProjects />
        <PainPointsUrgency />
        <AuthorityHero />
        <RiskMatrixCompact />
        <CasesGridCompact />
        <BlogSection />
        <ConsultationForm />
        <PremiumCTA />
      </main>
      <Footer />
    </div>
  )
}
