'use client';

import { Crown, Lock, Sparkles } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export function SettingsModal({ user, open, onOpenChange }) {
  const [subscriptionStatus, setSubscriptionStatus] = useState('Loading...');

  useEffect(() => {
    async function fetchSubscriptionStatus() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('User')
        .select('isPremium')
        .eq('supabaseAuthId', user.id)
        .single();

      if (error) {
        console.error('Error fetching subscription status:', error);
        setSubscriptionStatus('Error');
      } else {
        setSubscriptionStatus(data.isPremium ? 'Paid' : 'Free');
      }
    }

    if (open) {
      fetchSubscriptionStatus();
    }
  }, [open, user.id]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Account Settings:</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-6'>
          {/* Profile Section */}
          <div className='flex items-center gap-4'>
            <Avatar className='h-16 w-16'>
              <AvatarImage src={user?.avatar} />
              <AvatarFallback className='text-lg'>
                {user?.user_metadata?.full_name?.[0]}
              </AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <span className='text-xl font-semibold'>
                {user?.user_metadata?.full_name}
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='fullName'>Full Name</Label>
              <Input
                id='fullName'
                value={user?.user_metadata?.full_name}
                readOnly
                className='bg-muted'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <div className='relative'>
                <Input
                  id='email'
                  type='email'
                  value={user?.email}
                  readOnly
                  className='bg-muted pr-10'
                />
                <Lock className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label>Subscription Type</Label>
              <div className='space-y-1'>
                <div className='text-xs uppercase text-muted-foreground'>
                  Current Plan
                </div>
                <div className='text-lg font-medium'>Free</div>
              </div>
            </div>
          </div>

          {/* Upgrade Button */}
          {/* <div className='flex justify-end'>
            <Button className='gap-2'>
              <Crown className='h-4 w-4' />
              Upgrade
            </Button>
          </div> */}
          <div className='space-y-4'>
            <Alert className='border-dashed border-2 bg-muted/50'>
              <Sparkles className='h-4 w-4' />
              <AlertTitle className='font-semibold'>
                Premium Features Coming Soon
              </AlertTitle>
              <AlertDescription className='text-sm text-muted-foreground'>
                We are working on something special! Premium features will be
                available soon.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
