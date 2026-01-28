import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                            Our Vision
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                            Find Your Game.<br />
                            <span className="text-gradient">Build Community.</span>
                        </h1>
                        <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
                            Sportii was born from a simple belief: sports should be accessible to everyone, everywhere. We are dismantling the barriers to entry, making it effortless to find venues, organize matches, and connect with players who share your passion.
                        </p>

                        {/* <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    <div className="relative w-10 h-10 rounded-full border-2 border-white dark:border-background-dark overflow-hidden">
                                        <Image
                                            src="/hero-football.png"
                                            alt="Sportii home pic"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Joined by 10k+ players</span>
                            </div>
                        </div> */}
                    </div>

                    {/* Visual Content */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-blue-900/20 group h-[500px] w-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <Image
                                src="/hero-background.jpg"
                                alt="Sportii home pic"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                <p className="text-white text-lg font-medium">"Sports have the power to change the world. It has the power to inspire. It has the power to unite people in a way that little else does."</p>
                                <p className="text-white/70 text-sm mt-2">— Nelson Mandela</p>
                            </div>
                        </div>

                        {/* Background decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 dark:bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
