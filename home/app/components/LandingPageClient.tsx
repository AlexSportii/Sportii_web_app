'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import GamesCard from './GamesCard';
import HowItWorks from './HowItWorks';


export default function LandingPageClient() {
    const [isDark, setIsDark] = useState<boolean>(false);
    const router = useRouter();



    useEffect(() => {
        // Theme initialization
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

    const handleJoinGame = () => {
        router.push('/login');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <main className="flex-grow">
                <Hero />

                <GamesCard onJoinGame={handleJoinGame} />
                <HowItWorks />
                {/* <SearchBar /> */}
                {/* <Features /> */}
                {/* <Team />
                <CTA /> */}
            </main>
            <Footer />
        </div>
    );
}