import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const SITE_URL = 'https://thangamsteelcompany.online';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Shipping Policy | Thangam Steels - Delivery & Logistics',
  description: 'Learn about our shipping, delivery, and logistics policies for Thangam Steels products. Get details on processing times, shipping charges, and tracking.',
  openGraph: {
    title: 'Shipping Policy | Thangam Steels - Delivery & Logistics',
    description: 'Learn about our shipping, delivery, and logistics policies for Thangam Steels products. Get details on processing times, shipping charges, and tracking.',
    url: '/shipping-policy',
    siteName: 'Thangam Steels',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shipping Policy | Thangam Steels - Delivery & Logistics',
    description: 'Learn about our shipping, delivery, and logistics policies for Thangam Steels products.',
  },
};

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-4">
              SHIPPING POLICY
            </h1>
            <div className="w-24 h-1.5 bg-safety-yellow mx-auto mb-8"></div>
            <p className="text-gray-700 text-xl">
              Fast, Reliable Delivery for Your Steel Products
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-center mb-12">
              Last updated: July 2025
            </p>
            <p className="text-gray-700 mb-8">
              At Thangam Steels, we are dedicated to ensuring that your order—whether local or national—reaches you securely and within agreed timelines. This Shipping Policy explains our processing, delivery, and logistics practices, so you know exactly what to expect.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Order Processing Time</h2>
                <p className="text-gray-700 mb-4">
                  Once your order is confirmed and payment is received (or as per agreed credit terms for verified B2B clients), we initiate processing within 3 to 7 business days. This includes material handling, quality checks, packing, and coordination with logistics partners.
                </p>
                <p className="text-gray-700 mb-4">
                  Orders placed on weekends or public holidays will be processed on the next business day.
                </p>
                <p className="text-gray-700">
                  Custom-cut, fabricated, or large-volume orders may require additional preparation time; our team will notify you accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Shipping Destinations & Delivery Timelines</h2>
                <p className="text-gray-700 mb-4">
                  We currently serve domestic destinations across India through trusted courier and freight providers. For export inquiries, please contact our team directly.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Domestic Shipping (India):</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><span className="font-medium">Metro Cities:</span> 5–10 business days after dispatch</li>
                  <li><span className="font-medium">Non-Metro / Industrial / Rural Areas:</span> 7–14 business days after dispatch</li>
                </ul>
                <p className="text-gray-700 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  ⏳ <span className="font-medium">Note:</span> Delivery timelines are estimates and may vary due to third-party logistics, regional conditions, or transport regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Shipping Charges</h2>
                <p className="text-gray-700 mb-4">
                  Shipping costs depend on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Destination</li>
                  <li>Total weight and volume of the order (steel materials are heavy and bulky)</li>
                  <li>Shipping method (courier, freight, full truckload, etc.)</li>
                </ul>
                <p className="text-gray-700">
                  All shipping charges will be transparently communicated during quotation or checkout.
                </p>
                <p className="text-gray-700 mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  🚚 <span className="font-medium">Special Freight Terms:</span> For large orders, we can coordinate FOB, CIF, or custom logistics upon request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Tracking Your Order</h2>
                <p className="text-gray-700 mb-4">
                  Upon dispatch, we will provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>A tracking number or consignment note via email, SMS, or WhatsApp</li>
                  <li>Updates on shipping status through our support team</li>
                  <li>Assistance with direct freight tracking if applicable</li>
                </ul>
                <p className="text-gray-700">
                  Please allow 24–48 hours for tracking to activate after dispatch.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Delays & Exceptions</h2>
                <p className="text-gray-700 mb-4">
                  While we work hard to ensure timely delivery, delays can occur due to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Weather disruptions or natural disasters</li>
                  <li>Regional transport restrictions</li>
                  <li>Public holidays, strikes, or industrial shutdowns</li>
                  <li>Third-party carrier issues</li>
                </ul>
                <p className="text-gray-700">
                  In such cases, our team will proactively update you with revised estimates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Wholesale & Bulk Shipping</h2>
                <p className="text-gray-700 mb-4">
                  For B2B clients and bulk buyers, we offer:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Customized shipping and delivery coordination</li>
                  <li>Assistance with export documentation (if applicable)</li>
                  <li>Flexible logistics discussions (FOB/CIF terms, third-party pickup, etc.)</li>
                </ul>
                <p className="text-gray-700">
                  Please contact our team for tailored solutions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Need Help With Your Shipment?</h2>
                <p className="text-gray-700 mb-6">
                  Our support team is here to assist with any shipping queries:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">📧 Email:</span>{' '}
                    <a href="mailto:info@thangamsteelcompany.online" className="text-blue-600 hover:underline">
                      info@thangamsteelcompany.online
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">📧 Alternate Email:</span>{' '}
                    <a href="mailto:thangamsteelcompany93@gmail.com" className="text-blue-600 hover:underline">
                      thangamsteelcompany93@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">📞 Phone / WhatsApp:</span>{' '}
                    <a href="tel:+919578009226" className="text-blue-600 hover:underline">
                      +91 95780 09226
                    </a>
                  </p>
                  <p className="text-gray-700 mt-4">
                    You can also reach us through our <a href="/contact" className="text-blue-600 hover:underline font-medium">Contact Us</a> page for further assistance.
                  </p>
                </div>
                <p className="text-gray-700 mt-8">
                  Thank you for choosing Thangam Steels. We appreciate your trust and are committed to delivering a smooth and reliable shipping experience.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
