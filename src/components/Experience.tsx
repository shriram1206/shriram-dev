import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="section-label">Experience</p>
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">
                        Real-world engineering exposure across AI, backend systems, and professional development workflows.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-3xl space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative pl-6 border-l-2 border-light-border dark:border-dark-border"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-1 -translate-x-[9px] w-4 h-4 rounded-full bg-light-primary dark:bg-dark-primary border-4 border-light-bg dark:border-dark-bg" />

                            {/* Card Content */}
                            <div className="pb-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                    <h3 className="text-base font-bold text-light-textPrimary dark:text-dark-textPrimary">
                                        {exp.position}
                                    </h3>
                                    <span className="text-xs font-medium text-light-textSecondary dark:text-dark-textSecondary bg-light-surface dark:bg-dark-surface px-2.5 py-1 rounded-md border border-light-border dark:border-dark-border w-fit">
                                        {exp.duration}
                                    </span>
                                </div>
                                <p className="text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-4">
                                    {exp.company}
                                </p>

                                {/* Achievements */}
                                <div className="space-y-2.5">
                                    {exp.achievements.map((achievement, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-light-textSecondary dark:text-dark-textSecondary flex-shrink-0 mt-0.5" />
                                            <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                                                {achievement}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
