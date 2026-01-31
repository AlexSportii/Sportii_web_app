import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-black/20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Getting Started</span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mt-2">How It Works</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all duration-300 group">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl text-blue-500">location_on</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Find a Venue</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            Browse top-rated courts and fields in your area based on your favorite sport.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all duration-300 group relative z-10">
                        {/* Connecting line for desktop (optional, keeping it simple for now) */}
                        <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl text-green-500">group_add</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Join a Game</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            Sign up for existing matches or create your own invite for local players.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all duration-300 group">
                        <div className="w-16 h-16 bg-yellow-50 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl text-yellow-500">flag</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Play & Dominate</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            Show up, play hard, track your stats, and climb the local leaderboard.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
