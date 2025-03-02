import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  const activeDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='min-h-screen bg-[#1C1F2E] text-white p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Privacy Policy
        </h1>
        <p className='text-center text-gray-400 mb-8'>
          Active as of {activeDate}
        </p>

        <div className='space-y-6'>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our service.
          </p>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using our platform, you acknowledge that you have
              read, understood, and agree to be bound by this Privacy Policy and
              our Terms of Service. If you do not agree with these terms, please
              do not use our services.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              2. User Accounts
            </h2>
            <p>
              To use our platform, you must create a user account. You are
              responsible for maintaining the confidentiality of your account
              information and for all activities that occur under your account.
              We collect and store information associated with your account to
              provide and improve our services.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              3. Information Collection
            </h2>
            <p>
              We collect information that you provide directly to us, such as
              when you create an account, subscribe to our waitlist, or
              communicate with us. This may include your name, any type of email
              address, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              4. Use of Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className='list-disc pl-6 mt-2'>
              <li>Provide, maintain, and improve our services</li>
              <li>
                Send you technical notices, updates, security alerts, and
                support and administrative messages
              </li>
              <li>Respond to your comments, questions, and requests</li>
              <li>
                Communicate with you about products, services, offers,
                promotions, and events, and provide other news and information
                we think will be of interest to you
              </li>
              <li>
                Monitor and analyze trends, usage, and activities in connection
                with our services
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              5. Information Sharing and Disclosure
            </h2>
            <p>
              We do not share, sell, or otherwise disclose your personal
              information for purposes other than those outlined in this Privacy
              Policy. However, we may disclose aggregated information about our
              users, and information that does not identify any individual,
              without restriction.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              6. Data Security
            </h2>
            <p>
              We have implemented measures designed to secure your personal
              information from accidental loss and from unauthorized access,
              use, alteration, and disclosure. However, we cannot guarantee that
              unauthorized third parties will never be able to defeat those
              measures or use your personal information for improper purposes.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              7. Your Choices
            </h2>
            <p>
              You may opt out of receiving promotional emails from us by
              following the instructions in those emails. If you opt out, we may
              still send you non-promotional emails, such as those about your
              account or our ongoing business relations.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              8. Third-Party Resources
            </h2>
            <p>
              Our service includes links to third-party websites, resources, and
              services. This Privacy Policy does not apply to these external
              sites or services. We encourage you to review the privacy policies
              of any third-party sites or services before providing any personal
              information or using such services.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              9. Changes to Our Privacy Policy
            </h2>
            <p>
              We may modify these policies at any time, without notice. Your
              continued use of our platform after such modifications will
              constitute your acceptance of the policies.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at team@phazeone.tech.
            </p>
          </section>
        </div>

        <div className='mt-8 text-center'>
          <Link
            href='/'
            className='text-purple-400 hover:text-purple-300 transition-colors'
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
