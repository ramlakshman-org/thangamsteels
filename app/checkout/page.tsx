'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCart } from '@/context/cart-context';
import { CheckoutHeader } from '@/components/checkout/checkout-header';
import { CheckoutSteps } from '@/components/checkout/checkout-steps';
import { ShippingForm } from '@/components/checkout/shipping-form';
import { PaymentMethod } from '@/components/checkout/payment-method';
import { OrderReview } from '@/components/checkout/order-review';
import { OrderConfirmation } from '@/components/checkout/order-confirmation';
import { CheckoutSummary } from '@/components/checkout/checkout-summary';
import { CheckoutSkeleton } from '@/components/ui/skeleton-loader';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface PaymentInfo {
  method: 'cod' | 'online';
  cardDetails?: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
  };
}

export interface OrderData {
  orderId: string;
  items: any[];
  shipping: ShippingInfo;
  payment: PaymentInfo;
  subtotal: number;
  shipping_cost: number;
  tax: number;
  total: number;
  estimatedDelivery: string;
}

const steps = [
  { id: 1, name: 'Shipping', description: 'Delivery information' },
  { id: 2, name: 'Payment', description: 'Payment method' },
  { id: 3, name: 'Review', description: 'Review order' },
  { id: 4, name: 'Confirmation', description: 'Order placed' }
];

export default function CheckoutPage() {
  // ALL HOOKS MUST BE DECLARED FIRST - BEFORE ANY CONDITIONAL LOGIC
  const { cart, cartTotal, clearCart, isLoaded } = useCart();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  // Simulate initial page load time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 800); // Show skeleton for 800ms to demonstrate loading

    return () => clearTimeout(timer);
  }, []);

  // Only redirect if cart is loaded and actually empty (and not on confirmation step)
  useEffect(() => {
    if (isLoaded && cart.length === 0 && currentStep < 4) {
      toast.error('Your cart is empty. Redirecting to home page...');
      
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [cart.length, currentStep, isLoaded, router]);

  // NOW WE CAN DO CONDITIONAL RENDERING AFTER ALL HOOKS ARE DECLARED

  // Show skeleton loader while page is loading or cart is being loaded
  if (isPageLoading || !isLoaded) {
    return <CheckoutSkeleton />;
  }

  // Show empty cart message only if cart is loaded and actually empty
  if (isLoaded && cart.length === 0 && currentStep < 4) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Cart is Empty</h2>
          <p className="text-steel-gray">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  const handleShippingSubmit = (data: ShippingInfo) => {
    try {
      setShippingInfo(data);
      setCurrentStep(2);
      toast.success('Shipping information saved');
    } catch (error) {
      console.error('Error saving shipping information:', error);
      toast.error('Failed to save shipping information');
    }
  };

  const handlePaymentSubmit = (data: PaymentInfo) => {
    try {
      setPaymentInfo(data);
      setCurrentStep(3);
      toast.success('Payment method selected');
    } catch (error) {
      console.error('Error saving payment information:', error);
      toast.error('Failed to save payment information');
    }
  };

  const handleOrderSubmit = async () => {
    if (!shippingInfo || !paymentInfo) {
      toast.error('Missing shipping or payment information');
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 3000));

      const orderId = `TS${Date.now()}`;
      const shippingCost = cartTotal > 10000 ? 0 : 500; // Free shipping over ₹10,000
      const tax = Math.round(cartTotal * 0.18); // 18% GST
      const total = cartTotal + shippingCost + tax;

      const order: OrderData = {
        orderId,
        items: cart,
        shipping: shippingInfo,
        payment: paymentInfo,
        subtotal: cartTotal,
        shipping_cost: shippingCost,
        tax,
        total,
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };

      setOrderData(order);
      clearCart();
      setCurrentStep(4);
      toast.success('Order placed successfully!');
    } catch (error) {
      console.error('Order processing failed:', error);
      toast.error('Order processing failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStepClick = (stepNumber: number) => {
    try {
      if (stepNumber < currentStep) {
        setCurrentStep(stepNumber);
      }
    } catch (error) {
      console.error('Error changing step:', error);
      toast.error('Failed to change step');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ShippingForm
            onSubmit={handleShippingSubmit}
            initialData={shippingInfo}
          />
        );
      case 2:
        return (
          <PaymentMethod
            onSubmit={handlePaymentSubmit}
            onBack={() => setCurrentStep(1)}
            initialData={paymentInfo}
          />
        );
      case 3:
        return (
          <OrderReview
            cart={cart}
            shippingInfo={shippingInfo!}
            paymentInfo={paymentInfo!}
            onSubmit={handleOrderSubmit}
            onBack={() => setCurrentStep(2)}
            isProcessing={isProcessing}
          />
        );
      case 4:
        return orderData ? (
          <OrderConfirmation orderData={orderData} />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CheckoutHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CheckoutSteps
            steps={steps}
            currentStep={currentStep}
            onStepClick={handleStepClick}
          />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {renderStepContent()}
              </motion.div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <CheckoutSummary
              cart={cart}
              cartTotal={cartTotal}
              currentStep={currentStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
}