import { HeroSection } from '@/components/sections/HeroSection';
import { SocialProof } from '@/components/sections/SocialProof';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';
import { HowItWorks } from '@/components/sections/HowItWorks';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeroSection />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTASection />
    </main>
  );
}
