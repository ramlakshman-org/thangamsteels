import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const SITE_URL = 'https://thangamsteelcompany.online';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Cancellation & Refund Policy | Thangam Steels - Customer Support',
  description: 'Learn about our cancellation, return, and refund policies for Thangam Steels products and services. Understand your options for order modifications and returns.',
  openGraph: {
    title: 'Cancellation & Refund Policy | Thangam Steels - Customer Support',
    description: 'Learn about our cancellation, return, and refund policies for Thangam Steels products and services. Understand your options for order modifications and returns.',
    url: '/cancellation-refund',
    siteName: 'Thangam Steels',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation & Refund Policy | Thangam Steels - Customer Support',
    description: 'Learn about our cancellation, return, and refund policies for Thangam Steels products and services.',
  },
};

export default function CancellationRefundPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-4">
              CANCELLATION & REFUND POLICY
            </h1>
            <div className="w-24 h-1.5 bg-safety-yellow mx-auto mb-8"></div>
            <p className="text-gray-700 text-xl">
              Our Commitment to Fair and Transparent Policies
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-center mb-12">
              Last updated: July 2025
            </p>
            <p className="text-gray-700 mb-8">
              At Thangam Steels, we take great pride in delivering high-quality steel products and solutions to our customers across India. While we strive for perfection in every order, we understand that occasional issues may arise. This policy outlines our approach to cancellations, damages, and refunds in a transparent, business-first manner.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Order Cancellations</h2>
                <p className="text-gray-700 mb-4">
                  <span className="font-medium">Cancellation Window:</span> Within 2 hours of purchase or order confirmation
                </p>
                <p className="text-gray-700 mb-4">
                  You may request cancellation within 2 hours of placing your order, provided it has not yet been processed, packed, or handed over to our logistics partner.
                </p>
                <p className="text-gray-700 mb-6">
                  After your order has been packed, fabricated (if custom), or dispatched, cancellation is no longer possible due to the nature of steel product handling and logistics.
                </p>
                <p className="text-gray-700 font-medium mb-2">To cancel your order:</p>
                <p className="text-gray-700 mb-6">
                  Contact us via our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a>, WhatsApp, or support email with your Order ID and reason for cancellation.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
                  <p className="text-gray-700">
                    📌 <span className="font-medium">For urgent modifications or accidental orders,</span> please contact us immediately — we will do our best to assist before shipping begins.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Damaged or Defective Products</h2>
                <p className="text-gray-700 mb-4">
                  We follow strict quality checks. However, if you receive a product that is:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Damaged during transit</li>
                  <li>Contains manufacturing defects</li>
                  <li>Delivered with tampered packaging or quantity discrepancies</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Please notify us within 7 days of delivery.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6">
                  <p className="text-gray-700 font-medium mb-2">📎 To assist in quick resolution, please provide:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Order ID</li>
                    <li>Clear photos of the damage/issue</li>
                    <li>A brief description of the problem</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  After verification, we will coordinate replacement, credit note, or refund as appropriate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Returns & Service Satisfaction</h2>
                <p className="text-gray-700 mb-4">
                  Given the nature of steel products (heavy goods, custom sizes, industrial use), we do not offer returns on correctly delivered items unless there is a clear quality defect or service issue.
                </p>
                <p className="text-gray-700 mb-4">
                  If you believe your product does not meet the agreed specifications or quality standards, contact us within 7 days of receipt. Depending on the case, we may offer:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Replacement of the item</li>
                  <li>Store credit for future orders</li>
                  <li>Partial or full refund</li>
                </ul>
                <p className="text-gray-700">
                  All cases are reviewed fairly, with customer trust and business integrity in mind.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">B2B / Wholesale Orders</h2>
                <p className="text-gray-700 mb-4">
                  For bulk, industrial, or export orders, cancellation and refund terms will follow conditions outlined in your purchase agreement or quotation.
                </p>
                <p className="text-gray-700">
                  Please contact our support team or refer to your agreement for specific terms related to bulk returns and documentation requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Refund Processing</h2>
                <p className="text-gray-700 mb-4">
                  Once a refund is approved:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><span className="font-medium">Initiation:</span> Within 3–5 business days of confirmation</li>
                  <li><span className="font-medium">Refund Method:</span> Same payment mode used at checkout (credit card, UPI, bank transfer, etc.)</li>
                  <li><span className="font-medium">Clearing Time:</span> Typically 5–10 business days, depending on your bank or gateway</li>
                </ul>
                <p className="text-gray-700">
                  You'll receive confirmation via email or WhatsApp once processed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Exceptions</h2>
                <p className="text-gray-700 mb-4">
                  Refunds or replacements may not apply in cases such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Delays caused by natural disasters, regulatory holds, or logistics disruptions beyond our control</li>
                  <li>Products returned without prior approval or outside the valid reporting window</li>
                  <li>Items damaged due to improper handling or unauthorized modifications at the customer's site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Need Help?</h2>
                <p className="text-gray-700 mb-6">
                  Our team is here to support you with any order, shipping, or refund concerns:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">📞 Phone / WhatsApp:</span>{' '}
                    <a href="tel:+919578009226" className="text-blue-600 hover:underline">
                      +91 95780 09226
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">📧 Email:</span>{' '}
                    <a href="mailto:info@thangamsteelcompany.online" className="text-blue-600 hover:underline">
                      info@thangamsteelcompany.online
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">📧 Alternate Email:</span>{' '}
                    <a href="mailto:thangamsteelcompany93@gmail.com" className="text-blue-600 hover:underline">
                      thangamsteelcompany93@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-700 mt-4">
                    Or use the <a href="/contact" className="text-blue-600 hover:underline font-medium">Contact Form</a> on our website.
                  </p>
                </div>
                <p className="text-gray-700 mt-8">
                  Thangam Steels is committed to transparency, customer satisfaction, and service excellence. We value your trust and aim to resolve all genuine concerns promptly and fairly.
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
