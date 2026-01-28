'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Game } from '../types';

interface SingleGameCardProps {
    game: Game;
    className?: string;
    onJoin?: () => void;
}

const SingleGameCard: React.FC<SingleGameCardProps> = ({ game, className = '', onJoin }) => {
    const getProgressColor = (current: number, max: number) => {
        const percentage = (current / max) * 100;
        if (percentage < 50) return 'bg-green-500';
        if (percentage < 85) return 'bg-orange-500';
        return 'bg-red-500';
    };

    return (
        <div className={`flex-none bg-surface-light dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group ${className}`}>
            {/* Card Image - Clickable to details */}
            <Link href={`/games/${game.id}`} className="block relative h-48 w-full cursor-pointer">
                <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>

                <span className="absolute top-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white border border-white/20">
                    {game.sport}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="text-white">
                        <p className="font-bold text-lg leading-tight mb-1 group-hover:underline decoration-2 underline-offset-4 decoration-white/50">{game.title}</p>
                        <div className="flex items-center gap-1 text-xs text-white/90 font-medium">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            {game.date} • {game.time}
                        </div>
                    </div>
                </div>
            </Link>

            {/* Card Content */}
            <div className="p-5">
                <Link href={`/games/${game.id}`} className="flex items-start gap-3 mb-4 cursor-pointer">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-primary shrink-0">
                        <span className="material-symbols-outlined text-xl">location_on</span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">{game.location}</p>
                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">2.5 km away</p>
                    </div>
                </Link>

                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-24 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(game.currentPlayers, game.maxPlayers)}`}
                                style={{ width: `${(game.currentPlayers / game.maxPlayers) * 100}%` }}
                            ></div>
                        </div>
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            {game.currentPlayers}/{game.maxPlayers}
                        </span>
                    </div>
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-900"></div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col">
                        <span className="text-xs text-text-muted-light dark:text-text-muted-dark">Price</span>
                        <span className="font-bold text-gray-900 dark:text-white">{game.price}</span>
                    </div>
                    <button
                        onClick={onJoin}
                        className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-bold rounded-xl hover:opacity-80 transition-opacity cursor-pointer"
                    >
                        Play now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleGameCard;
