import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const TextReveal: React.FC<TextRevealProps> = ({
    text,
    className = '',
    delay = 0,
    as: Tag = 'h1',
}) => {
    const words = text.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: delay,
            },
        },
    };

    const wordVariant: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(4px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as any,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
        >
            <Tag className={className}>
                {words.map((word, i) => (
                    <motion.span
                        key={`${word}-${i}`}
                        variants={wordVariant}
                        className="inline-block mr-[0.25em]"
                    >
                        {word}
                    </motion.span>
                ))}
            </Tag>
        </motion.div>
    );
};

export default TextReveal;
