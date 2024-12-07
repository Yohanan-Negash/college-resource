import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { GitPullRequest, GitCommit, GitMerge } from 'lucide-react';

export function GitHubActivity({ className, ...props }) {
  const pullRequests = 5;
  const commits = 23;
  const mergedPRs = 3;

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className='text-lg font-medium'>GitHub Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-3 gap-2 text-center'>
          <div>
            <GitPullRequest className='h-5 w-5 mx-auto mb-1 text-purple-500' />
            <p className='text-xl font-bold'>{pullRequests}</p>
            <p className='text-xs text-muted-foreground'>Open PRs</p>
          </div>
          <div>
            <GitCommit className='h-5 w-5 mx-auto mb-1 text-blue-500' />
            <p className='text-xl font-bold'>{commits}</p>
            <p className='text-xs text-muted-foreground'>Commits</p>
          </div>
          <div>
            <GitMerge className='h-5 w-5 mx-auto mb-1 text-green-500' />
            <p className='text-xl font-bold'>{mergedPRs}</p>
            <p className='text-xs text-muted-foreground'>Merged PRs</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
