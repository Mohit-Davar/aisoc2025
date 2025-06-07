'use client';

import { Accordion } from '@/components/ui/accordion';
import PageHeading from '@/components/ui/page-heading';

const faqs = [
    {
        active: false,
        title: "Who can participate in AISOC?",
        text: "AISOC is open to all students passionate about solving real-world problems regardless of academic background or year."
    },
    {
        active: false,
        title: "Do I need prior experience?",
        text: "Not at all! We welcome both beginners and experienced developers. Mentorship and guidance will be provided throughout the program."
    },
    {
        active: false,
        title: "How do I apply to AISOC?",
        text: "You can apply by submitting a project proposal once applications open. Make sure to follow the guidelines and choose a project that excites you."
    },
    {
        active: false,
        title: "Is this only about coding?",
        text: "Not at all! AISOC values design, research, and problem-solving just as much as writing code."
    },
    {
        active: false,
        title: "How long does the program last?",
        text: "The program runs over the summer, typically for 6–8 weeks, with clearly defined phases for onboarding, development, and final submission."
    },
    {
        active: false,
        title: "What do I gain from participating?",
        text: "Real-world experience, a strong portfolio project, mentorship, and career opportunities."
    }
];

export function FAQ() {
    return (
        <main className="relative flex flex-col justify-center overflow-hidden">
            <PageHeading
                smallHeading="FAQs"
                bigHeading="Frequently Asked Questions"
            />
            <div className="space-y-4 mx-auto mt-10 px-4 md:px-6 w-full max-w-2xl">
                {faqs.map((faq, index) => {
                    return (
                        <Accordion key={faq.title} title={faq.title} id={index} active={faq.active}>
                            {faq.text}
                        </Accordion>
                    );
                })}
            </div>
        </main>
    );
}