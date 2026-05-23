import React from 'react';
import { motion } from 'framer-motion';
import { Server, Monitor, Brain, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio';
import TiltCard from './TiltCard';

const categoryIcons: Record<string, React.ElementType> = {
    'Backend': Server,
    'Frontend': Monitor,
    'AI / LLM': Brain,
    'Tools / Infra': Wrench,
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="section-label">Skills</p>
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">
                        Focused expertise across backend engineering, frontend development, AI systems, and infrastructure.
                    </p>
                </motion.div>

                {/* Skills Grid — 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillCategory, categoryIndex) => {
                        const Icon = categoryIcons[skillCategory.category] || Server;
                        return (
                            <motion.div
                                key={skillCategory.category}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
                            >
                                <TiltCard className="relative glass-card p-6 h-full" tiltAmount={5}>
                                    <div className="flex items-center gap-2.5 mb-5">
                                        <div className="p-2 bg-light-surface dark:bg-dark-bg rounded-lg border border-light-border dark:border-dark-border">
                                            <Icon className="w-4 h-4 text-light-textPrimary dark:text-dark-textPrimary" />
                                        </div>
                                        <h3 className="text-sm font-bold text-light-textPrimary dark:text-dark-textPrimary">
                                            {skillCategory.category}
                                        </h3>
                                    </div>

                                    <div className="space-y-2">
                                        {skillCategory.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -8 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                                    duration: 0.3,
                                                }}
                                                className="px-3 py-2 text-sm text-light-textSecondary dark:text-dark-textSecondary bg-light-surface dark:bg-dark-bg rounded-lg border border-light-border dark:border-dark-border hover:text-light-textPrimary dark:hover:text-dark-textPrimary hover:border-light-primary/30 dark:hover:border-dark-primary/30 hover:translate-x-1 transition-all cursor-default"
                                            >
                                                {skill.name}
                                            </motion.div>
                                        ))}
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

export default Skills;
