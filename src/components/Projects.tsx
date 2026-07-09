import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import TiltCard from './TiltCard';

const Projects: React.FC = () => {
    const featuredProjects = projects.filter(p => p.id === 'feedbackwall' || p.id === 'prompt-forge');
    const otherProjects = projects.filter(p => p.id !== 'feedbackwall' && p.id !== 'prompt-forge');

    return (
        <section id="projects" className="section-padding bg-light-surface/50 dark:bg-dark-surface/20">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="section-label">Projects</p>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Curated projects that demonstrate product thinking, backend architecture, and practical engineering.
                    </p>
                </motion.div>

                {/* Featured Projects — Large Cards */}
                {featuredProjects.map((featuredProject, index) => (
                    <motion.div
                        key={featuredProject.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="mb-8"
                    >
                        <TiltCard className="relative glass-card overflow-hidden" tiltAmount={3}>
                            <div className="grid md:grid-cols-2">
                                {/* Image */}
                                <div className="relative aspect-video md:aspect-auto bg-light-surface dark:bg-dark-surface overflow-hidden group">
                                    <img
                                        src={featuredProject.image}
                                        alt={featuredProject.title}
                                        className="w-full h-full object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col justify-center">
                                    <div className="chip w-fit mb-4 text-xs">Featured Project</div>
                                    <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-3">
                                        {featuredProject.title}
                                    </h3>
                                    <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-4">
                                        {featuredProject.longDescription}
                                    </p>

                                    {/* Highlight */}
                                    {featuredProject.highlight && (
                                        <div className="text-xs text-light-textSecondary dark:text-dark-textSecondary bg-light-surface dark:bg-dark-bg p-3 rounded-lg border border-light-border dark:border-dark-border mb-4 leading-relaxed">
                                            <span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Highlights: </span>
                                            {featuredProject.highlight}
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {featuredProject.techStack.map((tech) => (
                                            <span key={tech} className="chip text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        {featuredProject.links.live && featuredProject.links.live !== '#' && (
                                            <motion.a
                                                href={featuredProject.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary text-sm inline-flex items-center gap-2"
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                Live Demo
                                            </motion.a>
                                        )}
                                        {featuredProject.links.github && featuredProject.links.github !== '#' && (
                                            <motion.a
                                                href={featuredProject.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-outline text-sm inline-flex items-center gap-2"
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                GitHub
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}

                {/* Other Projects — 2-Column Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <TiltCard className="relative glass-card overflow-hidden flex flex-col h-full" tiltAmount={5}>
                                {/* Image */}
                                <div className="relative aspect-video bg-light-surface dark:bg-dark-surface overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-light-textPrimary dark:text-dark-textPrimary mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-3 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Highlight */}
                                    {project.highlight && (
                                        <div className="text-xs text-light-textSecondary dark:text-dark-textSecondary bg-light-surface dark:bg-dark-bg p-2.5 rounded-lg border border-light-border dark:border-dark-border mb-3 leading-relaxed">
                                            <span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">Why it matters: </span>
                                            {project.highlight}
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.techStack.slice(0, 5).map((tech) => (
                                            <span key={tech} className="chip text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 mt-auto">
                                        {project.links.live && project.links.live !== '#' && (
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium text-light-textPrimary dark:text-dark-textPrimary hover:opacity-70 transition-opacity inline-flex items-center gap-1"
                                            >
                                                Live Demo <ArrowRight className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                        {project.links.github && project.links.github !== '#' && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary hover:text-light-textPrimary dark:hover:text-dark-textPrimary transition-colors inline-flex items-center gap-1"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
