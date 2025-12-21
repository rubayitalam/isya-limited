'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { BookingCalendar } from '@/components/booking/BookingCalendar';
import { BookingForm } from '@/components/booking/BookingForm';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function BookingPage() {
    const [step, setStep] = useState<'calendar' | 'form' | 'success'>('calendar');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [bookingDetails, setBookingDetails] = useState<any>(null);
    const [bookedSlots, setBookedSlots] = useState<{ date: string; time: string }[]>([]);

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzxHvO0SssMsO8laVu7KQVE2az3wExRg5PYnsvH14HFcHL8a_KX6TiAjVlfKY1J3pQd/exec';

    const fetchBookings = async () => {
        try {
            console.log('Fetching latest bookings...');
            const response = await fetch(SCRIPT_URL);
            const data = await response.json();
            if (Array.isArray(data)) {
                setBookedSlots(data);
                return data;
            }
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
        return [];
    };

    // Initial fetch
    React.useEffect(() => {
        fetchBookings();
    }, [SCRIPT_URL]);

    const handleDateSelect = async (date: Date) => {
        setSelectedDate(date);
        setSelectedTime(null); // Reset time when date changes
        await fetchBookings(); // Refresh slots when a date is clicked
    };

    const [isChecking, setIsChecking] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleTimeSelect = async (time: string) => {
        if (!time) return;

        setErrorMessage(null);
        setIsChecking(true);
        try {
            // Real-time check exactly when the slot is clicked
            const latestSlots = await fetchBookings();
            const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : 'N/A';

            const isStillAvailable = !latestSlots.some(
                (slot: any) => slot.date === formattedDate && slot.time === time
            );

            if (!isStillAvailable) {
                setErrorMessage("This slot was just booked! Please select another time.");
                setSelectedTime(null);
                // Clear error after 5 seconds
                setTimeout(() => setErrorMessage(null), 5000);
                setIsChecking(false);
                return;
            }

            setSelectedTime(time);
            setStep('form');
        } catch (error) {
            console.error('Check error:', error);
            // Fallback: proceed if fetch fails but show error in console
            setSelectedTime(time);
            setStep('form');
        } finally {
            setIsChecking(false);
        }
    };

    const handleFormSubmit = async (data: any) => {
        // Final Double-Booking Check right before submission
        const latestSlots = await fetchBookings();
        const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : 'N/A';

        const isStillAvailable = !latestSlots.some(
            (slot: any) => slot.date === formattedDate && slot.time === selectedTime
        );

        if (!isStillAvailable) {
            setErrorMessage("Sorry, this slot was just booked by someone else! Please select a different time.");
            setStep('calendar');
            setTimeout(() => setErrorMessage(null), 5000);
            return;
        }

        setBookingDetails(data);

        try {
            console.log('Submitting booking for:', formattedDate, selectedTime);
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({
                    date: formattedDate,
                    time: selectedTime || 'N/A',
                    ...data
                }),
            });

            setStep('success');
            setTimeout(fetchBookings, 2000); // Final sync
        } catch (error) {
            console.error('Submission error:', error);
            setStep('success');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50/50 py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <AnimatePresence mode="wait">
                    {step === 'calendar' && (
                        <motion.div
                            key="calendar"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Schedule Your Consultation</h1>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                    Select a convenient date for your 45-minute free website design strategy call.
                                </p>
                            </div>

                            {/* Custom Error Message Display */}
                            <AnimatePresence>
                                {errorMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="max-w-xl mx-auto mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-sm"
                                    >
                                        <div className="h-2 w-2 bg-red-500 rounded-full animate-ping"></div>
                                        {errorMessage}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="relative">
                                {isChecking && (
                                    <div className="absolute inset-0 z-50 bg-white/40 backdrop-blur-[1px] rounded-3xl flex items-center justify-center transition-all duration-300">
                                        <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-2xl shadow-xl border border-slate-50">
                                            <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                            <p className="text-sm font-bold text-slate-800">Checking availability...</p>
                                        </div>
                                    </div>
                                )}
                                <BookingCalendar
                                    selectedDate={selectedDate}
                                    selectedTime={selectedTime}
                                    bookedSlots={bookedSlots}
                                    onDateSelect={handleDateSelect}
                                    onTimeSelect={handleTimeSelect}
                                />
                            </div>
                        </motion.div>
                    )}

                    {step === 'form' && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                        >
                            <BookingForm
                                selectedDate={selectedDate}
                                selectedTime={selectedTime}
                                onBack={() => setStep('calendar')}
                                onSubmit={handleFormSubmit}
                            />
                        </motion.div>
                    )}

                    {step === 'success' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-xl mx-auto text-center bg-white p-12 rounded-3xl border border-slate-100 shadow-2xl"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <CheckCircle2 className="h-10 w-10 text-green-600" />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 mb-4">Confirmed!</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Thank you, <span className="font-bold text-slate-900">{bookingDetails?.name}</span>! <br />
                                Your call is scheduled for <br />
                                <span className="font-bold text-blue-600">
                                    {selectedDate && selectedDate.toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>.
                            </p>
                            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mb-10 text-left">
                                <p className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-2 text-center">Next Steps</p>
                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li className="flex gap-2">
                                        <span className="text-blue-600 font-bold">1.</span> Check your email for a calendar invite.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-600 font-bold">2.</span> Have your business details ready for the call.
                                    </li>
                                </ul>
                            </div>
                            <Link href="/">
                                <Button variant="outline" size="lg" className="rounded-full px-12 font-bold h-14">
                                    Back to Home
                                </Button>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
