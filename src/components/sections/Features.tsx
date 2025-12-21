import { Zap, Shield, Smartphone, Globe, BarChart, Users, ShoppingBag, Server } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Features() {
    return (
        <section className="py-32 bg-slate-50" id="services">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <h2 className="text-xs font-black tracking-[0.3em] text-orange-600 uppercase mb-4">Our Core Offerings</h2>
                    <p className="text-4xl font-black text-slate-900 sm:text-6xl tracking-tight mb-6">
                        Two Visions. One Goal: Your Success.
                    </p>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        We cater to both emerging businesses looking for a head start and established enterprises needing robust technical solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Track 1: Small Business (Free) */}
                    <div className="group bg-white rounded-[2.5rem] p-10 lg:p-14 border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-orange-100 transition-colors"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center rounded-full bg-orange-50 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-orange-600 mb-8 border border-orange-100">
                                Small Business & E-commerce
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Start Your Journey <br /><span className="text-orange-600">for Free</span></h3>
                            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                                We believe in empowering small businesses. Get a premium website setup for your eligible small e-commerce business at zero upfront cost.
                            </p>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-4 text-slate-600 font-medium">
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                                        <ShoppingBag className="h-5 w-5" />
                                    </div>
                                    <span>E-commerce Store Setup</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-600 font-medium">
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                                        <Globe className="h-5 w-5" />
                                    </div>
                                    <span>Basic SEO Configuration</span>
                                </div>
                            </div>

                            <Link href="/estimate">
                                <Button variant="accent" size="lg" className="rounded-full w-full sm:w-auto">Check Eligibility</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Track 2: Enterprise (Paid) */}
                    <div className="group bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 relative overflow-hidden text-white">
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -mr-24 -mb-24 group-hover:bg-blue-500/20 transition-colors"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-blue-400 mb-8 border border-blue-500/20">
                                Enterprise Solutions
                            </div>
                            <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Premium Software <br /><span className="text-blue-400">Engineering</span></h3>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                For established businesses requiring complex logic, high scalability, and custom functionality. Built by UK experts.
                            </p>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-4 text-slate-300 font-medium">
                                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                                        <Server className="h-5 w-5" />
                                    </div>
                                    <span>Custom SaaS Development</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300 font-medium">
                                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                                        <Shield className="h-5 w-5" />
                                    </div>
                                    <span>Enterprise Security & Scalability</span>
                                </div>
                            </div>

                            <Link href="/services">
                                <Button variant="secondary" size="lg" className="rounded-full w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 border-0">Explore Solutions</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-block p-1 rounded-full bg-white border border-slate-100 shadow-sm">
                        <div className="px-6 py-3 flex items-center gap-4">
                            <span className="text-sm font-bold text-slate-500 italic">Not sure which track fits you?</span>
                            <Link href="/contact">
                                <Button variant="link" className="text-orange-600 font-black p-0 h-auto">
                                    Talk to an Expert →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
