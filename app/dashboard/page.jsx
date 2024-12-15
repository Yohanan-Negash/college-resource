import { DashboardHeader } from './(dashboard-components)/dashboard-header';
import { DashboardShell } from './(dashboard-components)/dashboard-shell';
import { MotivationalQuote } from './(dashboard-components)/motivational-quote';
import { ProgressOverview } from './(dashboard-components)/progress-overview';
import { TaskTracker } from './(dashboard-components)/task-tracker';
import { DailyQuest } from './(dashboard-components)/daily-quest';
import { ProjectShowcase } from './(dashboard-components)/project-showcase';
import { CodingStreak } from './(dashboard-components)/coding-streak';

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading='Your Coding Journey'
        text='Track your progress, build your skills, become a great developer'
      />
      <MotivationalQuote className='mb-4' />
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <ProgressOverview className='col-span-full lg:col-span-2' />
        <TaskTracker className='col-span-full md:col-span-1' />
        <DailyQuest className='col-span-full md:col-span-1' />
        <CodingStreak className='col-span-full md:col-span-1' />
        <ProjectShowcase className='col-span-full' />
      </div>
    </DashboardShell>
  );
}
