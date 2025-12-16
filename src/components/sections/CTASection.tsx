import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function CTASection() {
    return (
        <section className="py-20 bg-primary/5 border-y border-primary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                    Ready to kickstart your next project?
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-8">
                    Get a free estimate today and let's discuss how we can help your business grow with our top-notch software solutions.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/estimate" className={cn(buttonVariants({ size: 'lg' }), 'rounded-full px-8 text-md shadow-lg shadow-primary/20')}>
                        Get Project Estimate
                    </Link>
                    <Link href="/contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-full px-8 bg-white hover:bg-slate-50')}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
