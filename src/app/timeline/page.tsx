import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Navbar } from "@/components/ui/resizable-navbar";
import { Footer } from "@/components/Footer";
import { SideTerminal } from "@/components/timeline/terminal";

export default function TimelineDemo() {
    const data = [
        {
            title: "May 12 2025",
            subheading: "Announcement",
            content: (
                <div>
                    <p className="mb-8 font-normal text-neutral-800 text-sm">
                        AISOC 2025 officially launches with problem statements, mentors, and partner organizations.
                    </p>
                </div>
            ),
        },
        {
            title: "June 6 2025",
            subheading: "Proposal Deadline",
            content: (
                <div>
                    <p className="mb-8 font-normal text-neutral-800 text-sm">
                        Submit your project proposals with objectives, timelines, and implementation plans before the deadline.
                    </p>
                </div>
            ),
        },
        {
            title: "June 10 2025",
            subheading: "Results Announcement",
            content: (
                <div>
                    <p className="mb-8 font-normal text-neutral-800 text-sm">
                        Selected students will be notified and assigned mentors to start their open-source projects.
                    </p>
                </div>
            )
        },
        {
            title: "July 15 2025",
            subheading: "Final Submission",
            content: (
                <div>
                    <p className="mb-8 font-normal text-neutral-800 text-sm">
                        Participants must submit their completed projects, documentation, and final deliverables.
                    </p>
                </div>
            ),
        }
    ];

    return (
        <>
            <Navbar />
            <div className="flex md:flex-row flex-col justify-between items-start gap-10 mx-auto px-4 py-20 w-full max-w-7xl">
                <div className="w-full md:w-1/2">
                    <Timeline data={data} />
                </div>

                <div className="hidden md:block top-32 sticky w-full md:w-1/2">
                    <SideTerminal />
                </div>
            </div>
            <Footer />
        </>
    );
}