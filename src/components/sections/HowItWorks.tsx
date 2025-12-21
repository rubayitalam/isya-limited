import { FileText, Hammer, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const steps = [
    {
        title: 'Apply for Free',
        description: 'Fill out our simple application form. We review your business model to see if you qualify for our free website program.',
        icon: FileText,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'We Build It',
        description: 'Our expert team designs and builds a professional, conversion-optimized website tailored to your brand.',
        icon: Hammer,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        title: 'Launch & Grow',
        description: 'Get your website live! We hand over the keys, and you start growing your business with a powerful digital asset.',
        icon: Rocket,
        color: 'bg-green-100 text-green-600',
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold tracking-wide text-orange-600 uppercase">Simple Process</h2>
                    <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        How to get your free website
                    </p>
                    <p className="mt-4 text-lg text-slate-600">
                        We've streamlined the process to get you online fast. No coding required on your end.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={step.title} className="relative flex flex-col items-center text-center">
                            <div className={`flex items-center justify-center w-24 h-24 rounded-full ${step.color} mb-6 border-4 border-white shadow-sm`}>
                                <step.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                            <div className="mt-4 inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold border border-slate-200 md:absolute md:top-8 md:-right-4 md:hidden">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/estimate">
                        <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
                            Start Application
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
