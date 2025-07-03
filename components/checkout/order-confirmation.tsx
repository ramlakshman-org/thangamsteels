'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { OrderData } from '@/app/checkout/page';
import { CheckCircle, Package, Truck, Calendar, Download, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface OrderConfirmationProps {
  orderData: OrderData;
}

export function OrderConfirmation({ orderData }: OrderConfirmationProps) {
  const router = useRouter();

  const handleDownloadInvoice = () => {
    try {
      // Simulate invoice download
      console.log('Downloading invoice for order:', orderData.orderId);
      // In a real app, this would trigger a PDF download
      toast.success('Invoice download will be available once backend is integrated');
    } catch (error) {
      console.error('Error downloading invoice:', error);
      toast.error('Failed to download invoice');
    }
  };

  const handleContinueShopping = async () => {
    try {
      await router.push('/');
    } catch (error) {
      console.error('Error navigating to home:', error);
      toast.error('Failed to navigate to home page');
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-display font-bold text-charcoal">
          Order Placed Successfully!
        </h1>
        <p className="text-xl text-steel-gray">
          Thank you for your order. We'll send you a confirmation email shortly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-2 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Package className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-charcoal">Order Number</h3>
                <p className="text-lg font-bold text-green-700">{orderData.orderId}</p>
              </div>
              <div>
                <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-charcoal">Estimated Delivery</h3>
                <p className="text-sm text-green-700">{orderData.estimatedDelivery}</p>
              </div>
              <div>
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-charcoal">Order Total</h3>
                <p className="text-lg font-bold text-green-700">₹{orderData.total.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-steel-gray">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-safety-yellow">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{orderData.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>
                    {orderData.shipping_cost === 0 ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        FREE
                      </Badge>
                    ) : (
                      `₹${orderData.shipping_cost}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>GST (18%)</span>
                  <span>₹{orderData.tax.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-safety-yellow">₹{orderData.total.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Shipping & Next Steps */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">
                  {orderData.shipping.firstName} {orderData.shipping.lastName}
                </p>
                {orderData.shipping.company && (
                  <p className="text-steel-gray">{orderData.shipping.company}</p>
                )}
                <p className="text-steel-gray">
                  {orderData.shipping.address}<br />
                  {orderData.shipping.city}, {orderData.shipping.state} {orderData.shipping.pincode}<br />
                  {orderData.shipping.country}
                </p>
                <p className="text-steel-gray">{orderData.shipping.phone}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-safety-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-charcoal">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Order Confirmation</p>
                    <p className="text-steel-gray">You'll receive an email confirmation shortly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Order Processing</p>
                    <p className="text-steel-gray">We'll prepare your order for shipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Delivery</p>
                    <p className="text-steel-gray">Your order will be delivered by {orderData.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button
          variant="outline"
          onClick={handleDownloadInvoice}
          className="px-6"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Invoice
        </Button>
        
        <Button
          onClick={handleContinueShopping}
          className="bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-bold px-6"
        >
          Continue Shopping
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}