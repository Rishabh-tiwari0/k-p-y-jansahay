import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AdmissionsBanner } from '@/components/admissions-banner'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Counters } from '@/components/counters'
import { PrincipalWelcome } from '@/components/principal-welcome'
import { AboutTabs } from '@/components/about-tabs'
import { Academics } from '@/components/academics'
import { Facilities } from '@/components/facilities'
import { Gallery } from '@/components/gallery'
import { Admission } from '@/components/admission'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <AdmissionsBanner />
        <WhyChooseUs />
        <Counters />
        <PrincipalWelcome />
        <AboutTabs />
        <Academics />
        <Facilities />
        <Gallery />
        <Admission />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
