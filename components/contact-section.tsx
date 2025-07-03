'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  productType: z.string().min(1, 'Please select a product type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const productTypes = [
  'TMT Bars',
  'Steel Pipes',
  'Steel Sheets & Coils',
  'Steel Rods',
  'Industrial Racks',
  'Steel Lockers',
  'Steel Furniture',
  'Steel Beds',
  'Custom Fabrication',
  'Other'
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      productType: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      toast.success('Thank you! We will contact you soon.');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight tracking-tight">
            Get in <span className="text-safety-yellow">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your steel requirements? Contact us for a customized quote and expert consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-safety-yellow mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-safety-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-safety-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-300">14-A, Batalagundu Road<br />Dindigul, Tamilnadu - 624002<br />India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-safety-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-safety-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+91 9578009226</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-safety-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-safety-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@thangamsteelcompany.online</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-safety-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-safety-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-300">Mon - Sat: 8:00 AM - 7:00 PM<br />Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-bold text-safety-yellow">
                  Request a Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-4 focus:ring-safety-yellow/50 focus:border-safety-yellow"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your company name"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-4 focus:ring-safety-yellow/50 focus:border-safety-yellow"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your@email.com"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-4 focus:ring-safety-yellow/50 focus:border-safety-yellow"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+91 9578009226"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-4 focus:ring-safety-yellow/50 focus:border-safety-yellow"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="productType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Product Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-4 focus:ring-safety-yellow/50 focus:border-safety-yellow">
                                <SelectValue placeholder="Select product type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {productTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your requirements..."
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px] focus:ring-4 focus:ring-safety-yellow/50 focus:border-safety-yellow"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-bold py-4 text-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-safety-yellow/50 focus:outline-none"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}