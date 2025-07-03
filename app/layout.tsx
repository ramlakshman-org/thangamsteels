'use client';

import './globals.css';
import { Inter, Oswald } from 'next/font/google';
import { CartProvider } from '@/context/cart-context';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
  // Removed preload: true to prevent font preload warnings
});

const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--font-oswald',
  display: 'swap'
  // Removed preload: true to prevent font preload warnings
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>THANGAM STEELS - Reliable Steel Solutions for Every Need</title>
        <meta name="description" content="Leading supplier and fabricator of steel products. From raw materials to custom fabrications - we deliver strength, precision, and quality for industrial, commercial, and residential projects." />
        <meta name="keywords" content="steel supplier, steel fabrication, TMT bars, steel pipes, industrial racks, steel furniture, custom fabrication, India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}