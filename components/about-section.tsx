'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Factory, Users, Award, TrendingUp } from 'lucide-react';

const capabilities = [
  {
    icon: Factory,
    title: 'Precision Fabrication',
    description: 'State-of-the-art fabrication facility with modern machinery for precise manufacturing and custom solutions.'
  },
  {
    icon: Award,
    title: 'Quality Raw Materials',
    description: 'Premium grade steel sourced from certified suppliers, ensuring durability and compliance with industry standards.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals with decades of experience in steel processing, fabrication, and quality control.'
  },
  {
    icon: TrendingUp,
    title: 'Custom Solutions',
    description: 'Tailored fabrication services to meet unique project requirements across industrial and commercial sectors.'
  }
];

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '5000+', label: 'Projects Completed' },
  { number: '100+', label: 'Happy Clients' },
  { number: '24/7', label: 'Support Available' }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6 leading-tight tracking-tight">
            About <span className="text-safety-yellow">THANGAM STEELS</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Leading the steel industry with commitment to quality, precision, and customer satisfaction. Building stronger foundations for India's growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Steel fabrication facility"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-charcoal">
              Engineered for Excellence
            </h3>
            <p className="text-lg text-steel-gray leading-relaxed">
              Since our establishment, THANGAM STEELS has been at the forefront of India's steel industry, 
              providing comprehensive solutions from raw materials to custom fabricated products. Our commitment 
              to quality and innovation has made us a trusted partner for contractors, manufacturers, and businesses 
              across the nation.
            </p>
            <p className="text-lg text-steel-gray leading-relaxed">
              We combine traditional craftsmanship with modern technology to deliver products that meet the highest 
              standards of strength, durability, and precision. Every project we undertake reflects our dedication 
              to excellence and customer satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-safety-yellow mb-2">
                {stat.number}
              </div>
              <div className="text-steel-gray font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:ring-4 focus-within:ring-safety-yellow/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-safety-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <capability.icon className="h-8 w-8 text-safety-yellow" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-charcoal mb-4">
                    {capability.title}
                  </h4>
                  <p className="text-steel-gray leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}