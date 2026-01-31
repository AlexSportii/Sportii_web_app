'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginWithEmail, verifyOtp } from '../../../login/actions'

interface AuthFormProps {
    onSuccess?: () => void
    redirectTo?: string
}

export default function AuthForm({ onSuccess, redirectTo = '/' }: AuthFormProps) {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [step, setStep] = useState<'email' | 'code'>('email')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const formData = new FormData()
        formData.append('email', email)

        const result = await loginWithEmail(formData)
        setLoading(false)

        if (result.error) {
            setError(result.error)
        } else {
            setStep('code')
        }
    }

    const handleCodeSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const formData = new FormData()
        formData.append('email', email)
        formData.append('code', code)

        const result = await verifyOtp(formData)
        setLoading(false)

        if (result.error) {
            setError(result.error)
        } else {
            if (onSuccess) {
                onSuccess()
            }
            if (redirectTo) {
                router.push(redirectTo)
                router.refresh()
            }
        }
    }

    return (
        <div className="w-full max-w-md mx-auto">
            {step === 'email' ? (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending code...' : 'Continue with Email'}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleCodeSubmit} className="space-y-4">
                    <div className="text-center mb-6">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            We sent a code to <span className="font-semibold text-gray-900 dark:text-white">{email}</span>
                        </p>
                        <button
                            type="button"
                            onClick={() => setStep('email')}
                            className="text-xs text-primary hover:underline mt-1"
                        >
                            Change email
                        </button>
                    </div>

                    <div>
                        <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Enter verification code
                        </label>
                        <input
                            id="code"
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="123456"
                            required
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-center text-2xl tracking-widest"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Verifying...' : 'Verify Code'}
                    </button>
                </form>
            )}
        </div>
    )
}
