'use client';

import { useState, useEffect } from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import GamesCard from '../features/games/components/GamesCard';

interface EventsClientProps {
    user: User | null;
}

export default function EventsClient({ user: initialUser }: EventsClientProps) {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(initialUser);

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

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} user={user} />
            <main className="flex-grow">
                <GamesCard limit={5} />
                <Footer />
            </main>
        </div>
    );
}
