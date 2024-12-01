import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';
import { Button } from '../../components/ui/button';
import { Construction, Zap } from 'lucide-react';

export default async function Page() {
  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData?.user) {
    console.error('Error getting user:', userError.message);
    redirect('/login');
  }

  //Extract the user's email & id from the userData
  const userEmail = userData.user.email;
  const userId = userData.user.id;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6 text-center'>
      <div className='flex items-center justify-center p-4 mb-6 bg-accent rounded-full shadow-lg'>
        <Zap />
      </div>
      <h1 className='text-4xl font-extrabold mb-4'>Coming Soon</h1>
      <p className='text-lg text-muted-foreground mb-8'>
        We are working hard to bring this feature to life. Stay tuned for
        updates!
      </p>
      <div className='mt-8 text-muted-foreground'>
        <Construction className='inline-block mr-2' />
        We appreciate your patience.
      </div>
    </div>
  );
}
