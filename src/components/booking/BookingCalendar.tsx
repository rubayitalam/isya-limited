'use client';

import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, startOfWeek, endOfWeek, isBefore, startOfToday } from 'date-fns';
import { ChevronLeft, ChevronRight, Globe, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingCalendarProps {
    onDateSelect: (date: Date) => void;
    onTimeSelect: (time: string) => void;
    selectedDate: Date | null;
    selectedTime: string | null;
    bookedSlots?: { date: string; time: string }[];
}

export function BookingCalendar({
    onDateSelect,
    onTimeSelect,
    selectedDate,
    selectedTime,
    bookedSlots = []
}: BookingCalendarProps) {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const calendarDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
    });

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM',
        '04:00 PM', '05:00 PM'
    ];

    const today = startOfToday();

    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col lg:flex-row">
            {/* Sidebar Details */}
            <div className="w-full lg:w-80 border-r border-slate-50 p-8 bg-slate-50/30">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight">Free Website Design</h2>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-slate-600">
                        <Clock className="h-5 w-5 text-slate-400" />
                        <span className="font-medium">45 Mins</span>
                    </div>

                    <div className="flex items-start gap-4 text-slate-600">
                        <CalendarIcon className="h-5 w-5 text-slate-400 mt-0.5" />
                        <div>
                            <span className="font-medium block">
                                {selectedDate ? format(selectedDate, 'EEEE, MMM d, yyyy') : 'Select a date'}
                            </span>
                            {selectedTime && (
                                <span className="text-blue-600 font-bold block mt-1">{selectedTime}</span>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-slate-600">
                        <Globe className="h-5 w-5 text-slate-400" />
                        <span className="font-medium">Europe/London (GMT)</span>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-3xl font-bold text-slate-400 leading-tight">
                        Thanks for booking your call!...
                    </h3>
                    <button className="text-blue-600 font-semibold mt-2 hover:underline">Show More</button>
                </div>
            </div>

            {/* Main Container for Desktop Multi-Column */}
            <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
                {/* Calendar Section */}
                <div className={cn("flex-1 p-8 transition-all border-r border-slate-50", selectedDate ? "md:w-3/5" : "md:w-full")}>
                    <div className="flex items-center justify-between mb-8 px-4">
                        <button
                            onClick={prevMonth}
                            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <h2 className="text-xl font-bold text-slate-900">
                            {format(currentMonth, 'MMMM yyyy')}
                        </h2>

                        <button
                            onClick={nextMonth}
                            className="p-2 hover:bg-white border border-slate-100 shadow-sm rounded-full transition-colors text-blue-600"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-4">
                        {weekDays.map((day) => (
                            <div key={day} className="text-center text-sm font-semibold text-slate-500 py-2">
                                {day}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day, idx) => {
                            const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
                            const isCurrentMonth = isSameMonth(day, monthStart);
                            const isPast = isBefore(day, today) && !isToday(day);
                            const isCurrentDay = isToday(day);

                            return (
                                <button
                                    key={idx}
                                    disabled={!isCurrentMonth || isPast}
                                    onClick={() => {
                                        onDateSelect(day);
                                        onTimeSelect(''); // Reset time when date changes
                                    }}
                                    className={cn(
                                        "relative aspect-square flex items-center justify-center rounded-full text-base font-medium transition-all group",
                                        !isCurrentMonth ? "text-slate-200 cursor-default" :
                                            isPast ? "text-slate-300 cursor-not-allowed" : "text-slate-600 hover:bg-blue-50 hover:text-blue-600",
                                        isSelected && "bg-blue-600 text-white hover:bg-blue-700 hover:text-white shadow-lg shadow-blue-200 scale-110 z-10",
                                        isCurrentDay && !isSelected && "after:content-[''] after:absolute after:bottom-2 after:h-1 after:w-1 after:bg-blue-600 after:rounded-full"
                                    )}
                                >
                                    {format(day, 'd')}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <p className="text-sm font-bold text-slate-900 mb-4">Time zone</p>
                        <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                            <div className="flex items-center gap-3">
                                <Globe className="h-5 w-5 text-slate-400" />
                                <span className="text-sm font-medium text-slate-700">GMT+00:00 Europe/London (GMT)</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-slate-400" />
                        </div>
                    </div>
                </div>

                {/* Time Slot Selection (Shows only when date is selected) */}
                {selectedDate && (
                    <div className="w-full md:w-80 p-8 overflow-y-auto max-h-[500px] animate-in slide-in-from-right duration-300">
                        <p className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Select a Time</p>
                        <div className="space-y-3">
                            {timeSlots.map((time) => {
                                const isBooked = bookedSlots.some(
                                    slot => slot.date === (selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '') && slot.time === time
                                );

                                return (
                                    <button
                                        key={time}
                                        disabled={isBooked}
                                        onClick={() => onTimeSelect(time)}
                                        className={cn(
                                            "w-full py-4 px-6 rounded-xl border-2 font-bold transition-all text-center",
                                            isBooked
                                                ? "bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed opacity-60"
                                                : selectedTime === time
                                                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100 scale-[1.02]"
                                                    : "border-slate-100 text-blue-600 hover:border-blue-600"
                                        )}
                                    >
                                        {time}
                                        {isBooked && <span className="block text-[10px] uppercase mt-1">Booked</span>}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
