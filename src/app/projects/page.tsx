import React from 'react'
import { Projects } from '@/components/ui/tech-stack'
import { Navbar } from '@/components/ui/resizable-navbar';
import { Footer } from '@/components/Footer';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

const aisocProjects = [
    {
        title: "RAG-Based Chatbot for PU Campus Website",
        description: "AI chatbot using RAG to answer admissions queries from PU's massive website. Enhances accessibility through conversational UI. Scalable to academics and research content.",
        techStack: [
            { name: "Next.js", url: "https://nextjs.org", color: "#F472B6" },
            { name: "Langchain", url: "https://www.langchain.com", color: "#7C3AED" },
            { name: "LlamaIndex", url: "https://www.llamaindex.ai", color: "#FBBF24" },
            { name: "Node.js", url: "https://nodejs.org", color: "#68A063" },
            { name: "ChromaDB", url: "https://www.trychroma.com", color: "#38BDF8" },
        ]
    },
    {
        title: "Acoustic Event Detection Smart App",
        description: "Privacy-first app for detecting sounds like sirens or alarms. Uses edge AI models for real-time classification. Inspired by the DCASE challenge.",
        techStack: [
            { name: "TensorFlow Lite", url: "https://www.tensorflow.org/lite", color: "#FF6F00" },
            { name: "React Native", url: "https://reactnative.dev", color: "#61DAFB" },
            { name: "Edge Impulse", url: "https://www.edgeimpulse.com", color: "#14B8A6" },
            { name: "FastAPI", url: "https://fastapi.tiangolo.com", color: "#06B6D4" },
            { name: "Firebase", url: "https://firebase.google.com", color: "#FFCA28" },
        ]
    },
    {
        title: "CCTV & Gait Analyzer for Smart Surveillance",
        description: "Computer vision system to detect safety gear & analyze gait from CCTV. Supports real-time alerts and natural language queries. Designed for industrial safety.",
        techStack: [
            { name: "YOLOv8", url: "https://github.com/ultralytics/ultralytics", color: "#E879F9" },
            { name: "FastAPI", url: "https://fastapi.tiangolo.com", color: "#06B6D4" },
            { name: "OpenCV", url: "https://opencv.org", color: "#A855F7" },
            { name: "React.js", url: "https://reactjs.org", color: "#61DAFB" },
            { name: "Docker", url: "https://www.docker.com", color: "#0EA5E9" },
        ]
    },
    {
        title: "Indoor BLE Landmark Navigation",
        description: "BLE-based indoor navigation for visually impaired users. Combines signal analysis with accessibility UI. Designed for spaces like malls and universities.",
        techStack: [
            { name: "Flutter", url: "https://flutter.dev", color: "#02569B" },
            { name: "Firebase", url: "https://firebase.google.com", color: "#FFCA28" },
            { name: "Node.js", url: "https://nodejs.org", color: "#68A063" },
            { name: "Raspberry Pi", url: "https://www.raspberrypi.com", color: "#B91C1C" },
            { name: "Kalman Filter", url: "https://en.wikipedia.org/wiki/Kalman_filter", color: "#22C55E" },
        ]
    },
    {
        title: "Thermal Imaging for Bacterial Growth",
        description: "Tracks bacterial growth using thermal sensors. Uses vision models to detect bioheat patterns. Useful for labs and healthcare diagnostics.",
        techStack: [
            { name: "OpenCV", url: "https://opencv.org", color: "#A855F7" },
            { name: "TensorFlow", url: "https://www.tensorflow.org", color: "#FF6F00" },
            { name: "Streamlit", url: "https://streamlit.io", color: "#EF4444" },
            { name: "FastAPI", url: "https://fastapi.tiangolo.com", color: "#06B6D4" },
            { name: "React.js", url: "https://reactjs.org", color: "#61DAFB" },
        ]
    },
    {
        title: "Night-Time Traffic & Vehicle Monitoring",
        description: "Vision system to detect vehicles in low-light using enhanced video input. Identifies number plates and vehicle types. Supports smart city use cases.",
        techStack: [
            { name: "YOLOv8", url: "https://github.com/ultralytics/ultralytics", color: "#E879F9" },
            { name: "OpenCV", url: "https://opencv.org", color: "#A855F7" },
            { name: "Flask", url: "https://flask.palletsprojects.com", color: "#F97316" },
            { name: "Python", url: "https://python.org", color: "#FFD43B" },
            { name: "React.js", url: "https://reactjs.org", color: "#61DAFB" },
        ]
    },
    {
        title: "Offline Speech-to-Text Models",
        description: "Builds low-latency STT for mobile and edge. Evaluates models like Vosk and Coqui STT. Prioritizes privacy and offline capability.",
        techStack: [
            { name: "Vosk", url: "https://alphacephei.com/vosk", color: "#34D399" },
            { name: "Whisper", url: "https://github.com/openai/whisper", color: "#F472B6" },
            { name: "Streamlit", url: "https://streamlit.io", color: "#EF4444" },
            { name: "ONNX Runtime", url: "https://onnxruntime.ai", color: "#9333EA" },
            { name: "Python", url: "https://python.org", color: "#FFD43B" },
        ]
    },
    {
        title: "Unified API System for DIC Projects",
        description: "Creates reusable public APIs for DIC tools. Standardizes access to models and datasets. Enables collaboration and integration.",
        techStack: [
            { name: "FastAPI", url: "https://fastapi.tiangolo.com", color: "#06B6D4" },
            { name: "Docker", url: "https://www.docker.com", color: "#0EA5E9" },
            { name: "PostgreSQL", url: "https://www.postgresql.org", color: "#4F46E5" },
            { name: "Swagger", url: "https://swagger.io", color: "#10B981" },
            { name: "Python", url: "https://python.org", color: "#FFD43B" },
        ]
    },
    {
        title: "Multi-Modal Attendance System",
        description: "Combines face, voice, and location data for attendance. Encourages ethical hacking to test security. Designed for high-integrity access systems.",
        techStack: [
            { name: "OpenCV", url: "https://opencv.org", color: "#A855F7" },
            { name: "Firebase", url: "https://firebase.google.com", color: "#FFCA28" },
            { name: "Python", url: "https://python.org", color: "#FFD43B" },
            { name: "Flask", url: "https://flask.palletsprojects.com", color: "#F97316" },
            { name: "Android", url: "https://developer.android.com", color: "#3DDC84" },
        ]
    },
    {
        title: "Redesigning PUIC & DIC Websites",
        description: "Rebuilds official PU websites with modern design principles. Focus on performance, accessibility, and UX. Great project for web design learners.",
        techStack: [
            { name: "Next.js", url: "https://nextjs.org", color: "#F472B6" },
            { name: "Tailwind CSS", url: "https://tailwindcss.com", color: "#38BDF8" },
            { name: "Figma", url: "https://www.figma.com", color: "#A855F7" },
            { name: "GitHub", url: "https://github.com", color: "#181717" },
            { name: "Netlify", url: "https://www.netlify.com", color: "#00C7B7" },
        ]
    },
    {
        title: "AISOC Design Track",
        description: "Non-coding design challenge for creative problem solvers. Focuses on visual thinking, mockups, and branding. Involves real-world and fictional UI projects.",
        techStack: [
            { name: "Figma", url: "https://www.figma.com", color: "#A855F7" },
            { name: "Canva", url: "https://www.canva.com", color: "#00C4CC" },
            { name: "Adobe XD", url: "https://adobe.com/products/xd.html", color: "#FF61F6" },
            { name: "Miro", url: "https://miro.com", color: "#FFD43B" },
            { name: "Framer", url: "https://www.framer.com", color: "#2563EB" },
        ]
    },
];

export default function Project() {
    return (
        <>
            <Navbar />
            <div className='pt-20 font-inter'>
                <SmoothCursor />
                <h1 className='px-4 font-grotesk text-orange text-4xl text-center'>
                    See what Interests you
                </h1>
                <Projects projects={aisocProjects} />
            </div>
            <Footer />
        </>
    )
}