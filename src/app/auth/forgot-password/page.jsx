'use client';
import React from 'react';
import { Mail, ArrowLeft, KeyRound } from 'lucide-react';

/**
 * ForgotPassword Component
 * A secure and stylish page for users to reset their password.
 * It maintains the visual identity of the Beacon application.
 */
export default function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset link requested for:', e.target.email.value);
    // You might want to show a confirmation message after this.
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center bg-black text-white px-4 py-20">
      <div className="max-w-xl w-full text-center p-8 sm:p-12 rounded-3xl bg-white/5 border border-[#1E90FF]/20 backdrop-blur-md shadow-2xl shadow-blue-900/40">
        {/* Icon and Title */}
        <KeyRound className="w-16 h-16 sm:w-20 sm:h-20 text-[#1E90FF] mx-auto mb-6" />

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Forgot Password?
        </h1>

        <p className="text-lg text-gray-400 mb-8">
          No problem! Enter your email below and we'll send you a link to reset it.
        </p>

        {/* Forgot Password Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full pl-12 pr-4 py-3 rounded-full bg-black/30 border border-transparent focus:border-[#1E90FF] focus:ring-2 focus:ring-[#1E90FF]/50 outline-none transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-[#1E90FF] text-black font-semibold hover:bg-blue-400 transition-colors duration-300 shadow-lg shadow-blue-500/40 transform hover:scale-[1.02]"
          >
            Send Reset Link
          </button>
        </form>
      </div>

      {/* Footer Element */}
      <div className="mt-12">
        <a
          href="/auth/login"
          className="flex items-center text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </a>
      </div>
    </div>
  );
}
