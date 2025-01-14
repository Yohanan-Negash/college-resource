'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AlertCircle, Loader2, Plus, X } from 'lucide-react';

import { Button } from '../../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../components/ui/form';
import { Input } from '../../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';
import { Textarea } from '../../../components/ui/textarea';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../../../components/ui/alert';
import { submitSupportRequest } from '../../../lib/actions/email';

export default function SupportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({});

  const form = useForm({
    defaultValues: {
      category: '',
      priority: '',
      subject: '',
      description: '',
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
      const result = await submitSupportRequest(data);
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
      <Card className=''>
        <CardHeader>
          <CardTitle className='text-primary font-bold text-2xl'>
            Submit a Support Request
          </CardTitle>
          <CardDescription>
            Tell us about the issue you are experiencing.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid grid-cols-2 gap-4'>
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={(value) => form.setValue('category', value)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select category' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='technical'>Technical Issue</SelectItem>
                      <SelectItem value='billing'>Billing</SelectItem>
                      <SelectItem value='account'>Account</SelectItem>
                      <SelectItem value='other'>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{errors.category?.message}</FormMessage>
                </FormItem>

                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    onValueChange={(value) => form.setValue('priority', value)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select priority' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='low'>Low</SelectItem>
                      <SelectItem value='medium'>Medium</SelectItem>
                      <SelectItem value='high'>High</SelectItem>
                      <SelectItem value='critical'>Critical</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{errors.priority?.message}</FormMessage>
                </FormItem>
              </div>

              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Brief description of the issue'
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
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Please provide detailed information about your issue or request'
                    className='min-h-[120px]'
                    {...register('description', {
                      required: 'Description is required',
                      minLength: {
                        value: 20,
                        message: 'Description must be at least 20 characters.',
                      },
                    })}
                  />
                </FormControl>
                <FormMessage>{errors.description?.message}</FormMessage>
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
                  We will use this email to respond to your request
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
            Submit Request
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
