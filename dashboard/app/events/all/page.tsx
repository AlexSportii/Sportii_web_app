import AllGamesClient from '../../features/games/components/AllGamesClient';
import { createClient } from '@/lib/supabase/server';

export default async function AllGamesPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return <AllGamesClient user={user} />;
}
