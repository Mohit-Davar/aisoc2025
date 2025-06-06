'use client';
import './styles/shimmerButton.css';

import { ReactNode } from 'react';

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