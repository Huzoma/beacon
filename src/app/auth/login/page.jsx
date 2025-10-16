'use client';
import React, { useState } from 'react';
// We now only import standard components and Lucide icons
import { AlertTriangle, Loader2, Mail, Lock, LogIn, Chrome, Facebook } from 'lucide-react';

/**
 * Custom Input Component (Self-contained implementation to replace external component)
 */
const Input = ({
  className = '',
  icon: Icon,
  id,
  type = 'text',
  placeholder,
  required,
  value,
  onChange,
  disabled,
}) => (
  <div className="relative">
    {Icon && (
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
    )}
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full h-12 py-2 px-4 rounded-xl text-sm focus:outline-none transition-colors 
                    bg-white/10 border-[#1E90FF]/50 text-white placeholder:text-white/30 border 
                    focus:ring-2 focus:ring-[#1E90FF]/50 disabled:opacity-50
                    ${Icon ? 'pl-10' : 'pl-4'} ${className}`}
    />
  </div>
);

/**
 * Custom Separator Component (Self-contained implementation to replace external component)
 */
const Separator = ({ className = '' }) => (
  <div className={`h-[1px] bg-white/10 ${className}`}></div>
);

/**
 * Custom Button Component (Base for all buttons, replacing external component)
 * Handles different variants (primary, outline, social) and loading states.
 */
const CustomButton = ({ children, isLoading, className = '', variant = 'default', ...props }) => {
  let baseStyles =
    'w-full flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none p-3';

  // Apply different styles based on variant
  if (variant === 'primary') {
    // Futuristic Blue Primary Style
    baseStyles +=
      ' bg-[#1E90FF]/20 border border-[#1E90FF]/40 text-[#1E90FF] backdrop-blur-md hover:bg-[#1E90FF]/30';
  } else if (variant === 'outline') {
    // Outline style for links/secondary actions
    baseStyles += ' border border-[#1E90FF]/50 bg-white/10 text-white hover:bg-white/20';
  } else if (variant === 'social') {
    // Translucent social button style
    baseStyles += ' border border-white/20 text-blue-500 bg-white/5 hover:bg-white/10';
  } else {
    // default
    baseStyles += ' bg-gray-700 text-white hover:bg-gray-600';
  }

  return (
    <button className={`${baseStyles} ${className}`} disabled={isLoading} {...props}>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

/**
 * LoginPage Component (Dark/Blue Futuristic Theme - Two Panel Login)
 * This component provides a dark, two-panel, responsive login interface.
 */
function LoginPage() {
  // Only Email and Password state are needed for Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // --- Mock Login Logic ---
    setTimeout(() => {
      setIsLoading(false);
      // Mock validation for demonstration
      if (email.includes('@') && password.length >= 6) {
        console.log('User logged in (Mock Success):', email);
        // Use custom alert replacement
        alert('Login Successful! Welcome back.');
      } else {
        setError('Invalid credentials. Please check your email and password.');
      }
    }, 1500);
  };

  const handleSocialSignIn = (provider) => {
    // Use custom alert replacement
    alert(`Signing in with ${provider}... (Mock Action)`);
  };

  // PrimaryButton uses the CustomButton with the 'primary' variant
  const PrimaryButton = ({ children, isLoading, ...props }) => (
    <CustomButton
      type="submit"
      variant="primary"
      isLoading={isLoading}
      className="px-8 py-3 w-full"
      {...props}
    >
      {children}
    </CustomButton>
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
          {/* Replaced potentially missing grid background with a gradient overlay */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-transparent to-[#1E90FF]/30 pointer-events-none"></div>

          <div className="max-w-md space-y-6 text-white text-center z-10">
            <LogIn className="w-16 h-16 mx-auto text-[#1E90FF] mb-4" />
            <h2 className="text-4xl font-extrabold tracking-tight">Access the future of data.</h2>
            <p className="text-lg text-white/70">
              Welcome back. Log in to continue managing your account and access all of our advanced
              features and tools.
            </p>
            <div className="mt-8 flex justify-center">
              <CustomButton
                variant="outline"
                className="w-auto px-6"
                onClick={() => alert('Redirecting to password reset...')}
              >
                Forgot Password?
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Right Panel: Login Form (Translucent Dark Theme) */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center text-white">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold">Sign In</h2>
            <p className="text-sm text-white/50 mt-2">
              New user?
              <a href="/auth/signup" className="text-[#1E90FF] hover:underline ml-1 font-medium">
                Create an Account
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Display error message if present */}
            {error && (
              <div className="flex items-center space-x-2 rounded-xl bg-red-900/40 p-3 text-sm text-red-300 border border-red-500/50">
                <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Email Address */}
            <div className="grid gap-2">
              <label htmlFor="email" className="text-white/80 text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                icon={Mail}
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <label htmlFor="password" className="text-white/80 text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                icon={Lock}
              />

              {/* Forgot Password Link */}
              <div className="text-right text-xs pt-1">
                <a
                  href="#"
                  className="font-medium text-[#1E90FF] hover:underline"
                  onClick={() => alert('Redirecting to password reset...')}
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button (Your custom blue translucent style) */}
            <PrimaryButton isLoading={isLoading}>
              {isLoading ? 'Signing In...' : 'Log In'}
            </PrimaryButton>

            {/* Separator */}
            <div className="flex items-center my-6">
              <Separator className="flex-grow" />
              <span className="mx-4 text-sm text-white/50">OR CONTINUE WITH</span>
              <Separator className="flex-grow" />
            </div>

            {/* Social Buttons (Translucent Dark Theme) */}
            <div className="grid grid-cols-2 gap-4">
              <CustomButton
                variant="social"
                className="p-3.5"
                onClick={() => handleSocialSignIn('Google')}
                type="button"
              >
                <Chrome className="h-4 w-4 mr-2" />
                Google
              </CustomButton>
              <CustomButton
                variant="social"
                className="p-3.5"
                onClick={() => handleSocialSignIn('Facebook')}
                type="button"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
