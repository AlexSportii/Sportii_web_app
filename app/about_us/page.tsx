'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from '../components/Team';
import Image from 'next/image';

export default function AboutUsPage() {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <main className="flex-grow pt-20">
                {/* Header Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                            Our Story
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Revolutionizing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Recreational Sports</span>
                        </h1>
                        <p className="text-xl text-text-muted-light dark:text-text-muted-dark max-w-3xl mx-auto leading-relaxed">
                            We are on a mission to make sports accessible, social, and fun for everyone.
                            From finding a pitch to organizing a league, Sportii is your digital teammate.
                        </p>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 bg-white dark:bg-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "diversity_3",
                                    title: "Community First",
                                    desc: "We believe in the power of sports to bring people together and build lasting connections."
                                },
                                {
                                    icon: "bolt",
                                    title: "Innovation",
                                    desc: "Leveraging technology to solve the friction points in organizing and playing sports."
                                },
                                {
                                    icon: "verified",
                                    title: "Trust & Safety",
                                    desc: "Creating a safe and reliable environment for players, venues, and organizers."
                                }
                            ].map((value, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-primary mb-6">
                                        <span className="material-symbols-outlined text-2xl">{value.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        {value.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <Team />
            </main>

            <Footer />
        </div>
    );
}
