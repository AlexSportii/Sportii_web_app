'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import SingleGameCard from './SingleGameCard';
import { ALL_GAMES } from '../../../constants';
import { Game } from '../../../types';

interface AllGamesClientProps {
    user: User | null;
}

export default function AllGamesClient({ user: initialUser }: AllGamesClientProps) {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(initialUser);
    const [selectedSport, setSelectedSport] = useState<string>('All');
    const [selectedDate, setSelectedDate] = useState<string>('All');
    // Using filteredGames state to update the list based on filters
    const [filteredGames, setFilteredGames] = useState<Game[]>(ALL_GAMES);


    const supabase = createClient();

    useEffect(() => {
        // Theme initialization
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        // Initial filter application
        applyFilters(selectedSport, selectedDate);

        return () => {
            subscription.unsubscribe();
        };
    }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

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

    const applyFilters = (sport: string, date: string) => {
        let games = ALL_GAMES;

        if (sport !== 'All') {
            games = games.filter(game => game.sport === sport);
        }

        // Simple date filtering (exact match for now to match constant strings like "Today", "Tomorrow")
        if (date !== 'All') {
            games = games.filter(game => game.date === date);
        }

        setFilteredGames(games);
    };

    const handleSportChange = (sport: string) => {
        setSelectedSport(sport);
        applyFilters(sport, selectedDate);
    };

    const handleDateChange = (date: string) => {
        setSelectedDate(date);
        applyFilters(selectedSport, date);
    };

    const sports = ['All', ...Array.from(new Set(ALL_GAMES.map(g => g.sport)))];
    // Simplifying dates for filter - in a real app these would be better handled
    const dates = ['All', ...Array.from(new Set(ALL_GAMES.map(g => g.date)))];

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} user={user} />

            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">All Games</h1>
                    <p className="text-text-muted-light dark:text-text-muted-dark mb-6">Browse all upcoming games and find your perfect match.</p>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sport</label>
                            <select
                                value={selectedSport}
                                onChange={(e) => handleSportChange(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            >
                                {sports.map(sport => (
                                    <option key={sport} value={sport}>{sport}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                            <select
                                value={selectedDate}
                                onChange={(e) => handleDateChange(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            >
                                {dates.map(date => (
                                    <option key={date} value={date}>{date}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Grid Layout */}
                {filteredGames.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredGames.map((game) => (
                            <SingleGameCard
                                key={game.id}
                                game={game}
                                className="w-full"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">event_busy</span>
                        <p className="text-xl text-gray-500 dark:text-gray-400">No games found with the selected filters.</p>
                        <button
                            onClick={() => { setSelectedSport('All'); setSelectedDate('All'); applyFilters('All', 'All'); }}
                            className="mt-4 text-primary hover:underline"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
