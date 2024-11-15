// app/dashboard/page.jsx
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import UserMenuDropdown from '../../components/UserMenuDropdown';  // Updated import path

export default async function Page() {
    const supabase = createClient();

    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData?.user) {
        redirect('/login');
    }

    //Extract the user's email & id from the userData
    const userEmail = userData.user.email;

    //const userId = userData.user.id;

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <UserMenuDropdown userEmail={userEmail} />
            </div>
        </div>
    );
}