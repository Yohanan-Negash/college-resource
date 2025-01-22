'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs';
import { Icons } from '../../lib/icons';
import {
  signUp,
  signIn,
  googleAuth,
  signInWithEmail,
} from '../../lib/actions/auth';
import Link from 'next/link';

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event, action) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(event.target);
    try {
      const response = await action(formData);

      if (response?.error) {
        setError(response.error); // Display the error from the response
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

      if (result?.error) {
        setError(result.error);
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
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-[#1C1F2E] to-[#2A2D3E]'>
      <Card className='w-[350px] bg-[#2A2D3E]/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/40 transition-colors duration-300 rounded-xl shadow-lg hover:shadow-purple-500/10'>
        <CardHeader className='text-center'>
          <CardTitle className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Welcome!
          </CardTitle>
          <CardDescription className='text-zinc-400'>
            Sign in or create an account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList className='flex w-full bg-[#2A2D3E]/50 rounded-full border border-zinc-700/50 p-0'>
              <TabsTrigger
                value='signin'
                className={`flex-grow h-12 text-zinc-400 rounded-full text-center flex items-center justify-center transition-all ${
                  activeTab === 'signin'
                    ? 'bg-purple-500/30 text-purple-400 font-semibold'
                    : 'hover:bg-purple-500/20'
                }`}
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value='signup'
                className={`flex-grow h-12 text-zinc-400 rounded-full text-center flex items-center justify-center transition-all ${
                  activeTab === 'signup'
                    ? 'bg-purple-500/30 text-purple-400 font-semibold'
                    : 'hover:bg-purple-500/20'
                }`}
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value='signin'>
              <form
                onSubmit={(e) => handleSubmit(e, signInWithEmail)}
                className='space-y-4'
              >
                <div className='space-y-2'>
                  <Label htmlFor='signin-email' className='text-zinc-300'>
                    Email
                  </Label>
                  <Input
                    id='signin-email'
                    name='email'
                    placeholder='johndoe@example.com'
                    type='email'
                    required
                    className='bg-[#1C1F2E] text-zinc-300 border border-zinc-700 focus:border-purple-500 focus:ring-purple-500 rounded-lg'
                  />
                </div>
                {/* Password auth is disabled for now, we can use this if we want to enable it later */}
                {/* <div className='space-y-2'>
                  <Label htmlFor='signin-password' className='text-zinc-300'>
                    Password
                  </Label>
                  <Input
                    id='signin-password'
                    name='password'
                    type='password'
                    required
                    className='bg-[#1C1F2E] text-zinc-300 border border-zinc-700 focus:border-purple-500 focus:ring-purple-500 rounded-lg'
                  />
                </div> */}
                {error && (
                  <p className='text-sm text-red-500' role='alert'>
                    {error}
                  </p>
                )}
                <Button
                  type='submit'
                  className='w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300'
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                      Signing In...
                    </>
                  ) : (
                    'Sign In with Email'
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
                  <Label htmlFor='signup-email' className='text-zinc-300'>
                    Email
                  </Label>
                  <Input
                    id='signup-email'
                    name='email'
                    type='email'
                    placeholder='johndoe@example.com'
                    required
                    className='bg-[#1C1F2E] text-zinc-300 border border-zinc-700 focus:border-purple-500 focus:ring-purple-500 rounded-lg'
                  />
                </div>
                {/* Password auth is disabled for now, we can use this if we want to enable it later */}
                {/* <div className='space-y-2'>
                  <Label htmlFor='signup-password' className='text-zinc-300'>
                    Password
                  </Label>
                  <Input
                    id='signup-password'
                    name='password'
                    type='password'
                    required
                    className='bg-[#1C1F2E] text-zinc-300 border border-zinc-700 focus:border-purple-500 focus:ring-purple-500 rounded-lg'
                  />
                </div> */}
                {error && (
                  <p className='text-sm text-red-500' role='alert'>
                    {error}
                  </p>
                )}
                <Button
                  type='submit'
                  className='w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300'
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                      Signing Up...
                    </>
                  ) : (
                    'Sign Up with Email'
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleGoogleAuth} className='w-full'>
            <Button
              variant='outline'
              className='w-full px-6 py-3 rounded-lg border border-zinc-700 hover:border-purple-500/40 text-grey-400 hover:text-zinc-200 hover:bg-purple-500/10 transition-all'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <Icons.google className='mr-2 h-4 w-4' />
              )}
              {activeTab === 'signin'
                ? 'Sign In with Google'
                : 'Sign Up with Google'}
            </Button>
            <p className='text-center text-sm mt-5'>
              By signing up, you agree to our{' '}
              <Link
                href='/terms-of-service'
                className='text-underline text-primary'
              >
                Terms
              </Link>{' '}
              &{' '}
              <Link
                href='/privacy-policy'
                className='text-underline text-primary'
              >
                Privacy
              </Link>
              .
            </p>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
