'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SingleGameCard from '../components/SingleGameCard';
import { ALL_GAMES } from '../constants';

export default function GamesPageClient() {
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
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-black transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">All Games</h1>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
                            Explore and join upcoming games in your area.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ALL_GAMES.map((game) => (
                            <SingleGameCard key={game.id} game={game} className="w-full" />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
