'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { QuantitySelector } from '@/components/ui/quantity-selector';
import { useCart } from '@/context/cart-context';
import { CartItem } from '@/context/cart-context';
import { Package, Truck, Calculator, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface CheckoutSummaryProps {
  cart: CartItem[];
  cartTotal: number;
  currentStep: number;
}

export function CheckoutSummary({ cart, cartTotal, currentStep }: CheckoutSummaryProps) {
  const { updateCartItemQuantity, removeFromCart } = useCart();
  
  const shippingCost = cartTotal > 10000 ? 0 : 500;
  const tax = Math.round(cartTotal * 0.18); // 18% GST
  const total = cartTotal + shippingCost + tax;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    try {
      const success = updateCartItemQuantity(productId, newQuantity);
      if (!success) {
        toast.error('Invalid quantity. Please check minimum order requirements.');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Failed to update quantity');
    }
  };

  const handleRemoveItem = (productId: string) => {
    try {
      removeFromCart(productId);
      toast.success('Item removed from cart');
    } catch (error) {
      console.error('Error removing item:', error);
      toast.error('Failed to remove item');
    }
  };

  // Helper function to get the unit display for MOQ and increment
  const getUnitDisplay = (productName: string, value: number) => {
    if (productName.toLowerCase().includes('tmt bars') || 
        productName.toLowerCase().includes('round steel pipes') ||
        productName.toLowerCase().includes('steel sheets & coils') ||
        productName.toLowerCase().includes('steel rods')) {
      return `${value}Kg`;
    }
    return `${value} units`;
  };

  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <Card className="sticky top-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5" />
            <span>Order Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Items */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                <div className="flex items-start space-x-3">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                    <p className="text-xs text-steel-gray mb-2">{item.category}</p>
                    <p className="text-sm font-bold text-safety-yellow">
                      ₹{item.price} {(item.name.toLowerCase().includes('tmt bars') || 
                                     item.name.toLowerCase().includes('round steel pipes') ||
                                     item.name.toLowerCase().includes('steel sheets & coils') ||
                                     item.name.toLowerCase().includes('steel rods')) ? 'per kg' : 'per unit'}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-auto"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">
                      MOQ: {getUnitDisplay(item.name, item.moq)} | Step: {getUnitDisplay(item.name, item.increment)}
                    </p>
                    <QuantitySelector
                      initialQuantity={item.quantity}
                      minQuantity={item.moq}
                      incrementStep={item.increment}
                      onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                    />
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-charcoal">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">{item.quantity} units</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Pricing Breakdown */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal ({cart.length} items)</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-steel-gray" />
                <span>Shipping</span>
              </div>
              <span>
                {shippingCost === 0 ? (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    FREE
                  </Badge>
                ) : (
                  `₹${shippingCost}`
                )}
              </span>
            </div>

            {cartTotal > 10000 && (
              <p className="text-xs text-green-600">
                🎉 Free shipping on orders over ₹10,000
              </p>
            )}

            <div className="flex justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Calculator className="h-4 w-4 text-steel-gray" />
                <span>GST (18%)</span>
              </div>
              <span>₹{tax.toLocaleString()}</span>
            </div>

            <Separator />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-safety-yellow">₹{total.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Notice */}
      {currentStep < 4 && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-green-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Secure Checkout</span>
            </div>
            <p className="text-xs text-green-600 mt-1">
              Your information is protected with industry-standard encryption
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}