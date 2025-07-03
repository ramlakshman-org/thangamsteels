'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';
import { toast } from 'sonner';

export function CheckoutHeader() {
  const router = useRouter();

  const handleBackToStore = async () => {
    try {
      await router.push('/');
    } catch (error) {
      console.error('Error navigating back to store:', error);
      toast.error('Failed to navigate back to store');
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToStore}
              className="text-charcoal hover:text-safety-yellow"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Store
            </Button>
            
            <div className="h-6 w-px bg-gray-300" />
            
            <h1 className="text-xl font-display font-bold text-charcoal">
              THANGAM <span className="text-safety-yellow">STEELS</span>
            </h1>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Shield className="h-4 w-4 text-green-600" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </header>
  );
}