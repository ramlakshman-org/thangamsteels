'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { QuantitySelector } from '@/components/ui/quantity-selector';
import { ShoppingCart, Trash2, Package, ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function CartSidebar() {
  const { cart, removeFromCart, updateCartItemQuantity, clearCart, cartTotal, cartItemsCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const success = updateCartItemQuantity(productId, newQuantity);
    if (!success) {
      toast.error('Invalid quantity. Please check minimum order requirements.');
    }
  };

  const handleRemoveItem = (productId: string) => {
    try {
      removeFromCart(productId);
      toast.success('Item removed from cart');
    } catch (error) {
      console.error('Error removing item from cart:', error);
      toast.error('Failed to remove item from cart');
    }
  };

  const handleCheckout = async () => {
    try {
      if (cart.length === 0) {
        toast.error('Your cart is empty');
        return;
      }
      
      setIsNavigating(true);
      setIsOpen(false);
      
      // Use Next.js router for better performance
      await router.push('/checkout');
    } catch (error) {
      console.error('Error during checkout navigation:', error);
      toast.error('Failed to navigate to checkout. Please try again.');
    } finally {
      setIsNavigating(false);
    }
  };

  const handleClearCart = () => {
    try {
      clearCart();
      toast.success('Cart cleared');
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast.error('Failed to clear cart');
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
    <>
      {/* Loading overlay when navigating */}
      {isNavigating && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
            <Loader2 className="h-6 w-6 animate-spin text-safety-yellow" />
            <span className="text-charcoal font-medium">Loading checkout...</span>
          </div>
        </div>
      )}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="relative border-charcoal text-charcoal hover:bg-safety-yellow hover:text-charcoal hover:border-safety-yellow transition-colors focus:ring-4 focus:ring-safety-yellow/50 focus:outline-none"
          >
            <ShoppingCart className="h-4 w-4" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-safety-yellow text-charcoal text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </SheetTrigger>
        
        <SheetContent className="w-[400px] sm:w-[540px] flex flex-col">
          <SheetHeader>
            <SheetTitle className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Shopping Cart ({cartItemsCount} items)</span>
            </SheetTitle>
            <SheetDescription>
              Review your selected items and proceed to checkout when ready.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <Package className="h-16 w-16 text-gray-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-600">Your cart is empty</h3>
                  <p className="text-gray-500">Add some products to get started</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start space-x-3">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-gray-600 mb-1">{item.category}</p>
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
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 focus:ring-4 focus:ring-red-200 focus:outline-none"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
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
                        <p className="text-sm font-semibold">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500">{item.quantity} units</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold text-safety-yellow">
                  ₹{cartTotal.toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-2">
                <Button
                  onClick={handleCheckout}
                  disabled={isNavigating}
                  className="w-full bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-bold py-3 focus:ring-4 focus:ring-safety-yellow/50 focus:outline-none"
                >
                  {isNavigating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleClearCart}
                  disabled={isNavigating}
                  className="w-full focus:ring-4 focus:ring-gray-200 focus:outline-none"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}