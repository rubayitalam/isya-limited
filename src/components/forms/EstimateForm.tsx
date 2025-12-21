'use client';

import { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

// Google Apps Script Web App URL

const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx73w4BFwkujIyVjuG1MVAB0awhE-8S0-5v3IGJUOF7l0l_Rw4kk_Pr--QeCaC2OBhIlg/exec';

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    projectType: string;
    budget: string;
    description: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    projectType?: string;
    budget?: string;
    description?: string;
}

const PROJECT_TYPES = [
    'Website Develop',
    'Mobile App Develop',
    'Software Develop',
    'IT Support',
    'other',
];

export default function EstimateForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        description: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Set<string>>(new Set());
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Validation functions
    const validateEmail = (email: string): string | undefined => {
        if (!email.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Please enter a valid email address';
        return undefined;
    };

    const validatePhone = (phone: string): string | undefined => {
        if (!phone.trim()) return 'Phone number is required';
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
        const digitCount = phone.replace(/\D/g, '').length;
        if (digitCount < 10) return 'Phone number must have at least 10 digits';
        return undefined;
    };

    const validateRequired = (value: string, fieldName: string): string | undefined => {
        if (!value.trim()) return `${fieldName} is required`;
        return undefined;
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {
            fullName: validateRequired(formData.fullName, 'Full name'),
            email: validateEmail(formData.email),
            phone: validatePhone(formData.phone),
            projectType: validateRequired(formData.projectType, 'Project type'),
            budget: validateRequired(formData.budget, 'Estimated budget'),
            description: validateRequired(formData.description, 'Project description'),
        };

        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error !== undefined);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name } = e.target;
        setTouched(prev => new Set(prev).add(name));

        // Validate field on blur
        let error: string | undefined;
        switch (name) {
            case 'fullName':
                error = validateRequired(formData.fullName, 'Full name');
                break;
            case 'email':
                error = validateEmail(formData.email);
                break;
            case 'phone':
                error = validatePhone(formData.phone);
                break;
            case 'projectType':
                error = validateRequired(formData.projectType, 'Project type');
                break;
            case 'budget':
                error = validateRequired(formData.budget, 'Estimated budget');
                break;
            case 'description':
                error = validateRequired(formData.description, 'Project description');
                break;
        }

        if (error) {
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate all fields
        if (!validateForm()) {
            // Mark all fields as touched to show errors
            setTouched(new Set(['fullName', 'email', 'phone', 'projectType', 'budget', 'description']));
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Submit to Google Apps Script
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(formData),
            });

            // Since we use no-cors, we can't check response.ok, but if it doesn't throw, we assume success
            setSubmitStatus('success');

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    projectType: '',
                    budget: '',
                    description: '',
                });
                setTouched(new Set());
                setSubmitStatus('idle');
            }, 3000);
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const shouldShowError = (fieldName: string) => {
        return touched.has(fieldName) && errors[fieldName as keyof FormErrors];
    };

    if (submitStatus === 'success') {
        return (
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                        <p className="text-lg text-green-700 leading-relaxed">
                            Your project estimate request has been submitted successfully. We'll review your requirements and get back to you within 24 hours.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two-column grid for name and email */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-bold text-slate-700">
                        Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border-2 ${shouldShowError('fullName')
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                            : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/10'
                            } bg-white/50 backdrop-blur-sm focus:ring-4 focus:outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400`}
                    />
                    {shouldShowError('fullName') && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.fullName}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700">
                        Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl border-2 ${shouldShowError('email')
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                            : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/10'
                            } bg-white/50 backdrop-blur-sm focus:ring-4 focus:outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400`}
                    />
                    {shouldShowError('email') && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>

            {/* Two-column grid for phone and project type */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700">
                        Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+44 1234 567890"
                        className={`w-full px-4 py-3 rounded-xl border-2 ${shouldShowError('phone')
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                            : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/10'
                            } bg-white/50 backdrop-blur-sm focus:ring-4 focus:outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400`}
                    />
                    {shouldShowError('phone') && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.phone}
                        </p>
                    )}
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                    <label htmlFor="projectType" className="block text-sm font-bold text-slate-700">
                        Project Type <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                        <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-xl border-2 ${shouldShowError('projectType')
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                                : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/10'
                                } bg-white/50 backdrop-blur-sm focus:ring-4 focus:outline-none transition-all duration-200 text-slate-900 cursor-pointer appearance-none`}
                        >
                            <option value="">Select a project type</option>
                            {PROJECT_TYPES.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {shouldShowError('projectType') && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.projectType}
                        </p>
                    )}
                </div>
            </div>

            {/* Estimated Budget */}
            <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-bold text-slate-700">
                    Estimated Budget <span className="text-orange-500">*</span>
                </label>
                <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g., £5,000 - £10,000"
                    className={`w-full px-4 py-3 rounded-xl border-2 ${shouldShowError('budget')
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                        : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/10'
                        } bg-white/50 backdrop-blur-sm focus:ring-4 focus:outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400`}
                />
                {shouldShowError('budget') && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.budget}
                    </p>
                )}
            </div>

            {/* Project Description */}
            <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-bold text-slate-700">
                    Project Description <span className="text-orange-500">*</span>
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${shouldShowError('description')
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                        : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/10'
                        } bg-white/50 backdrop-blur-sm focus:ring-4 focus:outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400 resize-none`}
                />
                {shouldShowError('description') && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.description}
                    </p>
                )}
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">
                        There was an error submitting your request. Please try again or contact us directly at pixlolimited@gmail.com
                    </p>
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Submit Estimate Request
                    </>
                )}
            </button>
        </form>
    );
}
