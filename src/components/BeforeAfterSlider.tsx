"use client";

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
    beforeImage,
    afterImage,
    beforeLabel = "Before Treatment",
    afterLabel = "After Treatment",
    className = "",
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleMouseMove = (e: globalThis.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove, { passive: false });
            window.addEventListener('touchend', handleTouchEnd);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full overflow-hidden rounded-2xl shadow-xl aspect-[4/3] select-none group touch-none cursor-pointer ${className}`}
            onMouseDown={(e: MouseEvent) => {
                setIsDragging(true);
                handleMove(e.clientX);
            }}
            onTouchStart={(e: TouchEvent) => {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
            }}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={afterImage}
                    alt={afterLabel}
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                />
                <div className="absolute top-4 right-4 bg-teal-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {afterLabel}
                </div>
            </div>

            {/* Before Image (Foreground shown with clip-path) */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={beforeLabel}
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                />
                <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-teal-600 border border-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 18l5-6-5-6" />
                        <path d="M9 18l-5-6 5-6" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
