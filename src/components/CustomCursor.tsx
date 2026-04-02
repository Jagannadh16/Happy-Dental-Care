import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Inner dot position (instant)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Outer circle position (spring-based smooth trailing)
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = !!target.closest('a, button, input, textarea, select, [role="button"]');
            setIsHovering(isInteractive);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible, cursorX, cursorY]);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null; // Don't render on touch devices
    }

    return (
        <>
            {/* Inner Dot - Moves Instantly */}
            <motion.div
                className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 -ml-1 -mt-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />

            {/* Outer Trailing Circle - Uses Spring Physics to follow */}
            <motion.div
                className={`fixed top-0 left-0 border border-primary/50 rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center transition-[width,height,opacity,background-color,margin] duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'w-12 h-12 bg-primary/10 -ml-6 -mt-6' : 'w-8 h-8 -ml-4 -mt-4'}`}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            />
        </>
    );
};
