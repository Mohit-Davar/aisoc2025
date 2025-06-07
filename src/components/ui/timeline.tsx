"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subheading: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="bg-white md:px-10 w-full font-sans"
      ref={containerRef}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-10 py-10 max-w-7xl">
        <h2 className="mb-4 max-w-4xl font-grotesk font-bold text-orange text-lg md:text-4xl">
          AISOC 2025 Timeline
        </h2>
        <p className="max-w-md text-neutral-700 text-sm md:text-base">
          Your roadmap to open-source impact.
          Follow the key milestones to make the most of your journey - from proposal to project completion.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto pb-20 max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start md:gap-10 pt-10"
          >
            <div className="top-40 z-40 sticky flex md:flex-row flex-col self-start md:w-full max-w-xs lg:max-w-lg">
              <div className="left-3 md:left-3 absolute flex justify-center items-center bg-white rounded-full w-10 h-10">
                <div className="bg-neutral-200 p-2 border border-neutral-300 rounded-full w-4 h-4" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="block pl-20 font-grotesk font-bold text-orange text-xl md:text-5xl">
                  {item.title}
                </h3>
                <p className="block pl-20">
                  {item.subheading}
                </p>
                <div className="relative pr-4 pl-20 w-full max-w-sm">
                  {item.content}{" "}
                </div>
              </div>
            </div>

          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="top-0 left-8 md:left-8 absolute bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-[0%] from-transparent via-neutral-200 to-[99%] to-transparent w-[2px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="-top-10 absolute inset-x-0 bg-gradient-to-t from-[0%] from-orange-500 via-[10%] via-orange-200 to-transparent rounded-full w-[2px]"
          />
        </div>
      </div>
    </div>
  );
};
