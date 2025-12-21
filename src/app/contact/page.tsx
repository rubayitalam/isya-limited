import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Pixlo. Phone, email, and UK headquarters information.',
};

export default function ContactPage() {
    return (
        <div className="py-20 space-y-20">
            <section className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Contact Us</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Have a question or want to discuss a project? Reach out to us.
                </p>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-slate-900">Registered Office</h3>
                                <p className="mt-2 text-slate-600">
                                    Isya Limited<br />
                                    4th Floor, Office 205, Regent Street,<br />
                                    London, England, W1B 4HB<br />
                                    United Kingdom
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                                <p className="mt-2 text-slate-600">
                                    +44 7988 122509<br />
                                    +44 7543 599291
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-slate-900">Email</h3>
                                <p className="mt-2 text-slate-600">
                                    pixlolimited@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-slate-900">Business Hours</h3>
                                <p className="mt-2 text-slate-600">
                                    Monday - Friday: 9:00 AM - 6:00 PM (GMT)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map of Regent Street */}
                    <div className="rounded-2xl overflow-hidden border border-slate-100 min-h-[400px] shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3379518428526!2d-0.14166292337841584!3d51.51302821074718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d53a992011%3A0xe5417abf515096!2s205%20Regent%20St.%2C%20London%20W1B%204HB%2C%20UK!5e0!3m2!1sen!2suk!4v1709420000000!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
