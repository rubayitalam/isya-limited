import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Isya Limited</h3>
                        <p className="text-sm text-slate-400">
                            Modern Full IT Solutions & Software Services provider helping businesses scale and innovate.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/services" className="hover:text-white transition">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Mobile Apps</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Custom Software</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Cloud Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                            <li><Link href="/estimate" className="hover:text-white transition">Get Estimate</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="flex items-start">
                                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                                <span>
                                    4th Floor, Office 205, Regent Street,<br />
                                    London, W1B 4HB, UK
                                </span>
                            </li>
                            <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +44 7988 122509</li>
                            <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +44 7543 599291</li>
                            <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@isyalimited.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© 2025 Isya Limited. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-white"><Github className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
