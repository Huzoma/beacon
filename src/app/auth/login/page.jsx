'use client';
import React, { useState } from 'react';
// Card components from existing UI
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
import Button from '@/components/ui/Button'; // Assuming standard Button path
import { Separator } from '@/components/ui/separator'; // Assuming standard Separator path
import { AlertTriangle, Loader2, Mail, Lock, LogIn, CheckSquare, User } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { Facebook } from 'lucide-react';

/**
 * NewLoginPage Component (Style Reverted to Dark/Blue, Structure Kept from Latest Design)
 * This version uses the two-panel structure but applies the original dark/futuristic aesthetic.
 */
function NewLoginPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // --- Mock Account Creation Logic ---
    setTimeout(() => {
      setIsLoading(false);
      if (email.includes('@') && password.length >= 6 && firstName && lastName) {
        console.log('Account created for:', email);
        console.log('Account Creation Successful! (In a real app, you would redirect here)');
      } else {
        setError('Please fill out all fields and ensure password is at least 6 characters.');
      }
    }, 1500);
  };

  const handleSocialSignIn = (provider) => {
    console.log(`Signing in with ${provider}...`);
  };

  // Custom button style based on your existing design for the primary action
  const PrimaryButton = ({ children, isLoading, ...props }) => (
    <Button
      type="submit"
      className="w-full px-8 py-3 rounded-xl bg-[#1E90FF]/20 border 
            border-[#1E90FF]/40 text-[#1E90FF] font-semibold backdrop-blur-md 
            hover:bg-[#1E90FF]/30 transition-all duration-300 ease-in-out focus:outline-none"
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating Account...
        </div>
      ) : (
        children
      )}
    </Button>
  );

  return (
    // Main container: Dark background, centered content
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-10 bg-gradient-to-br from-[#0a0f1a] to-black overflow-hidden">
      {/* Centered Container: Large card with rounded edges, translucent dark theme */}
      <div
        className="w-full max-w-5xl h-auto min-h-[600px] flex rounded-[2rem] overflow-hidden 
                            shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white/5 backdrop-blur-md 
                            border-8 border-[#1E90FF]/10"
      >
        {/* Left Panel: Aesthetic Marketing Panel (Dark Blue/Futuristic) */}
        <div
          className="hidden lg:flex lg:w-1/2 p-12 items-center justify-center relative 
                                bg-[#1E90FF]/10 rounded-l-[1.5rem] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-grid-white pointer-events-none"></div>

          <div className="max-w-md space-y-6 text-white text-center z-10">
            <LogIn className="w-16 h-16 mx-auto text-[#1E90FF] mb-4" />
            <h2 className="text-4xl font-extrabold tracking-tight">
              Build the future, start here.
            </h2>
            <p className="text-lg text-white/70">
              Secure and seamless authentication for your users. Create an account to begin your
              journey.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="text-white border-[#1E90FF]/50 bg-white/10 hover:bg-white/20 transition-all"
                onClick={() => (window.location.href = '#')}
              >
                Learn More About Our API
              </Button>
            </div>
          </div>
        </div>

        {/* Right Panel: Sign-Up Form (Translucent Dark Theme) */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center text-white">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold">Create Your Account</h2>
            <p className="text-sm text-white/50 mt-2">
              Already a user?
              <a href="/auth/login" className="text-[#1E90FF] hover:underline ml-1 font-medium">
                Log In
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Display error message if present */}
            {error && (
              <div className="flex items-center space-x-2 rounded-lg bg-red-900/40 p-3 text-sm text-red-300 border border-red-500/50">
                <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* First Name & Last Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName" className="text-white/80">
                  First Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={isLoading}
                    className="pl-10 bg-white/10 border-[#1E90FF]/50 text-white placeholder:text-white/30"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName" className="text-white/80">
                  Last Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={isLoading}
                    className="pl-10 bg-white/10 border-[#1E90FF]/50 text-white placeholder:text-white/30"
                  />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white/80">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="pl-10 bg-white/10 border-[#1E90FF]/50 text-white placeholder:text-white/30"
                />
              </div>
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white/80">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="pl-10 bg-white/10 border-[#1E90FF]/50 text-white placeholder:text-white/30"
                />
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start space-x-2 text-sm pt-2">
              <div className="flex items-center h-5">
                <CheckSquare
                  className={`h-4 w-4 cursor-pointer transition-colors text-[#1E90FF] fill-[#1E90FF]/30`}
                />
              </div>
              <Label htmlFor="terms" className="font-normal text-white/70 leading-tight">
                I agree to the{' '}
                <a href="#" className="font-medium text-[#1E90FF] hover:underline">
                  Terms & Conditions
                </a>
              </Label>
            </div>

            {/* Create Account Button (Your custom blue translucent style) */}
            <PrimaryButton isLoading={isLoading}>Create Account</PrimaryButton>

            {/* Separator */}
            <div className="flex items-center my-4">
              {/* The separator uses flex-grow inside this padded container to fit the available space. */}
              <Separator className="flex-grow bg-white/10" />
            </div>

            {/* Social Buttons (Translucent Dark Theme) */}
            <div className="grid grid-cols-2 gap-4">
              <button
                variant="outline"
                className="w-full flex justify-center border-white/20 text-blue-500 bg-white/5 hover:bg-white/10 rounded-xl transition-all p-4"
                onClick={() => handleSocialSignIn('Google')}
                type="button"
              >
                <FaGoogle className="h-4 w-4 mr-2" />
              </button>
              <button
                variant="outline"
                className="w-full flex justify-center border-white/20 text-blue-500 bg-white/5 hover:bg-white/10 rounded-xl transition-all p-4"
                onClick={() => handleSocialSignIn('GitHub')}
                type="button"
              >
                <Facebook className="h-4 w-4 mr-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLoginPage;
