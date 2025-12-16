import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/Button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold tracking-tight text-primary">
                        Isya Limited
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/about" className="transition-colors hover:text-primary/80 text-foreground/60">
                        About Us
                    </Link>
                    <Link href="/services" className="transition-colors hover:text-primary/80 text-foreground/60">
                        Services
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-primary/80 text-foreground/60">
                        Contact
                    </Link>
                    <Link href="/estimate" className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}>
                        Get Estimate
                    </Link>
                </div>

                <div className="flex md:hidden">
                    <Button variant="ghost" size="sm">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
