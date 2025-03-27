import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const footerContent = {
  about: {
    description:
      'Empowering SWE students to land their dream tech roles through personalized guidance and industry insights.',
  },
  sections: [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Roadmap', href: '#' },
        { name: 'Beta Access', href: '#' },
        { name: 'Pricing', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Guide', href: '#' },
        { name: 'Career Tips', href: '#' },
        { name: 'Success Stories', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Partners', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'License', href: '#' },
      ],
    },
  ],
  socials: [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className='mt-16 border-t border-zinc-800'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='py-8 lg:py-12'>
          {/* Main Footer Content */}
          <div className='flex flex-col lg:flex-row lg:justify-between gap-8'>
            {/* Brand and About Section - Full width on mobile, left side on desktop */}
            <div className='lg:max-w-sm'>
              <Link
                href='/'
                className='font-ubuntu text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
              >
                PhazeOne
              </Link>
              <p className='font-ubuntu mt-4 text-sm text-zinc-400'>
                {footerContent.about.description}
              </p>
              {/* Social Links */}
              <div className='mt-4 flex space-x-4'>
                {footerContent.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className='text-zinc-400 hover:text-white transition-colors'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Icon className='h-5 w-5' />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Sections - Grid on mobile, flex on desktop */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12'>
              {footerContent.sections.map((section) => (
                <div key={section.title} className='min-w-[140px]'>
                  <h3 className='font-ubuntu text-sm font-semibold text-white mb-3'>
                    {section.title}
                  </h3>
                  <ul className='space-y-2'>
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className='font-ubuntu text-sm text-zinc-400 hover:text-white transition-colors'
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright - Smaller padding */}
        <div className='border-t border-zinc-800 py-6'>
          <p className='font-ubuntu text-sm text-zinc-400 text-center'>
            © 2025 PhazeOne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
