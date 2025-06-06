"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export type StickyContentItem = {
  title: string;
  description: string;
  component: React.ReactElement;
};

interface StickyScrollProps {
  contentClassName?: string;
  content: StickyContentItem[];
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  contentClassName,
  content
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const cardElements = Array.from(
        ref.current.querySelectorAll(".card-section")
      ) as HTMLElement[];

      const middleY = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(middleY - elementMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeComponent = content[activeCard]?.component;

  return (
    <div
      className="flex justify-center gap-10 lg:mx-auto p-10 lg:max-w-5xl"
      ref={ref}
    >
      {/* Left Text Content */}
      <div className="space-y-20 max-w-3xl lg:text-left text-center">
        {content.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="card-section"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
              className="font-grotesk font-bold text-orange-600 sm:text-2xl"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
              className="mt-5 max-w-sm font-inter text-slate-800 text-sm sm:text-base"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Right Sticky Box with animated component */}
      <div
        className={cn(
          "sticky top-32 hidden h-60 bg-slate-900 w-full overflow-hidden transition-all duration-300 lg:block",
          contentClassName
        )}
      >
        <AnimatePresence mode="wait">
          {activeComponent && (
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeComponent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};