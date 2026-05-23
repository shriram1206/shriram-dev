import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor: React.FC = () => {
    const { x, y } = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Only show on desktop
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Detect hoverable elements
        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverable = target.closest('a, button, [data-cursor-hover], input, textarea, select');
            setIsHovering(!!hoverable);
        };
        document.addEventListener('mouseover', handleOver);

        return () => {
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleOver);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[60] mix-blend-difference"
                animate={{
                    x: x - (isHovering ? 24 : 16),
                    y: y - (isHovering ? 24 : 16),
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
            >
                <div className={`w-full h-full rounded-full border ${isHovering ? 'border-white/60' : 'border-white/30'} transition-colors duration-200`} />
            </motion.div>
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[60] mix-blend-difference"
                animate={{
                    x: x - 3,
                    y: y - 3,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 25, mass: 0.3 }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </motion.div>
        </>
    );
};

export default CustomCursor;
