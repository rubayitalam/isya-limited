import type { Metadata } from 'next';
import EstimateForm from '@/components/forms/EstimateForm';

export const metadata: Metadata = {
    title: 'Get an Estimate',
    description: 'Request a project estimation. Tell us about your project and we will get back to you.',
};

export default function EstimatePage() {
    return (
        <div className="min-h-screen py-32 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-orange-100 transition-colors opacity-50"></div>

                    <div className="p-12 lg:p-16 border-b border-slate-50 text-center relative z-10">
                        <h2 className="text-xs font-black tracking-[0.3em] text-orange-600 uppercase mb-6">Expert Consultation</h2>
                        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6">Estimate Your Project</h1>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Tell us about your project requirements and we'll get back to you with a detailed quote within 24 hours.
                        </p>
                    </div>
                    <div className="p-12 lg:p-16 relative z-10">
                        <EstimateForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
