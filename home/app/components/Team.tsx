import React from 'react';
import Image from 'next/image';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">Who We Are</span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mt-2">Meet the Team</h2>
                    <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                        A diverse group of athletes, geeks, and creators working together to modernize the way the world plays sports.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Team;
