import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedProject = projects.find(p => p.id === selectedId);

    // Prevent background scrolling when the modal is open
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedId]);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedId(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section id="projects" className="section-padding bg-light-surface/50 dark:bg-dark-surface/20 min-h-screen">
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
                    <h2 className="section-title">Production Systems</h2>
                    <p className="section-subtitle">
                        Architectures focusing on sub-second latency, rigorous database security, and verifiable AI reasoning.
                    </p>
                </motion.div>

                {/* Highly Minimalist Bento/Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 gap-6">
                    {projects.slice(0, 2).map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedId(project.id)} />
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(2).map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index + 2} onClick={() => setSelectedId(project.id)} />
                    ))}
                </div>
            </div>

            {/* Framer Motion App-Store Expansion Modal */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <>
                        {/* Backdrop Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-white/50 dark:bg-[#0a0a0a]/70 backdrop-blur-md"
                            onClick={() => setSelectedId(null)}
                        />

                        {/* Modal Container */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
                            <motion.div
                                layoutId={`card-${selectedProject.id}`}
                                className="w-full max-w-4xl max-h-full bg-light-bg dark:bg-dark-surface rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto border border-light-border/50 dark:border-dark-border/50"
                            >
                                {/* Left Side: Media Spotlight */}
                                <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-auto relative bg-gradient-to-br from-light-surface to-light-bg dark:from-[#111111] dark:to-[#0a0a0a] p-6 lg:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-light-border/40 dark:border-dark-border/40">
                                    <motion.div layoutId={`media-${selectedProject.id}`} className="w-full h-full flex items-center justify-center">
                                        <img src={selectedProject.image} alt={selectedProject.title} className="max-w-full max-h-full object-contain drop-shadow-2xl" />
                                    </motion.div>

                                    {/* Mobile Close Button (Over Image) */}
                                    <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 md:hidden p-2 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-colors">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Right Side: Deep Technical Details */}
                                <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col overflow-y-auto custom-scrollbar bg-light-bg dark:bg-dark-bg">

                                    {/* Header & Desktop Close Button */}
                                    <div className="flex justify-between items-start mb-6">
                                        <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-2xl lg:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary leading-tight">
                                            {selectedProject.title}
                                        </motion.h3>
                                        <button onClick={() => setSelectedId(null)} className="hidden md:flex p-2 rounded-full hover:bg-light-surface dark:hover:bg-dark-surface transition-colors">
                                            <X className="w-6 h-6 text-light-textSecondary dark:text-dark-textSecondary" />
                                        </button>
                                    </div>

                                    {/* Key Differentiator Core */}
                                    {selectedProject.highlight && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                                            className="mb-6 p-4 rounded-xl border border-light-primary/20 dark:border-dark-primary/20 bg-light-primary/5 dark:bg-dark-primary/5"
                                        >
                                            <p className="text-[11px] font-bold uppercase tracking-wider text-light-primary dark:text-dark-primary mb-1">Architecture Differentiator</p>
                                            <p className="text-sm font-medium text-light-textPrimary dark:text-dark-textPrimary leading-relaxed">
                                                {selectedProject.highlight}
                                            </p>
                                        </motion.div>
                                    )}

                                    <motion.p
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                                        className="text-light-textSecondary dark:text-dark-textSecondary mb-8 leading-relaxed text-sm sm:text-base flex-1"
                                    >
                                        {selectedProject.longDescription || selectedProject.description}
                                    </motion.p>

                                    {/* Tech Stack Chips */}
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {selectedProject.techStack.map(tech => (
                                                <span key={tech} className="px-3 py-1.5 rounded bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-xs font-mono text-light-textSecondary dark:text-dark-textSecondary">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-light-border dark:border-dark-border">
                                            {selectedProject.links.live && selectedProject.links.live !== '#' && (
                                                <a href={selectedProject.links.live} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center py-3">
                                                    Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                                                </a>
                                            )}
                                            {selectedProject.links.github && selectedProject.links.github !== '#' && (
                                                <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="btn-outline flex-1 justify-center py-3">
                                                    <Github className="w-4 h-4 mr-2" /> View Source
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>

                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

/* Memoized Card Component for the Grid */
const ProjectCard = ({ project, index, onClick }: { project: any, index: number, onClick: () => void }) => {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative h-64 sm:h-72 md:h-[280px] w-full rounded-2xl overflow-hidden cursor-pointer bg-light-surface dark:bg-[#111111] shadow-lg hover:shadow-xl transition-shadow border border-light-border/40 dark:border-dark-border/40"
        >
            {/* Center Media - Pushed up with pb-20 to avoid intersecting text */}
            <motion.div layoutId={`media-${project.id}`} className="absolute inset-0 p-8 sm:p-10 pb-20 sm:pb-24 flex items-center justify-center">
                <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-lg"
                />
            </motion.div>

            {/* Overlay Gradient, Name & Hook */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-5 sm:p-6 flex flex-col justify-end min-h-[65%] z-10 pointer-events-none">
                <motion.h3
                    layoutId={`title-${project.id}`}
                    className="text-lg sm:text-xl font-bold text-white tracking-wide leading-tight drop-shadow-md line-clamp-1 mb-1.5"
                >
                    {/* Only show the first portion of the title (before any em-dash) for absolute minimalism */}
                    {project.title.split('—')[0].trim()}
                </motion.h3>
                {/* The Hook */}
                <p className="text-white/75 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-0.5">
                    {project.description}
                </p>
                <div className="overflow-hidden mt-2 h-0 group-hover:h-5 transition-all duration-300 ease-out">
                    <p className="text-white text-[10px] sm:text-xs font-mono font-semibold tracking-wider uppercase drop-shadow-md">View Architecture &rarr;</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
