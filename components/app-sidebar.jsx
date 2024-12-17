import {
  Home,
  Send,
  Mail,
  DollarSign,
  MapPin,
  Code,
  Briefcase,
  BookOpen,
  UserPlus,
  GalleryVerticalEnd,
  Search,
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
  SidebarHeader,
} from '../components/ui/sidebar';
import { Separator } from '../components/ui/separator';
import { redirect } from 'next/navigation';
import { createClient } from '../lib/supabase/server';
import { NavUser } from '../components/nav-user';
import Link from 'next/link';

// Application section items
const applicationItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Roadmaps',
    url: '/dashboard/coming-soon',
    icon: MapPin,
  },
  {
    title: 'Hackathons',
    url: '/dashboard/hackathons',
    icon: Code,
  },
  {
    title: 'Internships',
    url: '/dashboard/internships',
    icon: Briefcase,
  },
  {
    title: 'Skills & Resources',
    url: '/dashboard/skills',
    icon: BookOpen,
  },
  {
    title: 'Mentorship',
    url: '/dashboard/coming-soon',
    icon: UserPlus,
  },
  {
    title: 'Job Search',
    url: '/dashboard/search',
    icon: Search,
  },
];

// Help section items
const helpItems = [
  {
    title: 'Support',
    url: '/dashboard/support',
    icon: Mail,
  },
  {
    title: 'Feedback',
    url: '/dashboard/coming-soon',
    icon: Send,
  },
];

// Earn Section Item
const earnItem = {
  title: 'Become an Affiliate',
  url: '/dashboard/coming-soon',
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
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='#'>
                <div className='flex aspect-square size-7 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <GalleryVerticalEnd className='size-4' />
                </div>
                <div className='flex flex-col gap-0.5 leading-none'>
                  <span className='font-semibold'>College Resource</span>
                  <span className='ml-2 mt-1.5'>v1.0.0-beta</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator className='mb-1' />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {applicationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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
                  <Link href={earnItem.url}>
                    <earnItem.icon />
                    <span>{earnItem.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
