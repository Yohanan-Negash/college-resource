import { createClient } from '../../../lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);

    // Redirect to dashboard after successful authentication
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If there's no code, redirect to login page
  return NextResponse.redirect(new URL('/login', request.url));
}
