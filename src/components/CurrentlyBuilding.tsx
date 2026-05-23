import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { currentlyBuilding } from '../data/portfolio';

const CurrentlyBuilding: React.FC = () => {
    return (
        <section className="section-padding bg-light-surface/50 dark:bg-dark-surface/20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <p className="section-label">Currently</p>
                    <h2 className="section-title">Currently Building</h2>
                </motion.div>

                <div className="max-w-2xl space-y-4">
                    {currentlyBuilding.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="flex items-start gap-3 p-4 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface hover:border-light-primary/20 dark:hover:border-dark-primary/20 transition-colors"
                        >
                            <ArrowRight className="w-4 h-4 text-light-textSecondary dark:text-dark-textSecondary mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-semibold text-light-textPrimary dark:text-dark-textPrimary">
                                    {item.title}
                                </p>
                                <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary mt-0.5">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentlyBuilding;
