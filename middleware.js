import { NextResponse } from 'next/server';
import { updateSession } from './lib/supabase/middleware';

// Routes to protect
const PROTECTED_ROUTES = ['/login', '/dashboard'];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the current path is a protected route
  const isProtectedRoute = PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  // Always allow access in development environment
  const isDevelopment = process.env.NODE_ENV === 'development';

  // If it's a protected route and we're in production, redirect to home
  if (isProtectedRoute && !isDevelopment) {
    // Redirect to your home
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // If not redirecting, update the session as before
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
