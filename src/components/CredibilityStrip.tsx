import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Briefcase, Cpu, Target } from 'lucide-react';
import { credibilityCards } from '../data/portfolio';
import TiltCard from './TiltCard';

const iconMap: Record<string, React.ElementType> = {
    rocket: Rocket,
    briefcase: Briefcase,
    cpu: Cpu,
    target: Target,
};

const CredibilityStrip: React.FC = () => {
    return (
        <section className="py-12 md:py-16 border-y border-light-border dark:border-dark-border bg-light-surface/50 dark:bg-dark-surface/30">
            <div className="container-custom">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {credibilityCards.map((card, index) => {
                        const Icon = iconMap[card.icon] || Target;
                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <TiltCard
                                    className="relative flex items-start gap-3 p-4 rounded-xl border border-transparent hover:border-light-border dark:hover:border-dark-border hover:bg-white dark:hover:bg-dark-surface transition-all duration-200"
                                    tiltAmount={4}
                                >
                                    <div className="p-2 bg-light-surface dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border flex-shrink-0">
                                        <Icon className="w-4 h-4 text-light-textPrimary dark:text-dark-textPrimary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-light-textPrimary dark:text-dark-textPrimary leading-tight">
                                            {card.title}
                                        </p>
                                        <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary mt-0.5 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CredibilityStrip;
