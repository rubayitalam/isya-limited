import Image from 'next/image';

export function SocialProof() {
    return (
        <section className="bg-white py-24 border-y border-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">
                    Industry Leaders who trust Pixlo
                </p>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">TechHub</span>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">Ventures</span>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">StartScale</span>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">GrowthLab</span>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">PrismAI</span>
                </div>
            </div>
        </section>
    );
}
