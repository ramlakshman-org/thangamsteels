'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-charcoal to-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1565611042468-4b11b4d0e8eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Steel warehouse and fabrication"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/60"></div>
      </div>

      {/* Industrial pattern overlay */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 pt-24"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight tracking-tight">
            Reliable Steel Solutions
            <br />
            <span className="text-safety-yellow">for Every Need</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From raw materials to custom fabrications — we deliver strength, precision, and quality for industrial, commercial, and residential projects across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="bg-safety-yellow hover:bg-safety-yellow/90 text-charcoal font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 group focus:ring-4 focus:ring-safety-yellow/50 focus:outline-none"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-charcoal font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-white/50 focus:outline-none"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Products
            </Button>
          </motion.div>
        </motion.div>

        {/* Key features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Shield className="h-12 w-12 text-safety-yellow mb-4" />
            <h3 className="text-xl font-display font-bold text-white mb-2">Quality Assured</h3>
            <p className="text-gray-300">ISI certified materials meeting industry standards</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Zap className="h-12 w-12 text-safety-yellow mb-4" />
            <h3 className="text-xl font-display font-bold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-300">Quick turnaround times for all orders</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Award className="h-12 w-12 text-safety-yellow mb-4" />
            <h3 className="text-xl font-display font-bold text-white mb-2">Custom Solutions</h3>
            <p className="text-gray-300">Tailored fabrication for unique requirements</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}