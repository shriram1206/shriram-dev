import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'name' | 'title' | 'exit'>('name');

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('title'), 800);
        const t2 = setTimeout(() => setPhase('exit'), 1600);
        const t3 = setTimeout(() => onComplete(), 2200);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase !== 'exit' ? null : null}
            <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-dark-bg"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                animate={phase === 'exit' ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ pointerEvents: phase === 'exit' ? 'none' : 'auto' }}
            >
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-2xl md:text-3xl font-bold tracking-tight text-light-textPrimary dark:text-dark-textPrimary"
                    >
                        Shriram M
                    </motion.p>
                    <AnimatePresence>
                        {(phase === 'title' || phase === 'exit') && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="text-sm text-light-textSecondary dark:text-dark-textSecondary mt-2 tracking-wide"
                            >
                                AI Engineer
                            </motion.p>
                        )}
                    </AnimatePresence>
                    {/* Loading bar */}
                    <motion.div
                        className="mt-6 h-[2px] bg-light-border dark:bg-dark-border rounded-full overflow-hidden w-48 mx-auto"
                    >
                        <motion.div
                            className="h-full bg-light-primary dark:bg-dark-primary rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Preloader;
