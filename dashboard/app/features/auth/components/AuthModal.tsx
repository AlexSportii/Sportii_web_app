'use client';

import React from 'react';
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import AuthForm from './AuthForm';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    return (
        <Dialog open={isOpen} as="div" className="relative z-50" onClose={onClose}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <DialogPanel
                        transition
                        className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        <DialogTitle
                            as="h3"
                            className="text-2xl font-bold leading-6 text-gray-900 dark:text-white mb-2"
                        >
                            Join the Game
                        </DialogTitle>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                Sign in or create an account to join games and connect with players.
                            </p>
                            <AuthForm onSuccess={onClose} redirectTo={undefined} />
                        </div>

                        <div className="mt-4 absolute top-2 right-2">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-full p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                                onClick={onClose}
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
