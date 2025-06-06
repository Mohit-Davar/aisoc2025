"use client";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Plus } from "lucide-react";

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
                    <Plus fontWeight="bold"/>
                </div>
                <span>
                    Projects
                </span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center">
                    <NumberTicker
                        value={25}
                        startValue={10}
                        className="font-grotesk text-white"
                    />
                    <Plus fontWeight="bold"/>
                </div>
                <span>
                    Teams
                </span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center">
                    <NumberTicker
                        value={100}
                        startValue={85}
                        className="font-grotesk text-white"
                    />
                    <Plus fontWeight="bold"/>
                </div>
                <span>
                    Students
                </span>
            </div>
        </div>
    );
}