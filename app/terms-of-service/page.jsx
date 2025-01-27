import React from 'react';
import Link from 'next/link';

const TermsOfServicePage = () => {
  const activeDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='min-h-screen bg-[#1C1F2E] text-white p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Terms of Service
        </h1>
        <p className='text-center text-gray-400 mb-8'>
          Active as of {activeDate}
        </p>

        <div className='space-y-6'>
          <p>
            Welcome to PhazeOne. By using our service, you agree to these terms.
            Please read them carefully.
          </p>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using PhazeOne, you agree to be bound by these
              Terms of Service and all applicable laws and regulations. If you
              do not agree with any part of these terms, you may not use our
              service.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              2. Description of Service
            </h2>
            <p>
              PhazeOne is a platform designed to provide information and
              resources for computer science students looking to enter the tech
              industry. Our service includes, but is not limited to, educational
              content, industry insights, and career guidance.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              3. User Responsibilities and Accounts
            </h2>
            <p>
              To use our platform, you will be required to create a user
              account. You are responsible for maintaining the confidentiality
              of your account and password, including but not limited to
              restricting access to your computer and/or account. You agree to
              accept responsibility for all activities that occur under your
              account or password. You must immediately notify PhazeOne of any
              unauthorized use of your account or any other breach of security.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              4. Content and Liability Disclaimer
            </h2>
            <p>
              The content provided through PhazeOne is for informational
              purposes only. We strive to keep the information up to date and
              accurate, but we make no representations or warranties of any
              kind, express or implied, about the completeness, accuracy,
              reliability, suitability or availability of the information
              contained on the platform.
            </p>
            <p className='mt-2'>
              It is important to note that many of the resources, links, and
              information provided on PhazeOne are curated from various sources
              and are not original content created by us. We do not claim
              ownership of these external resources. Users should refer to the
              original sources for specific terms of use and attribution.
            </p>
            <p className='mt-2'>
              PhazeOne shall not be held liable for any direct, indirect,
              consequential, or incidental damages arising from the use or
              inability to use our service or any content provided. Users rely
              on the information at their own risk.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              5. Prohibited Activities
            </h2>
            <p>
              You agree not to engage in any of the following prohibited
              activities: (1) copying, distributing, or disclosing any part of
              the service in any medium; (2) using any automated system to
              access the service; (3) transmitting spam, chain letters, or other
              unsolicited email; (4) attempting to interfere with or compromise
              the system integrity or security; (5) using the service for any
              illegal or unauthorized purpose.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              6. Termination
            </h2>
            <p>
              We reserve the right to terminate your access to our platform at
              any time, without notice, if you violate these terms and
              conditions. Upon termination, your right to use the service will
              immediately cease.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              7. Changes to Terms
            </h2>
            <p>
              We may modify these terms and conditions at any time, without
              notice. Your continued use of our platform after such
              modifications will constitute your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              8. Email Communications
            </h2>
            <p>
              By using our service, you agree that we have the ability to
              collect your email address and send you product updates as well as
              promotional content. You can opt out of receiving promotional
              emails at any time by following the unsubscribe instructions
              provided in the emails.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2 text-purple-400'>
              9. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at
              [Your Contact Email].
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

export default TermsOfServicePage;
