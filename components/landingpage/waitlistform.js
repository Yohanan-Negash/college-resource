'use client';

import { useState } from 'react';
import { addToWaitlist } from '@/lib/supabase/waitlist';
import { useToast } from '@/components/hooks/use-toast';
import { sendWaitlistEmail } from '@/lib/actions/waitlistEmail';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';

const WaitlistForm = ({ isOpen, onClose, onSubmit }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onFormSubmit = async (data) => {
    setLoading(true);

    try {
      const { data: responseData, error } = await addToWaitlist(data);

      if (error) {
        if (error === 'This email is already registered') {
          setError('email', {
            type: 'manual',
            message: 'This email is already on our waitlist',
          });
          toast({
            variant: 'destructive',
            title: 'Already Registered',
            description: 'Please use a different .edu email address.',
          });
        } else {
          toast({
            variant: 'destructive',
            title: 'Error',
            description:
                'There was an issue with your request. Please try again.',
          });
        }
      } else {
        await sendWaitlistEmail(data);
        toast({
          title: 'Success!',
          description: 'You have been added to the waitlist.',
        });
        onSubmit(responseData);
        reset();
        onClose();
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className='sm:max-w-[425px] w-[95vw] max-w-[95vw] rounded-lg border-purple-500/20'>
          <DialogHeader>
            <DialogTitle className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center'>
              Join Waitlist
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onFormSubmit)} className='space-y-4 py-2'>
            <div>
              <Input
                  {...register('firstName', { required: 'First name is required' })}
                  placeholder='First Name'
                  className='bg-background/50 w-full'
              />
              {errors.firstName && (
                  <p className='text-xs text-destructive mt-1'>
                    {errors.firstName.message}
                  </p>
              )}
            </div>

            <div>
              <Input
                  {...register('lastName', { required: 'Last name is required' })}
                  placeholder='Last Name'
                  className='bg-background/50 w-full'
              />
              {errors.lastName && (
                  <p className='text-xs text-destructive mt-1'>
                    {errors.lastName.message}
                  </p>
              )}
            </div>

            <div>
              <Input
                  type='email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    },
                    validate: (value) => {
                      return !!value || 'Email cannot be empty';
                    }
                  })}
                  placeholder='your.name@example.com'
                  className='bg-background/50 w-full'
              />
              {errors.email && (
                  <p className='text-xs text-destructive mt-1'>
                    {errors.email.message}
                  </p>
              )}
            </div>

            <DialogFooter className='mt-4 sm:mt-6'>
              <Button
                  type='submit'
                  disabled={loading}
                  className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity'
              >
                {loading ? 'Submitting...' : 'Join Waitlist'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
  );
};

export default WaitlistForm;