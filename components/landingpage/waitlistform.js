// components/landingpage/waitlistform.js
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { addToWaitlist } from '../../lib/supabase/waitlist';

const WaitlistForm = ({ isOpen, onClose, onSubmit }) => {
    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
    };

    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.endsWith('.edu')) {
            newErrors.email = 'Must be a valid .edu email';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            const { data, error } = await addToWaitlist(formData);
            setLoading(false);

            if (error) {
                setErrors({ form: error });
            } else {
                onSubmit(data);
                // Reset form to initial state after successful submission
                setFormData(initialFormState);
                setErrors({});
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#2A2D3E] rounded-xl p-6 w-full max-w-md mx-4 relative border border-purple-500/20">
                <button
                    onClick={() => {
                        // Reset form when closing
                        setFormData(initialFormState);
                        setErrors({});
                        onClose();
                    }}
                    className="absolute right-4 top-4 text-zinc-400 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Join Waitlist
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {errors.form && (
                        <p className="text-sm text-red-400">{errors.form}</p>
                    )}
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-[#1C1F2E] border border-zinc-700/50 focus:border-purple-500/50 focus:outline-none text-white placeholder-zinc-500"
                        />
                        {errors.firstName && (
                            <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-[#1C1F2E] border border-zinc-700/50 focus:border-purple-500/50 focus:outline-none text-white placeholder-zinc-500"
                        />
                        {errors.lastName && (
                            <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Student Email (.edu)"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-[#1C1F2E] border border-zinc-700/50 focus:border-purple-500/50 focus:outline-none text-white placeholder-zinc-500"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WaitlistForm;