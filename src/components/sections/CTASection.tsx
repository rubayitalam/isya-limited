import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl font-extrabold tracking-tight mb-6 sm:text-5xl">
                    Ready to grow your business?
                </h2>
                <p className="mx-auto max-w-2xl text-xl text-slate-300 mb-10">
                    Get a high-converting website built by professionals. Start your project today with a free estimate.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/estimate">
                        <Button variant="accent" size="lg" className="w-full sm:w-auto rounded-full px-12 h-14 text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                            Get Your Free Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-12 h-14 text-lg font-bold border-slate-700 text-white hover:bg-slate-800 hover:text-white">
                            Contact Us
                        </Button>
                    </Link>
                </div>
                <p className="mt-8 text-sm text-slate-500">
                    No credit card required. Free initial consultation.
                </p>
            </div>
        </section>
    );
}
