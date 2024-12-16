import { Suspense } from 'react';
import { ProgressOverview } from './progress-overview';
import { ProgressOverviewSkeleton } from './progress-overview-skeleton';

async function getProgressData() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    currentStreak: 7,
    completedProjects: 3,
    pullRequests: 5,
    commits: 23,
  };
}

async function ProgressOverviewContent({ className }) {
  const progressData = await getProgressData();
  return <ProgressOverview className={className} {...progressData} />;
}

export function ProgressOverviewContainer({ className }) {
  return (
    <Suspense fallback={<ProgressOverviewSkeleton className={className} />}>
      <ProgressOverviewContent className={className} />
    </Suspense>
  );
}
