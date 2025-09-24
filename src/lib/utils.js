import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Example: Accessing environment variables in Next.js
// NEXT_PUBLIC_API_URL is defined in .env.local
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Usage:
// import { API_URL } from '@/lib/utils';
// fetch(`${API_URL}/jobs`)
