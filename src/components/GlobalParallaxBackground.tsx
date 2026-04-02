import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const GlobalParallaxBackground = () => {
    const { scrollY } = useScroll();

    // Parallax transforms based on absolute scroll pixels
    const y1 = useTransform(scrollY, [0, 3000], [0, -800]);
    const y2 = useTransform(scrollY, [0, 4000], [0, -600]);
    const y3 = useTransform(scrollY, [0, 3000], [0, -1200]);
    const y4 = useTransform(scrollY, [0, 5000], [0, -400]);
    const y5 = useTransform(scrollY, [0, 3000], [0, -900]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden">
            {/* Background Shapes */}
            <motion.div
                style={{ y: y1 }}
                animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[400px] left-[-100px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
            />
            <motion.div
                style={{ y: y2 }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[1200px] right-[-150px] w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[120px]"
            />
            <motion.div
                style={{ y: y3 }}
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[2000px] left-[10%] w-[400px] h-[400px] bg-emerald-300/10 rounded-[30%_70%_70%_30%] blur-[90px]"
            />
            <motion.div
                style={{ y: y4 }}
                animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute top-[2800px] right-[20%] w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px]"
            />
            <motion.div
                style={{ y: y5 }}
                className="absolute top-[800px] right-[20%] w-32 h-32 border-[20px] border-primary/5 rounded-full blur-[4px]"
            />
        </div>
    );
};
