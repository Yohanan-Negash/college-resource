'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../../components/ui/card';
import { Icons } from '../../lib/icons';
import { googleAuth, signInWithEmail } from '../../lib/actions/auth';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { CheckCircle2 } from 'lucide-react';

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    setShowSuccessAlert(false);

    const formData = new FormData(event.target);
    try {
      const response = await signInWithEmail(formData);

      if (response?.error) {
        setError(response.error);
      } else if (response?.success) {
        setShowSuccessAlert(true);
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
            Login or Sign Up to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {showSuccessAlert && (
            <Alert className='mb-4 bg-green-500/20 text-green-400 border-green-500/50'>
              <CheckCircle2 className='h-4 w-4' />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Magic link sent successfully! Please check your email to
                complete the process.
              </AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-zinc-300'>
                Email
              </Label>
              <Input
                id='email'
                name='email'
                placeholder='johndoe@example.com'
                type='email'
                required
                className='bg-[#1C1F2E] text-zinc-300 border border-zinc-700 focus:border-purple-500 focus:ring-purple-500 rounded-lg'
              />
            </div>
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
                  Processing...
                </>
              ) : (
                'Continue with Email'
              )}
            </Button>
          </form>
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
              Continue with Google
            </Button>
            <p className='text-center text-sm mt-5'>
              By continuing, you agree to our{' '}
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
