import { Navbar }        from './layout/Navbar'
import { Hero }          from './sections/Hero'
import { Features }      from './sections/Features'
import { Pricing }       from './sections/Pricing'
import { Testimonials }  from './sections/Testimonials'
import { FooterSection } from './sections/FooterSection'

export function HomePage() {
  return (
    <div style={{ overflowX: 'hidden', fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FooterSection />
    </div>
  )
}
