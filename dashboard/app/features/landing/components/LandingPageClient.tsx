'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/layout/Navbar';
import Hero from './Hero';

import Footer from '../../../components/layout/Footer';
import GamesCard from '../../games/components/GamesCard';
import HowItWorks from './HowItWorks';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

interface LandingPageClientProps {
    user: User | null;
}

export default function LandingPageClient({ user: initialUser }: LandingPageClientProps) {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(initialUser);
    const router = useRouter();

    // Initialize Supabase client
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

        // Auth state initialization and subscription
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            subscription.unsubscribe();
        };
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
        if (!user) {
            router.push('/login');
        } else {
            // Logic for joining game when already logged in
            // For now, perhaps navigate to the game or show a success message
            // Since SingleGameCard also links to details, this button action is specific
            console.log("User is logged in, proceeding to join game...");
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} user={user} />
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