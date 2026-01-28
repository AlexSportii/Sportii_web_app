import EventsClient from '../components/EventsClient';
import { createClient } from '@/lib/supabase/server';

export default async function EventsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return <EventsClient user={user} />;
}
