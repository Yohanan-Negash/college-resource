import React from 'react';
import { ChevronRight } from 'lucide-react';

const faqData = [
    {
        question: "How does the waitlist work?",
        answer: "Once you join our waitlist, you'll receive a confirmation email. When we launch the beta version, the first 1,000 waitlist members will receive exclusive access to the platform. We'll notify you via email with instructions to set up your account."
    },
    {
        question: "When will the platform launch?",
        answer: "We're currently in the final stages of development. Beta access will be rolled out in early 2024. Waitlist members will be the first to know and get priority access."
    },
    {
        question: "What makes CollegeResource different from other platforms?",
        answer: "We focus on the complete journey, not just job applications. From freshman year guidance to senior year job hunting, we provide personalized roadmaps, insider knowledge, and direct access to opportunities you won't find elsewhere."
    },
    {
        question: "Is it really free?",
        answer: "Yes! Beta users (first 1,000 waitlist members) will receive lifetime access to all premium features completely free. No hidden fees, no credit card required."
    },
    {
        question: "What kind of support will I receive?",
        answer: "You'll get access to our smart notification system, expert-designed templates, exclusive events, and a supportive community. Beta users also receive priority support from our team."
    },
    {
        question: "What if I'm not a CS student?",
        answer: "While our initial focus is on tech careers, our strategies and resources are valuable for any student looking to break into the tech industry, regardless of their major."
    },
    {
        question: "How will I know when the platform launches?",
        answer: "All waitlist members will receive email updates about our progress and launch timeline. When we're ready to launch, you'll receive detailed instructions on how to access your account."
    },
    {
        question: "Can I share my access with others?",
        answer: "Beta access is individual and tied to your email address. However, we encourage you to tell your friends to join the waitlist to secure their own spot."
    }
];

const FAQ = () => {
    return (
        <div className="mt-32 pb-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">Have Questions?</h2>
                <p className="text-zinc-300 text-center mb-10">
                    Find answers to commonly asked questions about CollegeResource
                </p>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#2A2D3E]/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all overflow-hidden"
                        >
                            <button
                                className="w-full p-6 text-left flex justify-between items-center"
                                onClick={() => {
                                    const el = document.getElementById(`faq-${index}`);
                                    const isExpanded = el.style.maxHeight !== "0px" && el.style.maxHeight !== "";
                                    el.style.maxHeight = isExpanded ? "0px" : `${el.scrollHeight}px`;
                                }}
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                <ChevronRight className="w-5 h-5 transform transition-transform" />
                            </button>
                            <div
                                id={`faq-${index}`}
                                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                                style={{ maxHeight: "0px" }}
                            >
                                <p className="px-6 pb-6 text-zinc-300">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;