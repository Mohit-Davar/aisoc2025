'use client'
import { ShimmerButton } from '@/components/ui/shimmer-button';
import Link from 'next/link';
import { FormEvent } from 'react';

const SignUpForm = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email')
        const password = formData.get('password')
        console.log({ name, email, password });
        event.currentTarget.reset();
    };

    return (
        <div className="flex justify-center items-center bg-orange px-3 h-screen font-inter">
            <div className="z-50 space-y-8 bg-white shadow-md p-8 rounded sm:w-96">
                <h2 className="font-grotesk font-bold text-black text-2xl text-center">Welcome Back</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700 text-sm">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            autoComplete="email"
                            placeholder="Email address"
                            required
                            className="bg-gray-100 mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 w-full text-black sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium text-gray-700 text-sm">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Password"
                            required
                            className="bg-gray-100 mt-1 mb-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 w-full text-black sm:text-sm"
                        />
                    </div>
                    <div className='content-center grid'>
                        <button type='submit'>
                            <ShimmerButton>
                                Submit
                            </ShimmerButton>
                        </button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <span className="text-slate-600 text-sm">Do not have an account?
                        <Link
                            href="/signup"
                            className="ml-1 font-bold text-black text-sm hover:underline underline-offset-2">
                            Sign Up
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;