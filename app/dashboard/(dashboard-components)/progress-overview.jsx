import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import {
  Flame,
  FolderGit2,
  GitPullRequest,
  GitCommit,
  BarChart,
} from 'lucide-react';

export function ProgressOverview({
  currentStreak,
  completedProjects,
  pullRequests,
  commits,
  className,
  ...props
}) {
  return (
    <Card className={`w-full ${className}`} {...props}>
      <CardHeader>
        <CardTitle className='text-lg font-medium flex items-center gap-2'>
          <BarChart className='h-5 w-5 text-blue-500' />
          Your Progress
        </CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          <div className='flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg'>
            <Flame className='h-8 w-8 text-orange-500 dark:text-orange-400 mb-2' />
            <p className='text-2xl font-bold text-orange-700 dark:text-orange-300'>
              {currentStreak}
            </p>
            <p className='text-xs text-orange-600 dark:text-orange-400'>
              Day Streak
            </p>
          </div>
          <div className='flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg'>
            <FolderGit2 className='h-8 w-8 text-blue-500 dark:text-blue-400 mb-2' />
            <p className='text-2xl font-bold text-blue-700 dark:text-blue-300'>
              {completedProjects}
            </p>
            <p className='text-xs text-blue-600 dark:text-blue-400'>Projects</p>
          </div>
          <div className='flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg'>
            <GitPullRequest className='h-8 w-8 text-purple-500 dark:text-purple-400 mb-2' />
            <p className='text-2xl font-bold text-purple-700 dark:text-purple-300'>
              {pullRequests}
            </p>
            <p className='text-xs text-purple-600 dark:text-purple-400'>PRs</p>
          </div>
          <div className='flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg'>
            <GitCommit className='h-8 w-8 text-green-500 dark:text-green-400 mb-2' />
            <p className='text-2xl font-bold text-green-700 dark:text-green-300'>
              {commits}
            </p>
            <p className='text-xs text-green-600 dark:text-green-400'>
              Commits
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
