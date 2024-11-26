import { SidebarProvider, SidebarTrigger } from '../../components/ui/sidebar';
import { AppSidebar } from '../../components/app-sidebar';
import { Button } from '../../components/ui/button';
import { ModeToggle } from '../../components/ui/ModeToggle';

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='flex flex-col flex-1'>
        <div className='flex justify-between items-center p-3.5 border-b'>
          <SidebarTrigger />
          <div className='flex items-center space-x-3 ml-auto'>
            <ModeToggle />
            <Button variant='default'>Upgrade</Button>
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
