import {
  Home,
  ChevronUp,
  User2,
  LogOut,
  Settings,
  Send,
  Mail,
  DollarSign,
  MapPin,
  Code,
  Briefcase,
  BookOpen,
  UserPlus,
  CheckCircle,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '../components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { Separator } from '../components/ui/separator';
import { redirect } from 'next/navigation';
import { logout } from '../lib/actions';
import { Button } from '../components/ui/button';
import { createClient } from '../lib/supabase/server';

// Application section items
const applicationItems = [
  {
    title: 'Dashboard',
    url: '#',
    icon: Home,
  },
  {
    title: 'Roadmaps',
    url: '#',
    icon: MapPin,
  },
  {
    title: 'Hackathons',
    url: '#',
    icon: Code,
  },
  {
    title: 'Internships',
    url: '#',
    icon: Briefcase,
  },
  {
    title: 'Skills & Resources',
    url: '#',
    icon: BookOpen,
  },
  {
    title: 'Mentorship',
    url: '#',
    icon: UserPlus,
  },
  {
    title: 'Job Board',
    url: '#',
    icon: CheckCircle,
  },
];

// Help section items
const helpItems = [
  {
    title: 'Support',
    url: '#',
    icon: Mail,
  },
  {
    title: 'Feedback',
    url: '#',
    icon: Send,
  },
];

// Earn Section Item
const earnItem = {
  title: 'Become an Affiliate',
  url: '/affiliate',
  icon: DollarSign,
};

export async function AppSidebar() {
  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData?.user) {
    console.error('Error getting user:', userError.message);
    redirect('/login');
  }

  // Extract the user's email & id from the userData
  const userEmail = userData.user.email;

  return (
    <Sidebar collapsible='icon'>
      <Separator className='mb-1' />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {applicationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Help</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {helpItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Earn</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={earnItem.url}>
                    <earnItem.icon />
                    <span>{earnItem.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className='border'>
                <SidebarMenuButton>
                  <User2 className='ml-auto' />
                  {userEmail}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side='top'
                className='w-[--radix-popper-anchor-width]'
              >
                <DropdownMenuItem>
                  <Settings />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut />
                  <form action={logout}>
                    <Button type='submit' variant='ghost'>
                      Sign out
                    </Button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
