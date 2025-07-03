import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const SITE_URL = 'https://thangamsteelcompany.online';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Privacy Policy | Thangam Steels - Your Data Protection',
  description: 'Learn how Thangam Steels protects your personal information and privacy. Our commitment to data security and your rights under Indian IT Act and GDPR.',
  openGraph: {
    title: 'Privacy Policy | Thangam Steels - Your Data Protection',
    description: 'Learn how Thangam Steels protects your personal information and privacy. Our commitment to data security and your rights under Indian IT Act and GDPR.',
    url: '/privacy-policy',
    siteName: 'Thangam Steels',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Thangam Steels - Your Data Protection',
    description: 'Learn how Thangam Steels protects your personal information and privacy.',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 md:pt-36">
        <div className="container mx-auto px-4 pb-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-4">
              PRIVACY POLICY
            </h1>
            <div className="w-24 h-1.5 bg-safety-yellow mx-auto mb-8"></div>
            <p className="text-gray-700 text-xl">
              Your Privacy is Our Priority
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">

            <div className="space-y-8">
              <section>
                <p className="text-gray-700 mb-6">
                  At Thangam Steels, your privacy is of utmost importance. We are dedicated to safeguarding the personal information you share and ensuring it is handled with the highest standards of security, transparency, and compliance—aligned with the Indian IT Act and internationally recognized data protection frameworks such as the GDPR.
                </p>
                <p className="text-gray-700">
                  This Privacy Policy outlines what information we collect, how we use it, how we protect it, and your rights when interacting with our website, products, and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  When you browse our site, request a quotation, place an order, contact us for B2B partnerships, or subscribe to updates, we may collect the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Shipping & Billing Address</li>
                  <li>Payment Details (processed via secure third-party gateways)</li>
                  <li>Order History & Purchase Preferences</li>
                  <li>Company/Business Information (for B2B clients)</li>
                  <li>Device & Browser Information</li>
                  <li>Cookies and Tracking Data (for analytics and performance)</li>
                </ul>
                <p className="text-gray-700">
                  We collect only what is necessary to provide you with a seamless experience related to our steel products and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Why We Collect Your Information</h2>
                <p className="text-gray-700 mb-4">
                  Your data is collected and used solely for legitimate business purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Processing orders and managing deliveries</li>
                  <li>Communicating quotations, invoices, and shipment updates</li>
                  <li>Providing customer service and B2B account support</li>
                  <li>Managing your account or purchase preferences</li>
                  <li>Sending optional promotional updates (only if you opt in)</li>
                  <li>Analyzing website performance and user behavior (aggregated/anonymized)</li>
                  <li>Enhancing our product offerings and online platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">How Your Information is Protected</h2>
                <p className="text-gray-700 mb-4">
                  We implement strong security measures to ensure your data remains safe and confidential:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><span className="font-medium">SSL Encryption:</span> All interactions with our website are secured using SSL technology.</li>
                  <li><span className="font-medium">Payment Security:</span> Payments are processed through PCI-compliant third-party providers. We do not store your payment data.</li>
                  <li><span className="font-medium">Server Protection:</span> Our servers are protected with firewalls, access restrictions, and periodic security reviews.</li>
                  <li><span className="font-medium">Controlled Access:</span> Only authorized personnel handle sensitive data under strict internal protocols.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Your Rights & Choices</h2>
                <p className="text-gray-700 mb-4">
                  You have full control over your personal data. At any time, you can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Request access to the information we hold about you</li>
                  <li>Ask for updates or corrections to your information</li>
                  <li>Request deletion of your data (subject to legal obligations)</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Report concerns about data usage or privacy</li>
                </ul>
                <p className="text-gray-700">
                  To exercise your rights, contact us using the details below. We aim to respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions, concerns, or requests about this Privacy Policy or our data practices, please contact our Data Protection Officer:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-medium text-gray-900">Thangam Steels Pvt. Ltd.</p>
                  <p className="text-gray-700">Attn: Data Protection Officer</p>
                  <p className="text-gray-700">14-A, Batalagundu Road,</p>
                  <p className="text-gray-700">Dindigul, Tamil Nadu - 624002, India</p>
                  <p className="mt-4">
                    <span className="font-medium text-gray-900">Email:</span>{' '}
                    <a href="mailto:info@thangamsteelcompany.online" className="text-blue-600 hover:underline">
                      info@thangamsteelcompany.online
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Alternate Email:</span>{' '}
                    <a href="mailto:thangamsteelcompany93@gmail.com" className="text-blue-600 hover:underline">
                      thangamsteelcompany93@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Phone:</span>{' '}
                    <a href="tel:+919578009226" className="text-blue-600 hover:underline">
                      +91 95780 09226
                    </a>
                  </p>
                </div>
                <p className="text-gray-700 mt-6">
                  We take your privacy concerns seriously and will investigate any complaints received. If you are unsatisfied with our response, you have the right to contact your local data protection authority.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Policy Updates</h2>
                <p className="text-gray-700">
                  We may revise this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on this page with a new "Last Revised" date.
                </p>
                <p className="text-gray-700 mt-4 font-medium">
                  Last Revised: July 3, 2025
                </p>
                <p className="text-gray-700 mt-6">
                  Thank you for trusting Thangam Steels. We are committed to protecting your privacy and providing a secure online experience.
                </p>
                <p className="text-gray-700 mt-8 text-center">
                  © 2025 Thangam Steels. All rights reserved.
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
