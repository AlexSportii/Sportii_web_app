'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ALL_GAMES } from '../constants';
import SingleGameCard from './SingleGameCard';

const GamesCard: React.FC<{ onJoinGame?: () => void; limit?: number }> = ({ onJoinGame, limit }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Filter games if limit is provided
    const displayGames = limit ? ALL_GAMES.slice(0, limit) : ALL_GAMES;

    return (
        <section className="py-12 bg-gray-50 dark:bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Upcoming Games</h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark">Join a game happening near you</p>
                    </div>
                    {limit && (
                        <Link href="/events/all" className="hidden sm:flex text-primary font-semibold hover:text-blue-600 items-center gap-1 group">
                            See all games
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    )}
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {displayGames.map((game) => (
                        <SingleGameCard
                            key={game.id}
                            game={game}
                            className="snap-center w-80 sm:w-96"
                            onJoin={onJoinGame}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GamesCard;
