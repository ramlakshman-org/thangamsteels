'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CartItem } from '@/context/cart-context';
import { ShippingInfo, PaymentInfo } from '@/app/checkout/page';
import { ArrowLeft, Package, Truck, CreditCard, MapPin, Phone, Mail, Loader2 } from 'lucide-react';

interface OrderReviewProps {
  cart: CartItem[];
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  onSubmit: () => void;
  onBack: () => void;
  isProcessing: boolean;
}

export function OrderReview({ 
  cart, 
  shippingInfo, 
  paymentInfo, 
  onSubmit, 
  onBack, 
  isProcessing 
}: OrderReviewProps) {
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = subtotal > 10000 ? 0 : 500;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shippingCost + tax;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-safety-yellow/20 rounded-full flex items-center justify-center">
          <Package className="h-5 w-5 text-safety-yellow" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-charcoal">Review Your Order</h2>
          <p className="text-steel-gray">Please review all details before placing your order</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5" />
              <span>Order Items ({cart.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-charcoal">{item.name}</h4>
                  <p className="text-sm text-steel-gray">{item.category}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm">Qty: {item.quantity}</span>
                    <span className="font-semibold text-safety-yellow">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Shipping & Payment Info */}
        <div className="space-y-6">
          {/* Shipping Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span>Shipping Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-steel-gray mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">
                    {shippingInfo.firstName} {shippingInfo.lastName}
                  </p>
                  {shippingInfo.company && (
                    <p className="text-sm text-steel-gray">{shippingInfo.company}</p>
                  )}
                  <p className="text-sm text-steel-gray">
                    {shippingInfo.address}<br />
                    {shippingInfo.city}, {shippingInfo.state} {shippingInfo.pincode}<br />
                    {shippingInfo.country}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-steel-gray" />
                <span className="text-sm">{shippingInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-steel-gray" />
                <span className="text-sm">{shippingInfo.email}</span>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Payment Method</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">Cash on Delivery</p>
                  <p className="text-sm text-steel-gray">Pay when your order arrives</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>
              {shippingCost === 0 ? (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  FREE
                </Badge>
              ) : (
                `₹${shippingCost}`
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span>GST (18%)</span>
            <span>₹{tax.toLocaleString()}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-safety-yellow">₹{total.toLocaleString()}</span>
          </div>
          {shippingCost === 0 && (
            <p className="text-sm text-green-600">
              🎉 You saved ₹500 on shipping!
            </p>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={isProcessing}
          className="px-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Payment
        </Button>
        
        <Button
          onClick={onSubmit}
          disabled={isProcessing}
          size="lg"
          className="bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-bold px-8"
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Processing Order...
            </>
          ) : (
            'Place Order'
          )}
        </Button>
      </div>
    </div>
  );
}