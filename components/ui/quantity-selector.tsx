'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  initialQuantity: number;
  minQuantity: number;
  incrementStep: number;
  onQuantityChange: (quantity: number) => void;
}

export function QuantitySelector({
  initialQuantity,
  minQuantity,
  incrementStep,
  onQuantityChange
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleIncrement = () => {
    const newQuantity = quantity + incrementStep;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(minQuantity, quantity - incrementStep);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= minQuantity) {
      // Round to nearest valid increment
      const roundedValue = Math.max(minQuantity, Math.round((value - minQuantity) / incrementStep) * incrementStep + minQuantity);
      setQuantity(roundedValue);
      onQuantityChange(roundedValue);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleDecrement}
        disabled={quantity <= minQuantity}
        className="h-8 w-8 p-0"
      >
        <Minus className="h-3 w-3" />
      </Button>
      
      <Input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={minQuantity}
        step={incrementStep}
        className="w-16 h-8 text-center text-sm"
      />
      
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleIncrement}
        className="h-8 w-8 p-0"
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  );
}