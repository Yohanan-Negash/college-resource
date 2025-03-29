'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Resend } from 'resend';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { submitFeedback } from '@/lib/actions/email';

export default function FeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({});

  const form = useForm({
    defaultValues: {
      feedbackType: '',
      rating: '',
      subject: '',
      details: '',
      email: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const result = await submitFeedback(data);
      setSubmitStatus(result);
      if (result.success) {
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An unexpected error occurred',
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <CardTitle className='text-primary font-bold text-2xl'>
            Submit Feedback
          </CardTitle>
          <CardDescription>
            We value your feedback! Please share your thoughts, suggestions, or
            experiences with our platform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid grid-cols-2 gap-4'>
                <FormItem>
                  <FormLabel>Feedback Type</FormLabel>
                  <Select
                    onValueChange={(value) =>
                      form.setValue('feedbackType', value)
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select feedback type' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='general'>General Feedback</SelectItem>
                      <SelectItem value='bug'>Bug Report</SelectItem>
                      <SelectItem value='feature'>Feature Request</SelectItem>
                      <SelectItem value='improvement'>
                        Suggestion for Improvement
                      </SelectItem>
                      <SelectItem value='other'>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{errors.feedbackType?.message}</FormMessage>
                </FormItem>

                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <Select
                    onValueChange={(value) => form.setValue('rating', value)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Rate your experience' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='5'>5 - Excellent</SelectItem>
                      <SelectItem value='4'>4 - Good</SelectItem>
                      <SelectItem value='3'>3 - Average</SelectItem>
                      <SelectItem value='2'>2 - Poor</SelectItem>
                      <SelectItem value='1'>1 - Very Poor</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{errors.rating?.message}</FormMessage>
                </FormItem>
              </div>

              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Brief summary of your feedback'
                    {...register('subject', {
                      required: 'Subject is required',
                      minLength: {
                        value: 5,
                        message: 'Subject must be at least 5 characters.',
                      },
                    })}
                  />
                </FormControl>
                <FormMessage>{errors.subject?.message}</FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Please provide detailed feedback'
                    className='min-h-[120px]'
                    {...register('details', {
                      required: 'Details are required',
                      minLength: {
                        value: 20,
                        message: 'Details must be at least 20 characters.',
                      },
                    })}
                  />
                </FormControl>
                <FormMessage>{errors.details?.message}</FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='your@email.com'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Please enter a valid email address.',
                      },
                    })}
                  />
                </FormControl>
                <FormDescription>
                  We may use this email to follow up on your feedback
                </FormDescription>
                <FormMessage>{errors.email?.message}</FormMessage>
              </FormItem>

              {submitStatus?.message && (
                <Alert
                  variant={submitStatus.success ? 'default' : 'destructive'}
                >
                  <AlertCircle className='h-4 w-4' />
                  <AlertTitle>
                    {submitStatus.success ? 'Success' : 'Error'}
                  </AlertTitle>
                  <AlertDescription>{submitStatus.message}</AlertDescription>
                </Alert>
              )}
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button
            className='w-full'
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Submit Feedback
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
