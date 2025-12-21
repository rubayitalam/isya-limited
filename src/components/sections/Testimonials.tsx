import { Star } from 'lucide-react';

const reviews = [
    {
        content: "We needed an e-commerce site for our boutique but had zero budget. Pixlo built us a stunning free website that actually converts. Sales are up 200%!",
        author: "Jessica M.",
        role: "Owner, Velvet & Vine",
        rating: 5
    },
    {
        content: "Exceptional service for our enterprise software needs. They understood our complex requirements and delivered a secure, scalable platform ahead of schedule.",
        author: "David R.",
        role: "CTO, FinStream Ltd",
        rating: 5
    },
    {
        content: "I was skeptical about the 'free website' offer, but they delivered. Professional, fast, and no hidden catches. Highly recommend their services.",
        author: "Marcus T.",
        role: "Director, Urban Coffee Co.",
        rating: 5
    },
    {
        content: "The best decision we made for our startup. The team is knowledgeable, friendly, and truly cares about your success. The ongoing support is fantastic.",
        author: "Sarah Jenkins",
        role: "Founder, Bloom Digital",
        rating: 5
    },
    {
        content: "They transformed our outdated site into a modern, mobile-friendly masterpiece. Our customers love the new look and feel.",
        author: "Robert Chen",
        role: "Manager, Chen's Bistro",
        rating: 5
    },
    {
        content: "Reliable, professional, and talented. Whether you need a simple site or a complex web app, Pixlo is the partner you want.",
        author: "Emily Watson",
        role: "VP Marketing, TechFlow",
        rating: 5
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200 relative">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Loved by Businesses Everywhere
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        We're proud to support the growth of companies across the UK and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="flex text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-current" />
                                    ))}
                                </div>
                                <span className="ml-3 text-sm font-semibold text-slate-400">Verified Client</span>
                            </div>
                            <blockquote className="flex-1 mb-6">
                                <p className="text-slate-700 leading-relaxed text-lg">"{review.content}"</p>
                            </blockquote>
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-lg">
                                    {review.author.charAt(0)}
                                </div>
                                <div className="ml-3">
                                    <div className="font-bold text-slate-900">{review.author}</div>
                                    <div className="text-sm text-slate-500">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
