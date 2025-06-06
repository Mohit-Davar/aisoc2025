"use client";
import { Plus } from 'lucide-react';

import { NumberTicker } from '@/components/ui/number-ticker';

export function Stats() {
    return (
        <div className="flex flex-wrap justify-evenly items-center gap-10 sm:gap-0 bg-orange py-10 min-h-40 font-inter text-white text-4xl">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center">
                    <NumberTicker
                        value={20}
                        startValue={5}
                        className="font-grotesk text-white"
                    />
                    <Plus fontWeight="bold" />
                </div>
                <span>
                    Projects
                </span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center">
                    <NumberTicker
                        value={35}
                        startValue={20}
                        className="font-grotesk text-white"
                    />
                    <Plus fontWeight="bold" />
                </div>
                <span>
                    Proposals
                </span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center">
                    <NumberTicker
                        value={100}
                        startValue={85}
                        className="font-grotesk text-white"
                    />
                    <Plus fontWeight="bold" />
                </div>
                <span>
                    Students
                </span>
            </div>
        </div>
    );
}