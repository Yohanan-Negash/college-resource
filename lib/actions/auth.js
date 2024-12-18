'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient as createServerClient } from '../supabase/server';

//Authenticates & logs in user with email & password
export async function signIn(formData) {
  const supabase = createServerClient();

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  console.log('Confirming email & password:', data.email, data.password);

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error('Error logging in:', error);
    return { error: error.message };
    // redirect('/login');
  }
  revalidatePath('/dashboard', 'layout');
  redirect('/dashboard');
  //return { success: true };
}

//Logs out user
export async function logout() {
  const supabase = createServerClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error logging out:', error);
  }
  console.log('Successfully logged out');
  redirect('/login');
}

//Creates & signs up new user
export async function signUp(formData) {
  const supabase = createServerClient();

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  console.log('Creating new user with email:', data.email);

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error('Error signing up:', error);
    return { error: error.message };
    // redirect('/login');
  }

  console.log('Successfully created new user');
  revalidatePath('/dashboard', 'layout');
  redirect('/dashboard');
}

//Google Auth
export async function googleAuth() {
  const supabase = createServerClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    console.error('Google Auth Error:', error);
    return { error: error.message };
  }

  if (data?.url) {
    redirect(data.url);
  }

  return { success: true };
}

//Email Auth with Magic Link
export async function signInWithEmail(formData) {
  const supabase = createServerClient();

  const data = {
    email: formData.get('email'),
  };

  const googleEmail = data.email;

  console.log('Sending magic link to:', googleEmail);

  const { error } = await supabase.auth.signInWithOtp({
    email: googleEmail,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      shouldCreateUser: true,
    },
  });

  if (error) {
    console.error('Email Auth Error:', error);
    return { error: error.message };
  }
  console.log('Successfully sent magic link!');

  return { success: true };
}
