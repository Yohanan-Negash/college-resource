import {
  Home,
  Send,
  Mail,
  DollarSign,
  MapPin,
  Briefcase,
  BookOpen,
  UserPlus,
  GalleryVerticalEnd,
  Search,
  FileText,
  Trophy,
  Brain,
  Activity,
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
import { ComingSoonFeatureTeaser } from '@/app/dashboard/(dashboard-components)/coming-soon-feature-teaser';
import { ActiveLink } from '@/components/active-link';

// Application section items
const applicationItems = [
  {
    title: 'Start Here',
    url: '/dashboard/getting-started',
    icon: Home,
  },
  // {
  //   title: 'Analytics Dashboard',
  //   url: '/dashboard',
  //   icon: Home,
  // },
  // {
  //   title: 'Foudations',
  //   url: '/dashboard/foundations',
  //   icon: Brain,
  // },
  {
    title: 'Roadmaps',
    url: '/dashboard/roadmaps',
    icon: MapPin,
  },
  {
    title: 'Tools & Resources',
    url: '/dashboard/tools',
    icon: BookOpen,
  },
  {
    title: 'Hackathons',
    url: '/dashboard/hackathons',
    icon: Trophy,
  },
  {
    title: 'Internships',
    url: '/dashboard/internships',
    icon: Briefcase,
  },
  // {
  //   title: 'Job Search',
  //   url: '/dashboard/search',
  //   icon: Search,
  // },
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
    url: '/dashboard/feedback',
    icon: Send,
  },
];

// Earn Section Item
const earnItem = [
  {
    title: 'Become an Affiliate',
    url: '/dashboard/coming-soon',
    icon: DollarSign,
  },
];

// Comming Soon Section Item
const comingSoonItems = [
  {
    title: 'CodePulse',
    url: '/#',
    icon: Activity,
  },
  {
    title: 'AI Resume Builder',
    url: '/#',
    icon: FileText,
  },
  {
    title: 'Mentorship',
    url: '/dashboard/coming-soon',
    icon: UserPlus,
  },
];

export async function AppSidebar() {
  const supabase = await createClient();

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
              <Link href='/dashboard'>
                <div className='flex aspect-square size-7 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <GalleryVerticalEnd className='size-4' />
                </div>
                <div className='flex flex-col gap-0.5 leading-none'>
                  <span className='font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    PhazeOne
                  </span>
                  <span className='text-xs text-muted-foreground ml-2 mt-1'>
                    v1.0.0
                  </span>
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
                    <ActiveLink href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </ActiveLink>
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
                    <ActiveLink href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </ActiveLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>PREMIUM FEATURES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {comingSoonItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <ComingSoonFeatureTeaser
                      icon={item.icon}
                      title={item.title}
                    />
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
              {earnItem.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <ComingSoonFeatureTeaser
                      icon={item.icon}
                      title={item.title}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
