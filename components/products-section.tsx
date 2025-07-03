'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { products, getProductsByCategory } from '@/lib/product-data';
import { ProductCard } from '@/components/product-card';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export function ProductsSection() {
  const { addToCart } = useCart();

  const rawMaterials = getProductsByCategory('Raw Steel');
  const fabricatedProducts = getProductsByCategory('Fabricated');

  const handleAddToCart = useCallback((productId: string, quantity: number) => {
    try {
      const product = products.find(p => p.id === productId);
      if (!product) {
        toast.error('Product not found');
        return;
      }

      const success = addToCart(product, quantity);
      
      if (!success) {
        toast.error('Failed to add item to cart. Please check quantity requirements.');
      }
      // Removed the success toast notification as requested
    } catch (error) {
      console.error('Error in handleAddToCart:', error);
      toast.error('An error occurred while adding item to cart');
    }
  }, [addToCart]);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6 leading-tight tracking-tight">
            Our <span className="text-safety-yellow">Product Range</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Comprehensive selection of raw steel materials and custom fabricated products to meet all your construction and industrial needs.
          </p>
        </motion.div>

        {/* Raw Steel Materials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <h3 className="text-3xl font-display font-bold text-charcoal">Raw Steel Materials</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-safety-yellow to-transparent ml-6 hidden sm:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rawMaterials.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </motion.div>

        {/* Fabricated Products */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center mb-8">
            <h3 className="text-3xl font-display font-bold text-charcoal">Fabricated Products</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-safety-yellow to-transparent ml-6 hidden sm:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricatedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            className="bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-safety-yellow/50 focus:outline-none"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}