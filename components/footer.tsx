'use client';

import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const productLinks = [
    { name: 'TMT Bars', href: '#products' },
    { name: 'Steel Pipes', href: '#products' },
    { name: 'Steel Sheets', href: '#products' },
    { name: 'Industrial Racks', href: '#products' },
    { name: 'Steel Lockers', href: '#products' },
    { name: 'Steel Furniture', href: '#products' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Quality Standards', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Get Quote', href: '#contact' },
    { name: 'Careers', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    try {
      if (href && typeof href === 'string' && href.trim() !== '') {
        if (href.startsWith('#')) {
          // Smooth scroll to section
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // External link
          window.open(href, '_blank', 'noopener,noreferrer');
        }
      } else {
        console.error('Invalid link href:', href);
      }
    } catch (error) {
      console.error('Error handling link click:', error);
    }
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">
                THANGAM <span className="text-safety-yellow">STEELS</span>
              </h3>
              <p className="text-gray-light leading-relaxed">
                Leading supplier and fabricator of premium steel products across India. 
                Committed to quality, precision, and customer satisfaction.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-safety-yellow flex-shrink-0" />
                <span className="text-gray-light">14-A, Batalagundu Road, Dindigul, Tamilnadu - 624002</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-safety-yellow flex-shrink-0" />
                <span className="text-gray-light">+91 9578009226</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-safety-yellow flex-shrink-0" />
                <span className="text-gray-light">info@thangamsteelcompany.online</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-display font-bold text-safety-yellow mb-6">Our Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-light hover:text-safety-yellow transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-safety-yellow mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-light hover:text-safety-yellow transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-display font-bold text-safety-yellow mb-6">Business Hours</h4>
              <div className="space-y-2 text-gray-light">
                <p>Monday - Saturday</p>
                <p className="text-white font-semibold">8:00 AM - 7:00 PM</p>
                <p>Sunday</p>
                <p className="text-white font-semibold">9:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-display font-bold text-safety-yellow mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleLinkClick('https://facebook.com/thangamsteels')} 
                  className="text-gray-light hover:text-safety-yellow transition-colors duration-200" 
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </button>
                <button 
                  onClick={() => handleLinkClick('https://twitter.com/thangamsteels')} 
                  className="text-gray-light hover:text-safety-yellow transition-colors duration-200" 
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </button>
                <button 
                  onClick={() => handleLinkClick('https://instagram.com/thangamsteels')} 
                  className="text-gray-light hover:text-safety-yellow transition-colors duration-200" 
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </button>
                <button 
                  onClick={() => handleLinkClick('https://linkedin.com/company/thangamsteels')} 
                  className="text-gray-light hover:text-safety-yellow transition-colors duration-200" 
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-light">
            © 2025 THANGAM STEELS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button 
              onClick={() => handleLinkClick('#contact')} 
              className="text-gray-light hover:text-safety-yellow transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLinkClick('#contact')} 
              className="text-gray-light hover:text-safety-yellow transition-colors duration-200"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handleLinkClick('#contact')} 
              className="text-gray-light hover:text-safety-yellow transition-colors duration-200"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}