import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const SITE_URL = 'https://thangamsteelcompany.online';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Terms & Conditions | Thangam Steels - Legal Policies',
  description: 'Review the terms and conditions governing your use of Thangam Steels website, products, and services. Understand your rights and responsibilities.',
  openGraph: {
    title: 'Terms & Conditions | Thangam Steels - Legal Policies',
    description: 'Review the terms and conditions governing your use of Thangam Steels website, products, and services. Understand your rights and responsibilities.',
    url: '/terms-conditions',
    siteName: 'Thangam Steels',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Thangam Steels - Legal Policies',
    description: 'Review the terms and conditions for using Thangam Steels website and services.',
  },
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-4">
              TERMS & CONDITIONS
            </h1>
            <div className="w-24 h-1.5 bg-safety-yellow mx-auto mb-8"></div>
            <p className="text-gray-700 text-xl">
              Legal Agreement Between You and Thangam Steels
            </p>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-center mb-12">
              Last updated: July 2025
            </p>
            <p className="text-gray-700 mb-6">
              Welcome to Thangam Steels. By accessing and using our website (thangamsteelcompany.online), you agree to comply with and be bound by the following Terms and Conditions. These terms govern all interactions, purchases, and services offered through our digital platform. Please review them carefully before using the site or placing an order.
            </p>
            <p className="text-gray-700 mb-12">
              Continued use of the site implies full acceptance of these terms. If you disagree with any part, we advise you to discontinue use of the site.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">1. General Use of the Website</h2>
                <p className="text-gray-700 mb-4">
                  By using this website, you confirm that you are either:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>At least 18 years of age, or</li>
                  <li>Accessing the site under the supervision of a parent or legal guardian</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  You agree to use the website only for lawful purposes and in a way that does not violate the rights or restrict the use of the site by others.
                </p>
                <p className="text-gray-700">
                  Thangam Steels reserves the right to restrict, suspend, or terminate access to the website (or specific features) without prior notice or liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">2. Product Listings, Pricing & Availability</h2>
                <p className="text-gray-700 mb-4">
                  All products listed (including steel bars, sheets, rods, and related items) are subject to availability and may be modified or discontinued without prior notice.
                </p>
                <p className="text-gray-700 mb-4">
                  We strive for accuracy in product descriptions, specifications, and images. However, occasional errors may occur. We reserve the right to correct such errors, cancel affected orders, and issue refunds where necessary.
                </p>
                <p className="text-gray-700 mb-4">
                  Prices are displayed in Indian Rupees (INR ₹) unless stated otherwise. Pricing may change at any time due to market fluctuations, raw material costs, or company policy.
                </p>
                <p className="text-gray-700">
                  For bulk or wholesale orders, minimum quantities apply, and specific pricing will be communicated directly to the buyer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">3. Payments</h2>
                <p className="text-gray-700 mb-4">
                  All orders must be paid in full at the time of purchase unless an alternate agreement has been arranged (e.g., for verified B2B clients).
                </p>
                <p className="text-gray-700 mb-4">
                  We accept major credit/debit cards, UPI, net banking, and other secure digital payment methods via verified payment gateways.
                </p>
                <p className="text-gray-700 mb-4">
                  Thangam Steels does not store any payment information. All transactions are processed through secure third-party providers.
                </p>
                <p className="text-gray-700">
                  In case of payment errors, duplicate charges, or unauthorized transactions, please contact our support team immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">4. Shipping & Delivery</h2>
                <p className="text-gray-700 mb-4">
                  We offer domestic shipping and coordinate logistics through trusted courier and freight partners.
                </p>
                <p className="text-gray-700 mb-4">
                  Estimated delivery times vary based on location, order size, and product type, and will be communicated at checkout or during order confirmation.
                </p>
                <p className="text-gray-700 mb-4">
                  Tracking details will be shared via email, SMS, or WhatsApp upon dispatch.
                </p>
                <p className="text-gray-700">
                  Any delays caused by third-party logistics providers or unforeseen events (e.g., strikes, natural calamities) are beyond our direct control, though we will assist in resolution wherever possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">5. User Conduct & Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  By using the website, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Post or transmit unlawful, abusive, misleading, or harmful content</li>
                  <li>Attempt unauthorized access to backend systems or customer data</li>
                  <li>Use any part of the site or its contents for commercial use without written permission</li>
                  <li>Engage in activities that compromise the performance, security, or integrity of the site</li>
                </ul>
                <p className="text-gray-700">
                  Violations may result in suspension or permanent ban from the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content on this website—including logos, designs, images, text, and product specifications—is the intellectual property of Thangam Steels.
                </p>
                <p className="text-gray-700">
                  You may not reuse, reproduce, or distribute any part of the site without express written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">7. Modifications to Terms</h2>
                <p className="text-gray-700 mb-4">
                  Thangam Steels reserves the right to update, revise, or modify these Terms & Conditions at any time.
                </p>
                <p className="text-gray-700 mb-4">
                  Changes will be reflected on this page with a revised date. Continued use of the site after such updates constitutes your acceptance of the new terms.
                </p>
                <p className="text-gray-700">
                  We recommend reviewing this page periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  Under no circumstances shall Thangam Steels, its directors, employees, or affiliates be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Any direct or indirect damages arising from use or inability to use the website</li>
                  <li>Product delays or inaccuracies in content</li>
                  <li>Service disruptions or delivery failures due to third-party actions</li>
                </ul>
                <p className="text-gray-700">
                  Your use of this website is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">9. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms are governed by the laws of India, with jurisdiction under the courts of Dindigul, Tamil Nadu.
                </p>
                <p className="text-gray-700">
                  Any disputes will be resolved accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  For questions, concerns, or assistance, you can reach us via:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-medium text-gray-900">Thangam Steels Pvt. Ltd.</p>
                  <p className="text-gray-700">14-A, Batalagundu Road</p>
                  <p className="text-gray-700">Dindigul - 624002</p>
                  <p className="text-gray-700">Tamil Nadu, India</p>
                  <p className="mt-4">
                    <span className="font-medium text-gray-900">📞 Phone:</span>{' '}
                    <a href="tel:+919578009226" className="text-blue-600 hover:underline">
                      +91 95780 09226
                    </a>
                  </p>
                  <p className="mt-2">
                    <span className="font-medium text-gray-900">📧 Email:</span>{' '}
                    <a href="mailto:info@thangamsteelcompany.online" className="text-blue-600 hover:underline">
                      info@thangamsteelcompany.online
                    </a>
                  </p>
                  <p className="mt-2">
                    <span className="font-medium text-gray-900">📧 </span>
                    <a href="mailto:thangamsteelcompany93@gmail.com" className="text-blue-600 hover:underline">
                      thangamsteelcompany93@gmail.com
                    </a>
                  </p>
                  <p className="mt-4 text-gray-700">
                    💬 WhatsApp & Contact Form: Available on our Contact Us page
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
