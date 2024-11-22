import { SidebarProvider, SidebarTrigger } from '../../components/ui/sidebar';
import { AppSidebar } from '../../components/app-sidebar';
import { Button } from '../../components/ui/button';

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='flex flex-col flex-1'>
        <div className='flex justify-between items-center p-2 border-b'>
          <SidebarTrigger />
          <Button variant='default'>Upgrade</Button>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
