"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
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
  content,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const cardElements = Array.from(
        sectionRef.current.querySelectorAll(".card-section")
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
      ref={sectionRef}
      className="flex gap-10 lg:mx-auto p-10 lg:max-w-5xl"
    >
      {/* Left Text Content - slide in from left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.3, ease: "linear" }}
        className="space-y-20 max-w-3xl lg:text-left text-center"
      >
        {content.map((item, index) => (
          <div key={`${item.title}-${index}`} className="card-section">
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
      </motion.div>

      {/* Right Sticky Component - slide in from right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
        className={cn(
          "sticky top-32 hidden h-60 bg-slate-900 w-full overflow-hidden transition-all duration-300 lg:block",
          contentClassName
        )}
      >
        <AnimatePresence mode="wait">
          {activeComponent && (
            <motion.div
              key={activeCard}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeComponent}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
