'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login, signup } from '../../../login/actions';

interface EmailPasswordFormProps {
    mode: 'login' | 'signup';
    onSuccess?: () => void;
    redirectTo?: string;
}

export default function EmailPasswordForm({ mode, onSuccess, redirectTo = '/' }: EmailPasswordFormProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const action = mode === 'login' ? login : signup;

        const result = await action(formData);
        setLoading(false);

        if (result.error) {
            setError(result.error);
        } else {
            if (onSuccess) onSuccess();
            if (redirectTo) {
                router.push(redirectTo);
                router.refresh();
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
                <>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Age
                        </label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            min="16"
                            max="120"
                            required
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            placeholder="16"
                        />
                    </div>
                </>
            )}

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                    </label>
                    {mode === 'login' && (
                        <Link href="/forgot-password" className="text-sm font-medium text-primary hover:text-blue-500">
                            Lost your password? Recover here.
                        </Link>
                    )}
                </div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="••••••••"
                />
            </div>

            {mode === 'signup' && (
                <div className="space-y-2">
                    <div className="flex items-start">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Yes, I understand and agree to the <Link href="/terms" className="text-primary text-blue-500 text-bold">Sportii Terms of Service</Link>, including the  <Link href="/privacy" className="text-primary text-blue-500 text-bold">User Agreement and Privacy Policy.</Link>
                        </label>
                    </div>
                    <div className="flex items-start">
                        <input
                            id="ageConfirm"
                            name="ageConfirm"
                            type="checkbox"
                            required
                            className="h-4 w-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="ageConfirm" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Yes, I confirm to be 16 or over to be able to use this service.
                        </label>
                    </div>
                </div>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-black dark:bg-white hover:bg-blue-60 text-white dark:text-black font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? (mode === 'login' ? 'Signing in...' : 'Creating account...') : (mode === 'login' ? 'Sign In' : 'Create Account')}
            </button>
        </form>
    );
}
