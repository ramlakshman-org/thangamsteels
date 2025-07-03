'use client';

import { useState, memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QuantitySelector } from '@/components/ui/quantity-selector';
import { Product } from '@/lib/product-data';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { getImageUrl } from '@/lib/imageUtils';

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (productId: string, quantity: number) => void;
}

const ProductCard = memo(({ product, index, onAddToCart }: ProductCardProps) => {
  const [currentQuantity, setCurrentQuantity] = useState(product.moq);

  const handleAddToCart = () => {
    onAddToCart(product.id, currentQuantity);
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-white focus-within:ring-4 focus-within:ring-safety-yellow/50">
        <div className="relative overflow-hidden">
          <Image
            src={getImageUrl(product.imageUrl)}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/80 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center space-y-2">
              <p className="text-white text-sm px-4">{product.description}</p>
              <Badge variant="outline" className="border-white text-white">
                {product.specifications}
              </Badge>
            </div>
          </div>
          <Badge className="absolute top-2 left-2 bg-safety-yellow text-charcoal">
            {product.category}
          </Badge>
          {product.inStock && (
            <Badge className="absolute top-2 right-2 bg-green-500 text-white">
              <CheckCircle className="h-3 w-3 mr-1" />
              In Stock
            </Badge>
          )}
        </div>
        
        <CardContent className="p-6 space-y-4">
          <div>
            <h4 className="text-xl font-display font-bold text-charcoal mb-2">{product.name}</h4>
            <p className="text-steel-gray text-sm mb-3 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-safety-yellow">₹{product.price}</span>
              <span className="text-sm text-gray-500">
                {(product.name.toLowerCase().includes('tmt bars') || 
                  product.name.toLowerCase().includes('round steel pipes') ||
                  product.name.toLowerCase().includes('steel sheets & coils') ||
                  product.name.toLowerCase().includes('steel rods')) ? 'per kg' : 'per unit'}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs text-gray-600 space-y-1">
              <p>Minimum Order: {getUnitDisplay(product.name, product.moq)}</p>
              <p>Order increment in multiples of: {getUnitDisplay(product.name, product.increment)}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <QuantitySelector
                initialQuantity={product.moq}
                minQuantity={product.moq}
                incrementStep={product.increment}
                onQuantityChange={setCurrentQuantity}
              />
              <span className="text-sm font-semibold text-charcoal">
                Total: ₹{(product.price * currentQuantity).toLocaleString()}
              </span>
            </div>

            <Button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-semibold transition-all duration-300 hover:scale-105"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

ProductCard.displayName = 'ProductCard';

export { ProductCard };