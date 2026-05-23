import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    tiltAmount?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', tiltAmount = 6 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: y * -tiltAmount, y: x * tiltAmount });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovering(false);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={className}
            style={{
                perspective: 800,
                transformStyle: 'preserve-3d',
            }}
        >
            {children}
            {/* Subtle shine effect */}
            {isHovering && (
                <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${(tilt.y / tiltAmount + 0.5) * 100}% ${(-tilt.x / tiltAmount + 0.5) * 100}%, rgba(255,255,255,0.05) 0%, transparent 60%)`,
                    }}
                />
            )}
        </motion.div>
    );
};

export default TiltCard;
