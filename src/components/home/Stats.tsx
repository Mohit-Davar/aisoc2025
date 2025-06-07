"use client";
import { Plus } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); // trigger a bit early

    return (
        <div
            ref={ref}
            className="flex flex-wrap justify-evenly items-center gap-10 sm:gap-0 bg-orange py-10 min-h-40 font-inter text-white text-4xl"
        >
            {[
                { label: "Projects", value: 20, start: 5 },
                { label: "Proposals", value: 35, start: 20 },
                { label: "Students", value: 100, start: 85 },
            ].map(({ label, value, start }, index) => (
                <motion.div
                    key={label}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex items-center">
                        <NumberTicker
                            value={value}
                            startValue={start}
                            className="font-grotesk text-white"
                        />
                        <Plus fontWeight="bold" />
                    </div>
                    <span>{label}</span>
                </motion.div>
            ))}
        </div>
    );
}