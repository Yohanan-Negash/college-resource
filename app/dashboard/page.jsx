// app/dashboard/page.jsx
import { redirect } from 'next/navigation';
<<<<<<< main
import { createClient } from '../../lib/supabase/server';
import { logout } from '../../lib/actions';
import { Button } from '../../components/ui/button';
=======
import { createClient } from '@/lib/supabase/server';
import UserMenuDropdown from '../../components/UserMenuDropdown';  // Updated import path
>>>>>>> dashboard-landing-page

export default async function Page() {
    const supabase = createClient();

    const { data: userData, error: userError } = await supabase.auth.getUser();

<<<<<<< main
  if (userError || !userData?.user) {
    console.error('Error getting user:', userError.message);
    redirect('/login');
  }
=======
    if (userError || !userData?.user) {
        redirect('/login');
    }
>>>>>>> dashboard-landing-page

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