import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle, Code, ShoppingBag } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-48 lg:pb-32">
            {/* Background elements - Simplified for premium feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.05)_0%,rgba(255,255,255,0)_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-12 text-center">
                        <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-bold text-slate-600 mb-10 shadow-sm uppercase tracking-widest">
                            UK Based Technology Partner 🇬🇧
                        </div>

                        <h1 className="text-5xl font-black tracking-tighter text-slate-900 sm:text-7xl md:text-8xl mb-8 leading-[1.05] max-w-5xl mx-auto">
                            Get a professional website and <span className="text-orange-600">jumpstart your business</span>
                        </h1>

                        <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                            We build high-converting, premium websites at light-speed to help small businesses grow.
                            Offering the highest quality engineering for established companies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                            <Link href="/estimate">
                                <Button variant="accent" size="lg" className="h-16 px-10 rounded-full text-xl font-bold w-full sm:w-auto">
                                    Start Now - It's Free
                                    <ArrowRight className="ml-3 h-6 w-6" />
                                </Button>
                            </Link>
                            <Link href="/booking">
                                <Button variant="primary" size="lg" className="h-16 px-10 rounded-full text-lg font-semibold w-full sm:w-auto">
                                    Book a Call
                                </Button>
                            </Link>
                            <Link href="/projects">
                                <Button variant="secondary" size="lg" className="h-16 px-10 rounded-full text-lg font-bold w-full sm:w-auto border-2 border-slate-200 hover:border-orange-500 hover:text-orange-600 transition-all">
                                    View Our Work
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Visual Content - Removed or will be refactored for a more minimal approach */}
                </div>
            </div>
        </section>
    );
}
