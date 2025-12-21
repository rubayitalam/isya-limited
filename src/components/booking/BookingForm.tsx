'use client';

import React from 'react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/Button';
import { User, Mail, Building2, MessageSquare, ArrowLeft, Phone } from 'lucide-react';

interface BookingFormProps {
    onSubmit: (data: any) => void;
    onBack: () => void;
    selectedDate: Date | null;
    selectedTime: string | null;
}

export function BookingForm({ onSubmit, onBack, selectedDate, selectedTime }: BookingFormProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data);
    };

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden max-w-2xl mx-auto p-10 lg:p-14 relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-50 transition-colors"></div>

            <button
                onClick={onBack}
                className="relative z-10 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-10 group/back"
            >
                <ArrowLeft className="h-4 w-4 group-hover/back:-translate-x-1 transition-transform" />
                <span className="font-black text-[10px] uppercase tracking-[0.2em]">Change Date</span>
            </button>

            <div className="relative z-10">
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Final Step</h2>
                <div className="flex flex-wrap gap-3 mb-10">
                    {selectedDate && (
                        <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2">
                            <span className="text-xs font-black text-slate-900">{format(selectedDate, 'MMM d, yyyy')}</span>
                        </div>
                    )}
                    {selectedTime && (
                        <div className="px-4 py-2 bg-orange-50 border border-orange-100 rounded-xl flex items-center gap-2">
                            <span className="text-xs font-black text-orange-600">{selectedTime}</span>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative group/input">
                                <User className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within/input:text-slate-900 transition-colors" />
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-8 pr-4 py-3 bg-transparent border-b-2 border-slate-100 focus:border-slate-900 focus:outline-none transition-all placeholder:text-slate-300 font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                            <div className="relative group/input">
                                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within/input:text-slate-900 transition-colors" />
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full pl-8 pr-4 py-3 bg-transparent border-b-2 border-slate-100 focus:border-slate-900 focus:outline-none transition-all placeholder:text-slate-300 font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                            <div className="relative group/input">
                                <Phone className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within/input:text-slate-900 transition-colors" />
                                <input
                                    required
                                    name="phone"
                                    type="tel"
                                    placeholder="+44 79XX XXX XXX"
                                    className="w-full pl-8 pr-4 py-3 bg-transparent border-b-2 border-slate-100 focus:border-slate-900 focus:outline-none transition-all placeholder:text-slate-300 font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Project Details</label>
                        <div className="relative group/input">
                            <MessageSquare className="absolute left-0 top-4 h-5 w-5 text-slate-300 group-focus-within/input:text-slate-900 transition-colors" />
                            <textarea
                                name="message"
                                rows={3}
                                placeholder="Tell us about your goals..."
                                className="w-full pl-8 pr-4 py-3 bg-transparent border-b-2 border-slate-100 focus:border-slate-900 focus:outline-none transition-all resize-none placeholder:text-slate-300 font-medium"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full h-16 rounded-2xl text-xl font-black shadow-2xl transition-all mt-6"
                    >
                        Confirm Booking
                    </Button>
                </form>
            </div>
        </div>
    );
}
