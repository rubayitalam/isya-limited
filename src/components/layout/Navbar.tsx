import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu } from 'lucide-react';
// import { cn } from '@/lib/utils'; // Keep if needed for other things, but simplified here

export function Navbar() {
    return (
        <nav className="border-b border-slate-50 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-3 group">
                        <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black group-hover:rotate-12 transition-transform duration-300">P</div>
                        <span className="group-hover:text-orange-600 transition-colors">Pixlo</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em]">
                    <Link href="/" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-105">
                        Home
                    </Link>
                    <Link href="/services" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-105">
                        Services
                    </Link>
                    <Link href="/contact" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-105">
                        Contact
                    </Link>
                    <Link href="/booking" className="text-blue-600 hover:text-blue-700 transition-all hover:scale-105">
                        Book a Call
                    </Link>
                    <Link href="/estimate">
                        <Button variant="accent" size="sm" className="shadow-lg shadow-orange-600/10 h-10 px-6">
                            Start Now
                        </Button>
                    </Link>
                </div>

                <div className="flex md:hidden">
                    <Button variant="ghost" size="sm" className="rounded-xl">
                        <Menu className="h-6 w-6 text-slate-600" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
