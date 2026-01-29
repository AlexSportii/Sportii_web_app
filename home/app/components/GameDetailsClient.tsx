'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Correct import for App Router
import Navbar from './Navbar';
import Footer from './Footer';
import { ALL_GAMES } from '../constants';

interface GameDetailsClientProps {
    id: string;
}

export default function GameDetailsClient({ id }: GameDetailsClientProps) {
    const [isDark, setIsDark] = useState<boolean>(false);
    const router = useRouter();

    const game = ALL_GAMES.find((g) => g.id === id);

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

    if (!game) {
        return (
            <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-black transition-colors duration-300">
                <Navbar isDark={isDark} toggleTheme={toggleTheme} />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Game not found</h1>
                        <Link href="/events/all" className="text-primary hover:underline">
                            All Games
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const getProgressColor = (current: number, max: number) => {
        const percentage = (current / max) * 100;
        if (percentage < 50) return 'bg-green-500';
        if (percentage < 85) return 'bg-orange-500';
        return 'bg-red-500';
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-black transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <main className="flex-grow pb-12">
                {/* Hero Image Section */}
                <div className="relative h-[40vh] w-full">
                    <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute top-24 left-4 sm:left-8">
                        <Link href="/events/all" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/40 px-3 py-1.5 rounded-xl backdrop-blur-md">
                            <span className="material-symbols-outlined">arrow_back</span>
                            <span className="text-sm font-medium">All Games</span>
                        </Link>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 max-w-7xl mx-auto w-full">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-primary/20 text-white border border-primary/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                    {game.sport}
                                </span>
                                <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-2">{game.title}</h1>
                                <div className="flex flex-wrap items-center gap-4 text-gray-200 text-sm sm:text-base">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary">calendar_today</span>
                                        {game.date}
                                    </div>
                                    <div className="hidden sm:block text-gray-400">•</div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary">schedule</span>
                                        {game.time}
                                    </div>
                                    <div className="hidden sm:block text-gray-400">•</div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary">location_on</span>
                                        {game.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Host Info */}
                            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                                <div className="h-14 w-14 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl">
                                    {game.hostAvatar ? (
                                        <Image src={game.hostAvatar} alt={game.hostName} width={56} height={56} className="rounded-full" />
                                    ) : (
                                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">person</span>
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Hosted by</p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">{game.hostName}</p>
                                </div>
                                <button className="ml-auto px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white">
                                    Message
                                </button>
                            </div>

                            {/* Description (Mocked as currently not in data model, but good for layout) */}
                            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About this game</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Join us for a friendly match! All skill levels are welcome. We usually play for about 90 minutes.
                                    Please bring your own gear. Great way to meet new people and stay active.
                                </p>
                            </div>

                            {/* Location Map Placeholder */}
                            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Location</h3>
                                <div className="h-64 w-full bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center text-text-muted-light dark:text-text-muted-dark">
                                    <div className="text-center">
                                        <span className="material-symbols-outlined text-4xl mb-2">map</span>
                                        <p>Map View Placeholder</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">{game.location}</p>
                                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">123 Sports Avenue, City Center</p>
                                    </div>
                                </div>
                            </div>

                            {/* Confirmed Players */}
                            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Confirmed Players</h3>
                                    <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
                                        {game.currentPlayers} / {game.maxPlayers} Joined
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* MOCK PLAYERS - In a real app, this would be fetched based on game ID */}
                                    {[
                                        { name: game.hostName, role: 'Host', avatar: game.hostAvatar },
                                        { name: 'Sarah Jenkins', role: 'Player', avatar: '' },
                                        { name: 'Mike Thompson', role: 'Player', avatar: '' },
                                        { name: 'David Chen', role: 'Player', avatar: '' },
                                        { name: 'Emma Wilson', role: 'Player', avatar: '' }
                                    ].slice(0, game.currentPlayers).map((player, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                                            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg shrink-0 overflow-hidden">
                                                {player.avatar ? (
                                                    <Image src={player.avatar} alt={player.name} width={40} height={40} className="object-cover h-full w-full" />
                                                ) : (
                                                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-xl">person</span>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white text-sm">{player.name}</p>
                                                <p className={`text-xs ${player.role === 'Host' ? 'text-primary font-bold' : 'text-text-muted-light dark:text-text-muted-dark'}`}>
                                                    {player.role}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Empty slots placeholders */}
                                    {Array.from({ length: Math.max(0, game.maxPlayers - game.currentPlayers) }).map((_, i) => (
                                        <div key={`empty-${i}`} className="flex items-center gap-3 p-3 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 opacity-60">
                                            <div className="h-10 w-10 rounded-full bg-transparent border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">add</span>
                                            </div>
                                            <div className="text-sm text-text-muted-light dark:text-text-muted-dark">Open Spot</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Join Card */}
                            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 sticky top-24">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Price per person</span>
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{game.price}</span>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getProgressColor(game.currentPlayers, game.maxPlayers)}`}>
                                        {game.maxPlayers - game.currentPlayers} spots left
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Date</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">{game.date}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Time</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">{game.time}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Players</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">{game.currentPlayers} / {game.maxPlayers}</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-2">
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(game.currentPlayers, game.maxPlayers)}`}
                                            style={{ width: `${(game.currentPlayers / game.maxPlayers) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-center text-text-muted-light dark:text-text-muted-dark">
                                        {game.currentPlayers} players already joined
                                    </p>
                                </div>

                                <button className="w-full py-4 bg-primary hover:bg-blue-600 dark:text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 transform active:scale-[0.98]">
                                    Join Game
                                </button>

                                <p className="text-xs text-center text-text-muted-light dark:text-text-muted-dark mt-4">
                                    Free cancellation up to 4 hours before kickoff.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
