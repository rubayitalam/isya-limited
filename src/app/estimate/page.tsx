import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Get an Estimate',
    description: 'Request a project estimation. Tell us about your project and we will get back to you.',
};

export default function EstimatePage() {
    return (
        <div className="min-h-screen py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-8 border-b border-slate-100 text-center">
                        <h1 className="text-3xl font-bold text-slate-900">Estimate Your Project</h1>
                        <p className="mt-2 text-slate-600">
                            Tell us about your project requirements and we’ll get back to you with a detailed quote within 24 hours.
                        </p>
                    </div>
                    <div className="w-full aspect-[1/1.5] md:aspect-[1/1.2] lg:h-[800px]">
                        {/* 
                TODO: Replace the src below with your actual Google Form Embed URL. 
                Go to Google Forms -> Send -> Embed HTML -> Copy the src URL.
                Example src: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
             */}
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfKako4EZDZ13eK-DSACGTnhl_l_axfNUr3AjVckEKHj1E7mQ/viewform?embedded=true"
                            width="100%"
                            height="100%"
                            className="border-none"
                            title="Project Estimation Form"
                        >
                            Loading form...
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
