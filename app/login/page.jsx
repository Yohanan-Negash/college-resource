'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icons } from '@/lib/icons';
import { signUp, signIn, googleAuth } from '@/lib/actions';

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event, action) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(event.target);
    try {
      const response = await action(formData);

      if (response?.error) {
        setError(response.error); // Display the error from the response
      } else if (response?.success) {
        // Successful signup or signin
        router.push('/dashboard');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await googleAuth();

      if (result.error) {
        setError(result.error);
      } else if (result.success && result.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      setError(
        'An unexpected error occurred with Google authentication. Please try again.'
      );
      console.error('Google auth error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <Card className='w-[350px]'>
        <CardHeader className='text-center'>
          <CardTitle>Welcome!</CardTitle>
          <CardDescription>
            Sign in or create an account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='signin'>Sign In</TabsTrigger>
              <TabsTrigger value='signup'>Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value='signin'>
              <form
                onSubmit={(e) => handleSubmit(e, signIn)}
                className='space-y-4'
              >
                <div className='space-y-2'>
                  <Label htmlFor='signin-email'>Email</Label>
                  <Input id='signin-email' name='email' type='email' required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='signin-password'>Password</Label>
                  <Input
                    id='signin-password'
                    name='password'
                    type='password'
                    required
                  />
                </div>
                {error && (
                  <p className='text-sm text-red-500' role='alert'>
                    {error}
                  </p>
                )}
                <Button type='submit' className='w-full' disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                      Signing In...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value='signup'>
              <form
                onSubmit={(e) => handleSubmit(e, signUp)}
                className='space-y-4'
              >
                <div className='space-y-2'>
                  <Label htmlFor='signup-email'>Email</Label>
                  <Input id='signup-email' name='email' type='email' required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='signup-password'>Password</Label>
                  <Input
                    id='signup-password'
                    name='password'
                    type='password'
                    required
                  />
                </div>
                {error && (
                  <p className='text-sm text-red-500' role='alert'>
                    {error}
                  </p>
                )}
                <Button type='submit' className='w-full' disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                      Signing Up...
                    </>
                  ) : (
                    'Sign Up'
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          {/* Provider Authentication will be added soon */}
          {/* <form onSubmit={handleGoogleAuth} className='w-full'>
            <Button
              variant='outline'
              className='w-full'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <Icons.google className='mr-2 h-4 w-4' />
              )}
              Sign in with Google
            </Button>
          </form> */}
        </CardFooter>
      </Card>
    </div>
  );
}
