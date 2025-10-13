'use client';
import React, { useState } from 'react';
// Import shadcn/ui components (assuming they are configured or available via imports like below)
// NOTE: Since the shadcn/ui source is usually managed by the user, we will assume standard paths.
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/label';
import Button from '@/components/ui/Button';
import { AlertTriangle, Loader2 } from 'lucide-react';

/**
 * LoginPage Component
 * A standard, centered login form using shadcn/ui components.
 * This is designed to be fully responsive and visually appealing in a dark theme.
 */
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // --- Mock Authentication Logic ---
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'test@example.com' && password === 'password') {
        // Successful login simulation
        console.log('Login successful for:', email);
        // In a real app, you would redirect the user here.
        alert('Login Successful! (See console for details)');
      } else {
        // Failed login simulation
        setError('Invalid email or password. Please try again.');
      }
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-6">
      <Card className="w-full max-w-sm border-2 border-primary/20 shadow-2xl shadow-primary/10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-primary">Welcome Back</CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to access your dashboard.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            {/* Display error message if present */}
            {error && (
              <div className="flex items-center space-x-2 rounded-lg bg-red-900/30 p-3 text-sm text-red-300">
                <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <a href="/auth/signup" className="font-medium text-primary hover:underline">
                Sign Up
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
