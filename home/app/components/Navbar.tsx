'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
    const router = useRouter();

    return (
        <nav className="sticky top-0 z-50 w-full bg-surface-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/sportii-logo-navy.png"
                                alt="Sportii logo"
                                width={32}
                                height={32}
                            />
                            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Sportii</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {["Home", "Features"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <a href="/about_us" className="text-sm font-medium text-primary hover:text-blue-600 transition-colors">About Us</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            <span className="material-symbols-outlined">{isDark ? "sunny" : "bedtime"}</span>
                        </button>

                        <Link href="/login" className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold dark:text-white text-black transition-all duration-200 bg-primary rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg shadow-blue-500/30">
                            Get Started
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
