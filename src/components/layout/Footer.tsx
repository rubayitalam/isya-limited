import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-24">
                    <div className="md:col-span-4 space-y-8">
                        <h3 className="text-3xl font-black text-white tracking-tighter">Pixlo</h3>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            Modern Full IT Solutions & Software Services provider helping businesses scale and innovate with UK precision.
                        </p>
                        <div className="inline-flex items-center px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-slate-800 text-slate-300 border border-slate-700">
                            🇬🇧 UK Based Technology Partner
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Services</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Custom Software</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Cloud Support</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Company</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/estimate" className="hover:text-white transition-colors">Get Estimate</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Contact</h4>
                        <ul className="space-y-6 text-sm font-bold">
                            <li className="flex items-start gap-4">
                                <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-4 w-4 text-slate-400" />
                                </div>
                                <span className="leading-relaxed">
                                    4th Floor, Office 205, Regent Street,<br />
                                    London, W1B 4HB, UK
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-4 w-4 text-slate-400" />
                                </div>
                                <span>+44 7988 122509</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <Mail className="h-4 w-4 text-slate-400" />
                                </div>
                                <span>pixlolimited@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    <p>© 2025 Pixlo. Built for Industry Leaders.</p>
                    <div className="flex space-x-6 mt-8 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
