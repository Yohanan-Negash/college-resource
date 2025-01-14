import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const footerContent = {
    about: {
        description: "Empowering CS students to land their dream tech roles through personalized guidance and industry insights.",
    },
    sections: [
        {
            title: "Product",
            links: [
                { name: "Features", href: "#" },
                { name: "Roadmap", href: "#" },
                { name: "Beta Access", href: "#" },
                { name: "Pricing", href: "#" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", href: "/blog" },
                { name: "Guide", href: "#" },
                { name: "Career Tips", href: "#" },
                { name: "Success Stories", href: "#" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Contact", href: "#" },
                { name: "Partners", href: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy", href: "#" },
                { name: "Terms", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "License", href: "#" }
            ]
        }
    ],
    socials: [
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "LinkedIn", icon: Linkedin, href: "#" },
        { name: "GitHub", icon: Github, href: "#" },
        { name: "Instagram", icon: Instagram, href: "#" }
    ]
};

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-zinc-800 bg-[#1C1F2E]/50 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* About Section */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                CollegeResource
                            </Link>
                            <p className="mt-4 text-sm text-zinc-400 max-w-md">
                                {footerContent.about.description}
                            </p>
                            {/* Social Links */}
                            <div className="mt-6 flex space-x-4">
                                {footerContent.socials.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className="text-zinc-400 hover:text-white transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon className="h-5 w-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Navigation Sections */}
                        {footerContent.sections.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-sm font-semibold text-white">
                                    {section.title}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-zinc-400 hover:text-white transition-colors"
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

                {/* Copyright */}
                <div className="border-t border-zinc-800 py-8">
                    <p className="text-sm text-zinc-400 text-center">
                        © {new Date().getFullYear()} CollegeResource. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;