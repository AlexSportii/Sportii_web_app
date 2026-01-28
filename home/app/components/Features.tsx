import React from 'react';

const Features: React.FC = () => {
    return (
        <section className="py-20 bg-white dark:bg-surface-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Why We Exist</h2>
                    <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                        We noticed a gap. While the desire to play is universal, the logistics were stuck in the past.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Challenge Card */}
                    <div className="bg-background-light dark:bg-background-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
                            <span className="material-symbols-outlined text-3xl">sentiment_dissatisfied</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h3>
                        <ul className="space-y-4">
                            {[
                                "Endless phone calls to book a simple court.",
                                "Last-minute cancellations ruining the game.",
                                "Difficulty finding players at your skill level."
                            ].map((text, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-text-muted-light dark:text-text-muted-dark">
                                    <span className="material-symbols-outlined text-red-500 mt-1 text-sm">close</span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
                        <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                            <span className="material-symbols-outlined text-3xl">bolt</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Sportii Solution</h3>
                        <ul className="space-y-4">
                            {[
                                "Instant real-time booking for thousands of venues.",
                                "Automated waitlists and reliable player matching.",
                                "A vibrant community that keeps you motivated."
                            ].map((text, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-text-muted-light dark:text-text-muted-dark">
                                    <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
