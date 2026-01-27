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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {TEAM_MEMBERS.map((member) => (
                        <div key={member.name} className="group text-center">
                            <div className="relative inline-block mb-6">
                                <div className="absolute inset-0 bg-primary rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <div className="relative w-40 h-40 rounded-full border-4 border-white dark:border-surface-dark shadow-md overflow-hidden mx-auto">
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                            <p className="text-primary font-medium mb-2">{member.role}</p>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
