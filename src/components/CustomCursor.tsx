import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
    const curX = useRef(0);
    const curY = useRef(0);
    const tgX = useRef(0);
    const tgY = useRef(0);
    const dotX = useRef(0);
    const dotY = useRef(0);

    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        let animationFrameId: number;

        const onMouseMove = (e: MouseEvent) => {
            tgX.current = e.clientX;
            tgY.current = e.clientY;
            // The inner dot instantly follows the mouse
            dotX.current = e.clientX;
            dotY.current = e.clientY;
        };

        const updateCursor = () => {
            // Smoothly interpolate the outer ring towards the target
            curX.current += (tgX.current - curX.current) * 0.15;
            curY.current += (tgY.current - curY.current) * 0.15;

            // Apply transforms via DOM directly, completely avoiding React re-renders for 60fps zero-lag scrolling
            if (outerRef.current) {
                // Adjust translation based on hover size logic (isHovering is read inside the render frame passively)
                const offset = document.documentElement.classList.contains('cursor-hovering') ? 24 : 16;
                outerRef.current.style.transform = `translate3d(${curX.current - offset}px, ${curY.current - offset}px, 0)`;
            }
            if (innerRef.current) {
                innerRef.current.style.transform = `translate3d(${dotX.current - 3}px, ${dotY.current - 3}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(updateCursor);
        };

        window.addEventListener('mousemove', onMouseMove);
        animationFrameId = requestAnimationFrame(updateCursor);

        // Detect hoverable elements
        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverable = target.closest('a, button, [data-cursor-hover], input, textarea, select');
            if (hoverable) {
                document.documentElement.classList.add('cursor-hovering');
                setIsHovering(true);
            } else {
                document.documentElement.classList.remove('cursor-hovering');
                setIsHovering(false);
            }
        };
        document.addEventListener('mouseover', handleOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', handleOver);
            cancelAnimationFrame(animationFrameId);
            document.documentElement.classList.remove('cursor-hovering');
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            {/* Outer ring */}
            <div
                ref={outerRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out"
                style={{ width: isHovering ? 48 : 32, height: isHovering ? 48 : 32 }}
            >
                <div className={`w-full h-full rounded-full border ${isHovering ? 'border-white/60' : 'border-white/30'} transition-colors duration-200`} />
            </div>

            {/* Inner dot */}
            <div
                ref={innerRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{ width: 6, height: 6 }}
            >
                <div className="w-full h-full rounded-full bg-white" />
            </div>
        </>
    );
};

export default CustomCursor;
