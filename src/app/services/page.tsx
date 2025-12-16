import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Explore our services including Web Development, Mobile Apps, Custom Software, and API Integration.',
};
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { CTASection } from '@/components/sections/CTASection';
import { Monitor, Smartphone, Code, Zap, Server, LifeBuoy, Database, Lock } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        { title: 'Full Stack Web Development', description: 'End-to-end web application development using React, Next.js, Node.js, and modern databases. We build scalable, SEO-friendly, and high-performance websites.', icon: Monitor },
        { title: 'Mobile App Development', description: 'Native (iOS/Android) and cross-platform solutions using React Native and Flutter. We create engaging mobile experiences that users love.', icon: Smartphone },
        { title: 'Custom Software Development', description: 'Bespoke software tailored to your unique business processes. From internal tools to customer-facing portals, we build what you need.', icon: Code },
        { title: 'API Integration & Development', description: 'Connecting your systems with third-party services (Stripe, Salesforce, etc.) or building robust custom APIs for your platforms.', icon: Zap },
        { title: 'Cloud & Hosting Support', description: 'AWS, Azure, and Google Cloud management. We ensure your infrastructure is secure, scalable, and cost-effective.', icon: Server },
        { title: 'Maintenance & Support', description: 'Dedicated support packages to keep your software up-to-date, secure, and bug-free. We handle the technical side so you can focus on business.', icon: LifeBuoy },
        { title: 'Database Design & Management', description: 'Optimized database schemas and management for high-volume data applications. SQL and NoSQL expertise.', icon: Database },
        { title: 'Cybersecurity Consulting', description: 'Basic security audits and implementation of best practices to protect your data and users.', icon: Lock },
    ];

    return (
        <div className="flex flex-col gap-20 py-20">
            <section className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Services</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Comprehensive IT solutions covering every aspect of your digital journey.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </section>

            <CTASection />
        </div>
    );
}
