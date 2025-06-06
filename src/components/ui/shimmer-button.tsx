'use client';
import { ReactNode } from "react";
import "./styles/shimmerButton.css";
export const ShimmerButton = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex justify-center items-center">
            <button
                className="bubbleeffectbtn"
                type="button"
            >
                <span className="font-medium text-sm">{children}</span>
            </button>
        </div>
    );
};