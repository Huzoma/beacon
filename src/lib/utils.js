import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Example: Accessing environment variables in Next.js
// NEXT_PUBLIC_API_URL is defined in .env.local
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Simple slugify helper: lowercases, trims, replaces spaces and non-word chars with hyphens
export function slugify(text) {
  if (!text && text !== 0) return '';
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// Usage:
// import { API_URL } from '@/lib/utils';
// fetch(`${API_URL}/jobs`)
