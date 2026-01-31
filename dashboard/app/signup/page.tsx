import SignupPageClient from '../features/auth/components/SignupPageClient';
import { createClient } from '@/lib/supabase/server';

export default async function SignupPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return <SignupPageClient user={user} />;
}
