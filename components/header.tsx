'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CartSidebar } from '@/components/cart-sidebar';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#products' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-display font-bold text-charcoal">
                THANGAM <span className="text-safety-yellow">STEELS</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-safety-yellow px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-safety-yellow/50 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <CartSidebar />
            <Button 
              className="bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-semibold focus:ring-4 focus:ring-safety-yellow/50 focus:outline-none"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Quote
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <CartSidebar />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="focus:ring-4 focus:ring-safety-yellow/50 focus:outline-none">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-charcoal hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button 
                    className="bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-semibold mt-4 focus:ring-4 focus:ring-safety-yellow/50 focus:outline-none"
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Quote
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}