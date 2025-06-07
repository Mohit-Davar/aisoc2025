'use client';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/ui/resizable-navbar';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { FormEvent } from 'react';

export default function Contact() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        console.log({ name, email, message });
        event.currentTarget.reset();
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center px-4 py-20 min-h-screen font-inter">
                <div className="relative bg-white shadow-lg rounded-2xl w-full max-w-lg">
                    {/* Background layer */}
                    <div className="hidden sm:block z-0 absolute inset-0 bg-orange rounded-2xl rotate-6 transform"></div>
                    <div className='z-20 relative bg-white sm:p-10 px-4 py-10 rounded-2xl'>
                        <h2 className="z-10 relative flex flex-col font-semibold text-gray-800 text-xl">
                            <span className="font-grotesk font-bold text-orange text-2xl text-center">Contact Us</span>
                            <span className='w-full text-sm text-center'>
                                Fill in your message & contact info.
                            </span>
                        </h2>

                        <form onSubmit={handleSubmit} className="z-10 relative space-y-5 mt-6">
                            <div>
                                <label htmlFor="name" className="block font-medium text-gray-700 text-sm">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Type your name"
                                    className="bg-gray-100 mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 w-full text-black sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-medium text-gray-700 text-sm">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Type your email"
                                    className="bg-gray-100 mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 w-full text-black sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-medium text-gray-700 text-sm">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Type your message"
                                    className="bg-gray-100 mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 w-full text-black sm:text-sm resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full">
                                <ShimmerButton>Send Message</ShimmerButton>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}