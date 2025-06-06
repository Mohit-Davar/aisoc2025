"use client";
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

import { HeroHighlight } from '@/components/ui/hero-highlight';
import InfoButton from '@/components/ui/info-button';
import { ShimmerButton } from '@/components/ui/shimmer-button';

export function HeroSection() {
    return (
        <HeroHighlight>
            <div className="relative flex flex-col justify-center items-center mx-auto px-4 py-10 md:py-20 max-w-7xl min-h-screen font-inter text-neutral-600 dark:text-neutral-400">
                <InfoButton />
                <h1 className="z-10 relative mx-auto mt-4 sm:max-w-2xl font-bold text-cente text-orange text-3xl md:text-4xl lg:text-7xl text-center">
                    {"Build solutions that matter"
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: index * 0.1,
                                    ease: "easeIn",
                                }}
                                className="inline-block mr-2 font-grotesk"
                            >
                                {word}
                            </motion.span>
                        ))}
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.6,
                    }}
                    className="z-10 relative mx-auto py-4 max-w-xl text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-lg text-center"
                >
                    Collaborate with industry, researchers, and admins to solve real-world problems with mentorship, open challenges, and career-worthy projects.
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="z-10 relative flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-4 text-xs sm:text-sm"
                >
                    <div className="flex items-center gap-1">
                        <CheckCircle2 className="text-green-600" size={20} />
                        Real-world projects
                    </div>
                    <div className="flex items-center gap-1">
                        <CheckCircle2 className="text-green-600" size={20} />
                        Mentorship from industry
                    </div>
                    <div className="flex items-center gap-1">
                        <CheckCircle2 className="text-green-600" size={20} />
                        Build a portfolio that counts
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="z-10 relative flex flex-wrap justify-center items-center gap-4 mt-8"
                >
                    <ShimmerButton>
                        Get Started
                    </ShimmerButton>
                </motion.div>
            </div>
        </HeroHighlight>
    );
}