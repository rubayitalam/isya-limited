import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Isya Limited, a UK-based technology partner delivering excellence in software development.',
};
import { Button, buttonVariants } from '@/components/ui/Button';
import { Target, Eye, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AboutPage() {
    return (
        <div className="space-y-20 py-20 pb-0">
            <section className="relative bg-slate-900 py-32 overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img src="/images/about-team.png" alt="Our Team" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                            <span>About Us</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Building the Future Together</h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Isya Limited is a UK-based technology partner for comprehensive IT solutions. We bridge the gap between complex technology and business growth.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-20 border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4 text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                            <p className="text-slate-600">
                                To empower businesses with scalable, secure, and innovative digital solutions that drive tangible results.
                            </p>
                        </div>
                        <div className="space-y-4 text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                <Eye className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                            <p className="text-slate-600">
                                To be the most trusted global technology partner, known for technical excellence and client-centric delivery.
                            </p>
                        </div>
                        <div className="space-y-4 text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                <Globe className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Global Reach</h3>
                            <p className="text-slate-600">
                                Headquartered in the United Kingdom, we leverage a distributed team of top-tier talent to deliver 24/7 support and development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-20">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold text-slate-900">Ready to work with us?</h2>
                    <p className="text-lg text-slate-600">
                        Join the companies who trust Isya Limited with their critical software infrastructure.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/estimate" className={cn(buttonVariants({ size: 'lg' }))}>
                            Get an Estimate
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
