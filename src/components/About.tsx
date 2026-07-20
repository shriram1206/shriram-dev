import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code2, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
    const quickFacts = [
        { icon: MapPin, label: 'Based in', value: 'Tamil Nadu, India' },
        { icon: GraduationCap, label: 'Education', value: 'B.E. CS (Graduated March 2026)' },
        { icon: Briefcase, label: 'Interested in', value: 'Applied AI & LLM Systems' },
        { icon: Code2, label: 'Core stack', value: 'Python, Spring AI, LangChain, React' },
        { icon: ArrowUpRight, label: 'Status', value: 'Open to full-time opportunities' },
    ];

    return (
        <section id="about" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">About</p>
                    <h2 className="section-title">About</h2>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-10 md:gap-16 mt-10">
                    {/* Left: Paragraph intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="md:col-span-3 space-y-5"
                    >
                        <p className="text-base md:text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                            I am an AI engineer focused on{' '}
                            <span className="text-light-textPrimary dark:text-dark-textPrimary font-medium">
                                applied AI, LLM orchestration, and intelligent agent systems
                            </span>
                            . My work centers on turning complex ideas into practical software — especially where
                            APIs, automation, data flow, and LLM-powered features come together.
                        </p>
                        <p className="text-base md:text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                            I am currently looking for full-time roles where I can contribute to{' '}
                            <span className="text-light-textPrimary dark:text-dark-textPrimary font-medium">
                                AI engineering, applied RAG architectures, or cognitive search teams
                            </span>.
                        </p>
                        <p className="text-base text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                            From building and shipping Prompt Forge as a live metaprompting SaaS to developing
                            production RAG pipelines and SSE-based tool integrations during my internship at Servimos Technologies,
                            my experience reflects a focus on practical engineering and real-world problem solving.
                        </p>
                    </motion.div>

                    {/* Right: Quick Facts */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="md:col-span-2"
                    >
                        <div className="glass-card p-6 space-y-4">
                            <h3 className="text-sm font-semibold text-light-textPrimary dark:text-dark-textPrimary uppercase tracking-wider">
                                Quick Facts
                            </h3>
                            <div className="space-y-3">
                                {quickFacts.map((fact) => (
                                    <div key={fact.label} className="flex items-start gap-3">
                                        <fact.icon className="w-4 h-4 text-light-textSecondary dark:text-dark-textSecondary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">
                                                {fact.label}
                                            </p>
                                            <p className="text-sm font-medium text-light-textPrimary dark:text-dark-textPrimary">
                                                {fact.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
