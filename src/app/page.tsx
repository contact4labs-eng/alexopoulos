import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { ServicesGrid } from '@/components/sections/services-grid';
import { WhyUs } from '@/components/sections/why-us';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactStrip } from '@/components/sections/contact-strip';
import { CTASection } from '@/components/sections/cta-section';
import { Reveal } from '@/components/ui/reveal';
import { mainServices } from '@/data/services';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Reveal>
        <ServicesGrid services={mainServices} />
      </Reveal>
      <Reveal>
        <WhyUs />
      </Reveal>
      <Reveal>
        <Testimonials limit={6} />
      </Reveal>
      <Reveal>
        <ContactStrip />
      </Reveal>
      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
