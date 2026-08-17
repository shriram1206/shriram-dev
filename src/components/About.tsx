import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code2, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
    const quickFacts = [
        { icon: MapPin, label: 'Based in', value: 'Namakkal,Tamil Nadu, India' },
        { icon: GraduationCap, label: 'Education', value: 'B.E. CS (Graduated May 2026)' },
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
                            I build software that solves real workflow problems — from{' '}
                            <span className="text-light-textPrimary dark:text-dark-textPrimary font-medium">
                                applied AI systems to backend-heavy orchestration engines
                            </span>
                            . My focus is on shipping practical AI tools with strong engineering foundations, clean architectures, and real-world usefulness.
                        </p>
                        <div className="text-base md:text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mt-4">
                            <span className="text-light-textPrimary dark:text-dark-textPrimary font-semibold mb-2 block">
                                ✦ Current Focus
                            </span>
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                                <li>Architecting voice-native and multi-agent AI systems with MCP.</li>
                                <li>Exploring NL2SQL / NL2Cypher translation and knowledge-graph retrieval.</li>
                                <li>Fusing deterministic RPA with agentic reasoning for real-world automation.</li>
                                <li>Growing into AI engineering roles with strong technical ownership.</li>
                            </ul>
                        </div>
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
