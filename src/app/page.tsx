import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Process } from '@/components/sections/process';
import { About } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Reveal } from '@/components/ui/reveal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
