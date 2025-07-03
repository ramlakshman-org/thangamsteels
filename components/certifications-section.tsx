'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const certifications = [
  {
    name: 'ISI Certification',
    description: 'Bureau of Indian Standards certified',
    icon: Shield
  },
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: Award
  },
  {
    name: 'BIS License',
    description: 'Bureau of Indian Standards License',
    icon: CheckCircle
  },
  {
    name: 'Quality Assured',
    description: 'Government approved quality standards',
    icon: Star
  }
];

const testimonials = [
  {
    name: 'R. Kumar',
    company: 'Kumar Construction',
    text: 'Excellent quality TMT bars and timely delivery. THANGAM STEELS has been our trusted partner for over 5 years.',
    rating: 5
  },
  {
    name: 'S. Priya',
    company: 'Industrial Solutions Ltd',
    text: 'Their custom fabrication work is outstanding. The industrial racks they made for our warehouse are perfect.',
    rating: 5
  },
  {
    name: 'M. Raj',
    company: 'Tech Office Solutions',
    text: 'High-quality steel lockers delivered on time. Professional service and competitive pricing.',
    rating: 5
  }
];

export function CertificationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6 leading-tight tracking-tight">
            Certified <span className="text-safety-yellow">Quality</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Our commitment to quality is backed by industry certifications and the trust of thousands of satisfied customers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white focus-within:ring-4 focus-within:ring-safety-yellow/50">
                <CardContent className="p-4">
                  <div className="w-16 h-16 bg-safety-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-safety-yellow" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-charcoal mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-steel-gray text-sm">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-display font-bold text-charcoal mb-4">
            What Our <span className="text-safety-yellow">Clients Say</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white focus-within:ring-4 focus-within:ring-safety-yellow/50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-safety-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-steel-gray italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-display font-bold text-charcoal">
                      {testimonial.name}
                    </h4>
                    <p className="text-safety-yellow text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}