import { SidebarProvider, SidebarTrigger } from '../../components/ui/sidebar';
import { AppSidebar } from '../../components/app-sidebar';
import { Button } from '../../components/ui/button';
import { ModeToggle } from '../../components/ui/ModeToggle';
import { createClient } from '../../lib/supabase/server';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'Dashboard | PhazeOne',
};

export default async function Layout({ children }) {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    console.error('Error getting user', userError.message);
    redirect('/login');
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='flex flex-col flex-1'>
        <div className='flex justify-between items-center p-3.5 border-b'>
          <SidebarTrigger />
          <div className='flex items-center space-x-3 ml-auto'>
            <ModeToggle />
            {/* <Button variant='default'>Upgrade</Button> */}
          </div>
        </div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </SidebarProvider>
  );
}
