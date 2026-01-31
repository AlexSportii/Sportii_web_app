import LandingPageClient from './features/landing/components/LandingPageClient';
import { createClient } from '@/lib/supabase/server';

export const metadata = {
    title: 'Sportii - The Ultimate Sports Landing Page',
    description: 'Join the community and elevate your game.',
};

export default async function Page() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return <LandingPageClient user={user} />;
}