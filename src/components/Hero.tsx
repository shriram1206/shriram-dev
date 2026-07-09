import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, FileText } from 'lucide-react';
import { personalInfo, heroChips } from '../data/portfolio';
import TextReveal from './TextReveal';

const Hero: React.FC = () => {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center pt-16">
            <div className="container-custom w-full">
                <div className="max-w-3xl py-20 md:py-28">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="relative inline-block group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-light-primary/30 to-light-secondary/30 dark:from-dark-primary/30 dark:to-dark-secondary/30 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <img
                                src="/projects/profile.jpg"
                                alt={personalInfo.name}
                                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border border-light-border dark:border-dark-border shadow-sm bg-light-surface dark:bg-dark-surface"
                            />
                        </div>
                    </motion.div>

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="chip">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                            Available for Backend / Full Stack / AI Engineering Roles
                        </span>
                    </motion.div>

                    {/* Headline with text reveal */}
                    <div className="mb-6">
                        <TextReveal
                            text="Full Stack &"
                            as="h1"
                            delay={0.3}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-light-textPrimary dark:text-dark-textPrimary"
                        />
                        <TextReveal
                            text="AI Engineer"
                            as="h1"
                            delay={0.5}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-light-textPrimary dark:text-dark-textPrimary"
                        />
                    </div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-4 max-w-2xl"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* Body Copy */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-base text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-8 max-w-2xl"
                    >
                        {personalInfo.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="flex flex-wrap gap-3 mb-10"
                    >
                        <motion.button
                            onClick={scrollToProjects}
                            className="btn-primary inline-flex items-center gap-2"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            View Projects
                            <ArrowDown className="w-4 h-4" />
                        </motion.button>

                        <motion.a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline inline-flex items-center gap-2"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FileText className="w-4 h-4" />
                            Download Resume
                        </motion.a>

                        <motion.a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline inline-flex items-center gap-2"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </motion.a>
                    </motion.div>

                    {/* Supporting Chips */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="flex flex-wrap gap-2"
                    >
                        {heroChips.map((chip, i) => (
                            <motion.span
                                key={chip}
                                className="chip"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.0 + i * 0.08 }}
                            >
                                {chip}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Cmd+K hint */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-10"
                    >
                        <p className="text-xs text-light-textSecondary/50 dark:text-dark-textSecondary/50 flex items-center gap-1.5">
                            Press
                            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded">⌘K</kbd>
                            to navigate
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
