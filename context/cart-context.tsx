'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/lib/product-data';

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => boolean;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, newQuantity: number) => boolean;
  clearCart: () => void;
  cartTotal: number;
  cartItemsCount: number;
  isValidQuantity: (product: Product, quantity: number) => boolean;
  isLoaded: boolean; // New property to track loading state
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // Track if cart has been loaded from localStorage

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('thangam-steels-cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    } finally {
      // Always set isLoaded to true after attempting to load, even if there's an error
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage whenever cart changes (but only after initial load)
  useEffect(() => {
    if (!isLoaded) return; // Don't save to localStorage until we've loaded from it
    
    try {
      localStorage.setItem('thangam-steels-cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart, isLoaded]);

  const isValidQuantity = (product: Product, quantity: number): boolean => {
    return quantity >= product.moq && quantity % product.increment === 0;
  };

  const addToCart = (product: Product, quantity: number): boolean => {
    try {
      if (!isValidQuantity(product, quantity)) {
        return false;
      }

      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === product.id);
        
        if (existingItem) {
          const newQuantity = existingItem.quantity + quantity;
          if (!isValidQuantity(product, newQuantity)) {
            return prevCart;
          }
          
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: newQuantity }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantity }];
        }
      });
      
      return true;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      return false;
    }
  };

  const removeFromCart = (productId: string) => {
    try {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateCartItemQuantity = (productId: string, newQuantity: number): boolean => {
    try {
      const item = cart.find(item => item.id === productId);
      if (!item) return false;

      if (!isValidQuantity(item, newQuantity)) {
        return false;
      }

      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
      
      return true;
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
      return false;
    }
  };

  const clearCart = () => {
    try {
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    cartTotal,
    cartItemsCount,
    isValidQuantity,
    isLoaded // Include the loading state
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}