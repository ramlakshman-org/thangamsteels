'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { PaymentInfo } from '@/app/checkout/page';
import { CreditCard, Truck, ArrowLeft, Clock } from 'lucide-react';

const paymentSchema = z.object({
  method: z.enum(['cod', 'online']),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
  cardholderName: z.string().optional(),
}).refine((data) => {
  if (data.method === 'online') {
    return data.cardNumber && data.expiryDate && data.cvv && data.cardholderName;
  }
  return true;
}, {
  message: "Card details are required for online payment",
  path: ["cardNumber"],
});

interface PaymentMethodProps {
  onSubmit: (data: PaymentInfo) => void;
  onBack: () => void;
  initialData?: PaymentInfo | null;
}

export function PaymentMethod({ onSubmit, onBack, initialData }: PaymentMethodProps) {
  const [selectedMethod, setSelectedMethod] = useState<'cod' | 'online'>(
    initialData?.method || 'cod'
  );

  const form = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      method: initialData?.method || 'cod',
      cardNumber: initialData?.cardDetails?.cardNumber || '',
      expiryDate: initialData?.cardDetails?.expiryDate || '',
      cvv: initialData?.cardDetails?.cvv || '',
      cardholderName: initialData?.cardDetails?.cardholderName || '',
    },
  });

  const handleSubmit = (data: any) => {
    const paymentData: PaymentInfo = {
      method: data.method,
      ...(data.method === 'online' && {
        cardDetails: {
          cardNumber: data.cardNumber,
          expiryDate: data.expiryDate,
          cvv: data.cvv,
          cardholderName: data.cardholderName,
        }
      })
    };
    onSubmit(paymentData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-safety-yellow/20 rounded-full flex items-center justify-center">
          <CreditCard className="h-5 w-5 text-safety-yellow" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-charcoal">Payment Method</h2>
          <p className="text-steel-gray">Choose your preferred payment option</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedMethod(value as 'cod' | 'online');
                    }}
                    defaultValue={field.value}
                    className="space-y-4"
                  >
                    <Card className="border-2 hover:border-safety-yellow/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Truck className="h-5 w-5 text-green-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-charcoal">Cash on Delivery</h3>
                                <p className="text-sm text-steel-gray">Pay when your order arrives</p>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-safety-yellow/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem value="online" id="online" />
                          <Label htmlFor="online" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                  <CreditCard className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-charcoal">Online Payment</h3>
                                  <p className="text-sm text-steel-gray">Credit/Debit Card, UPI, Net Banking</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2 text-orange-600">
                                <Clock className="h-4 w-4" />
                                <span className="text-sm font-medium">Coming Soon</span>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </CardContent>
                    </Card>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {selectedMethod === 'online' && (
            <Card className="border border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto" />
                  <h3 className="font-semibold text-orange-800">Online Payment Coming Soon</h3>
                  <p className="text-sm text-orange-700">
                    We're working on integrating secure online payment options. 
                    For now, please use Cash on Delivery.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="px-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shipping
            </Button>
            
            <Button
              type="submit"
              size="lg"
              disabled={selectedMethod === 'online'}
              className="bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-bold px-8"
            >
              Continue to Review
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}