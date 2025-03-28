'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Icons } from '@/lib/icons';
import { googleAuth, signInWithEmail } from '@/lib/actions/auth';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2 } from 'lucide-react';

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse movement
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Set default mouse position to center if no movement
    mousePosition.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    // Create aurora/nebula effect
    class AuroraPoint {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.density = Math.random() * 25 + 5;
        this.distance = 0;
        this.radius = Math.random() * 2 + 0.5;
        this.color = this.getRandomColor();
        this.opacity = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.01 + Math.random() * 0.02;
      }

      getRandomColor() {
        const colors = [
          [142, 68, 173], // Purple
          [155, 89, 182], // Medium Purple
          [175, 122, 197], // Light Purple
          [236, 72, 153], // Pink
          [219, 39, 119], // Medium Pink
          [190, 75, 219], // Violet
          [124, 58, 237], // Indigo
        ];

        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Calculate distance from mouse
        const dx = mousePosition.current.x - this.x;
        const dy = mousePosition.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Move point away from mouse with a subtle effect
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 100;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance && force > 0) {
          this.x -= forceDirectionX * force * this.density * 0.6;
          this.y -= forceDirectionY * force * this.density * 0.6;
        } else {
          // Slowly return to original position
          if (this.x !== this.baseX) {
            const dx = this.baseX - this.x;
            this.x += dx * 0.02;
          }
          if (this.y !== this.baseY) {
            const dy = this.baseY - this.y;
            this.y += dy * 0.02;
          }
        }

        // Add some flowing movement
        this.angle += this.speed;
        this.y += Math.sin(this.angle) * 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create aurora points
    const auroraPoints = [];
    const initAurora = () => {
      const numberOfPoints = Math.floor((canvas.width * canvas.height) / 6000);

      for (let i = 0; i < numberOfPoints; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        auroraPoints.push(new AuroraPoint(x, y));
      }
    };

    initAurora();

    // Create nebula clouds
    const nebulaBlobs = [];
    const initNebula = () => {
      const numberOfBlobs = 5;

      for (let i = 0; i < numberOfBlobs; i++) {
        nebulaBlobs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 300 + 100,
          color: [
            Math.floor(Math.random() * 100) + 100,
            Math.floor(Math.random() * 50) + 50,
            Math.floor(Math.random() * 150) + 100,
          ],
          opacity: Math.random() * 0.05 + 0.02,
          speed: Math.random() * 0.0005 + 0.0002,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    initNebula();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0F1120');
      gradient.addColorStop(1, '#1C1F2E');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars removed as per user preference

      // Draw nebula blobs
      for (let i = 0; i < nebulaBlobs.length; i++) {
        const blob = nebulaBlobs[i];

        // Update blob position with gentle floating
        blob.angle += blob.speed;
        blob.x += Math.cos(blob.angle) * 0.5;
        blob.y += Math.sin(blob.angle) * 0.5;

        // Draw blob
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );

        gradient.addColorStop(
          0,
          `rgba(${blob.color[0]}, ${blob.color[1]}, ${blob.color[2]}, ${blob.opacity})`
        );
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Connect aurora points with lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < auroraPoints.length; i++) {
        for (let j = i; j < auroraPoints.length; j++) {
          const dx = auroraPoints[i].x - auroraPoints[j].x;
          const dy = auroraPoints[i].y - auroraPoints[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 50) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${auroraPoints[i].color[0]}, ${
              auroraPoints[i].color[1]
            }, ${auroraPoints[i].color[2]}, ${0.1 * (1 - distance / 50)})`;
            ctx.moveTo(auroraPoints[i].x, auroraPoints[i].y);
            ctx.lineTo(auroraPoints[j].x, auroraPoints[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw aurora points
      for (let i = 0; i < auroraPoints.length; i++) {
        auroraPoints[i].update();
        auroraPoints[i].draw();
      }

      // Add central glow
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.6;

      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      );
      glow.addColorStop(0, 'rgba(139, 92, 246, 0.03)');
      glow.addColorStop(0.5, 'rgba(236, 72, 153, 0.015)');
      glow.addColorStop(1, 'rgba(30, 41, 59, 0)');

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

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
    <div className='relative flex justify-center items-center h-screen overflow-hidden'>
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full -z-10'
      />

      {/* Animated gradient overlay */}
      <div className='absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C1F2E]/60 animate-pulse-slow -z-5'></div>

      <Card className='w-[350px] bg-[#2A2D3E]/30 backdrop-blur-md border border-zinc-700/50 hover:border-purple-500/40 transition-all duration-500 rounded-xl shadow-xl shadow-purple-500/30'>
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
                className='bg-[#1C1F2E]/70 text-zinc-300 border border-zinc-700 focus:border-purple-500 focus:ring-purple-500 rounded-lg'
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
