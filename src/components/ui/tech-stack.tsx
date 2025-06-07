'use client'
import React, { useRef, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { LinkPreview } from "@/components/ui/link-preview";

interface Tech {
    name: string;
    url: string;
    color: string;
}

interface Project {
    title: string;
    description: string;
    techStack: Tech[];
}

interface ProjectsProps {
    projects: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const controls = useAnimation();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => controls.start({ opacity: 1 });
    const handleMouseLeave = () => controls.start({ opacity: 0 });

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative bg-black shadow-lg pb-3 rounded-lg w-72 h-80 overflow-hidden"
        >
            <motion.div
                className="absolute -inset-px rounded-3xl pointer-events-none"
                animate={controls}
                transition={{ duration: 0.5 }}
                style={{
                    background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,.25), transparent 20%)`,
                }}
            />
            <div className="z-10 relative flex flex-col justify-between p-6 text-white">
                <div className="flex flex-col gap-2 mb-5">
                    <p className="font-grotesk font-medium text-orange">{project.title}</p>
                    <p className="text-sm">
                        {project.description.split(" ").slice(0, 20).join(" ") + "..."}
                    </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                        <LinkPreview key={idx} url={tech.url}>
                            <div className="inline-flex items-center hover:bg-white/10 px-2.5 py-0.5 border border-zinc-800 rounded-full focus:outline-none text-white text-xs transition-colors">
                                <div className="mr-2 rounded-full w-2 h-2" style={{ backgroundColor: tech.color }}></div>
                                {tech.name}
                            </div>
                        </LinkPreview>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className="flex flex-wrap justify-center gap-6 py-10">
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </div>
    );
};