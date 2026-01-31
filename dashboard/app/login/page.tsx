import LoginPageClient from '../features/auth/components/LoginPageClient';
import { createClient } from '@/lib/supabase/server';

export default async function LoginPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return <LoginPageClient user={user} />;
}
