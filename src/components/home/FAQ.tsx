import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import PageHeading from '../ui/page-heading';

const FAQs = [
    {
        "question": "Who can participate in AISOC?",
        "answer": "AISOC is open to all students passionate about software development, AI, or solving real-world problems regardless of academic background or year."
    },
    {
        "question": "Do I need prior experience?",
        "answer": "Not at all! We welcome both beginners and experienced developers. Mentorship and guidance will be provided throughout the program."
    },
    {
        "question": "How do I apply to AISOC?",
        "answer": "You can apply by submitting a project proposal once applications open. Make sure to follow the guidelines and choose a project that excites you."
    },
    {
        "question": "Is this only about coding?",
        "answer": "Not at all!! AISOC values design, research, and problem-solving just as much as writing code."
    },
    {
        "question": "How long does the program last?",
        "answer": "The program runs over the summer, typically for 6 weeks, with clearly defined phases for onboarding, development, and final submission."
    }
]

export function FAQ() {
    return (
        <div className='px-5'>
            <PageHeading
                smallHeading='FAQs'
                bigHeading='Frequently Asked Questions'
            />
            <Accordion className='flex flex-col mx-auto mt-10 max-w-3xl'>
                {FAQs.map((faq, idx) => (
                    <AccordionItem
                        key={idx}
                        value={`faq-${idx}`}
                        className="mb-2 border-2 border-orange rounded-lg"
                    >
                        <AccordionTrigger className='p-4 w-full font-grotesk text-orange sm:text-lg text-left cursor-pointer'>
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="bg-orange p-4 font-inter text-white text-sm sm:text-base">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}