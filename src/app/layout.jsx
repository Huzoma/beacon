import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/navigation/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Beacon',
  description: 'A brief description of my capstone project.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
