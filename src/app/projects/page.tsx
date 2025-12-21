'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { projects, Project } from '@/data/projectsData';
import { ProjectCard } from '@/components/projects/ProjectCard';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

type Category = 'all' | 'web' | 'mobile' | 'software';

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const categories: { value: Category; label: string }[] = [
        { value: 'all', label: 'All Projects' },
        { value: 'web', label: 'Web' },
        { value: 'mobile', label: 'Mobile' },
        { value: 'software', label: 'Software' },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white pt-32 pb-20 border-b border-slate-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-[radial-gradient(50%_50%_at_50%_0%,rgba(249,115,22,0.05)_0%,rgba(255,255,255,0)_100%)] pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold text-orange-600 mb-8 shadow-sm uppercase tracking-widest">
                            Our Portfolio
                        </div>

                        <h1 className="text-5xl font-black tracking-tighter text-slate-900 sm:text-6xl md:text-7xl mb-6 leading-tight">
                            Projects We've <span className="text-orange-600">Built</span>
                        </h1>

                        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                            From startups to enterprises, we've delivered cutting-edge solutions that drive real business results. Here's a showcase of our recent work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setActiveCategory(category.value)}
                                className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 ${activeCategory === category.value
                                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-2xl text-slate-400 font-bold">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                            Ready to grow your business?
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                            Get a high-converting website built by professionals. Start your project today with a free estimate.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <Link href="/estimate">
                                <Button variant="secondary" size="lg" className="h-16 px-10 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform w-full sm:w-auto">
                                    Get Your Free Quote
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="ghost" size="lg" className="h-16 px-10 rounded-full text-lg font-bold text-white border-2 border-white hover:bg-white hover:text-slate-900 transition-all w-full sm:w-auto">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center gap-6 text-slate-300 text-sm">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">Free initial consultation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
