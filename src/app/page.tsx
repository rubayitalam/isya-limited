import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/Button';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { CTASection } from '@/components/sections/CTASection';
import { Code, Smartphone, Zap, Monitor, Server, LifeBuoy } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const services = [
    { title: 'Full Stack Web Development', description: 'Scalable, modern web applications built with the latest technologies like Next.js, React, and Node.js.', icon: Monitor },
    { title: 'Mobile App Development', description: 'Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.', icon: Smartphone },
    { title: 'Custom Software Development', description: 'Tailored software solutions designed to meet your specific business requirements and challenges.', icon: Code },
    { title: 'API Integration', description: 'Robust API development and integration services to connect your systems and improve efficiency.', icon: Zap },
    { title: 'Cloud & Hosting Support', description: 'Secure and reliable cloud hosting solutions to ensure your applications are always available.', icon: Server },
    { title: 'Maintenance & Support', description: 'Ongoing support and bug fixing to keep your software running smoothly and securely.', icon: LifeBuoy },
  ];

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40 bg-white">
        <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'url(/images/pattern.png)', backgroundSize: '400px' }}></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary shadow-sm backdrop-blur-sm bg-white/50">
                <span>🇬🇧 UK-Based Global Tech Partner</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-tight">
                Transforming Ideas into <br className="hidden lg:inline" />
                <span className="text-primary">Digital Reality</span>
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-slate-600 sm:text-xl leading-relaxed">
                Isya Limited creates world-class digital products. We are a team of expert engineers and designers building the future of web and mobile software.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Link href="/estimate" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'rounded-full px-8 text-md shadow-xl shadow-primary/20 hover:scale-105 transition-transform')}>
                  Get Your Estimate
                </Link>
                <Link href="/services" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-full px-8 bg-white hover:bg-slate-50 hover:scale-105 transition-transform')}>
                  Our Services
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              {/* Hero Image */}
              <div className="relative w-full aspect-square max-w-[600px] animate-fade-in-up">
                <img
                  src="/images/hero.png"
                  alt="Digital Innovation"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                {/* Floating elements decoration */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container px-4 mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">What We Do</h2>
          <p className="text-lg text-slate-600">
            We deliver end-to-end IT solutions designed to help your business grow. From concept to deployment, we handle it all.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose Isya Limited?
              </h2>
              <p className="text-lg text-slate-600">
                We combine technical expertise with business acumen to deliver software that actually drives results.
              </p>
              <ul className="space-y-4">
                {[
                  'UK-Based & Global Standards',
                  'Agile Development Process',
                  'Experienced Senior Engineers',
                  'Transparent Communication',
                  'On-Time Delivery',
                  'Post-Launch Support'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className={cn(buttonVariants({ variant: 'outline' }), 'mt-4')}>
                More About Us
              </Link>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl bg-white p-8 shadow-sm flex items-center justify-center border border-slate-100">
              {/* Abstract Visual / Illustration */}
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-primary">100+</div>
                <div className="text-xl font-medium text-slate-900">Projects Delivered successfully</div>
                <p className="text-slate-500">Across 10+ Industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container px-4 mx-auto pb-20">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Our Methodology</h2>
          <p className="text-lg text-slate-600">
            A proven process to ensure your project succeeds.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-5 text-center">
          {['Discover', 'Design', 'Develop', 'Test', 'Deploy'].map((step, i) => (
            <div key={i} className="relative p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-2xl font-bold text-primary mb-4 border border-slate-100">
                {i + 1}
              </div>
              <h3 className="font-bold text-slate-900">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
