import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

// Generates true/false for a 15x15 grid based on variant index
const getPattern = (x: number, y: number, variant: number) => {
    const cx = 7, cy = 7;
    if (variant === 0) {
        // Circle + 4 corners (Like BulkBeings first card)
        const r2 = (x - cx) ** 2 + (y - cy) ** 2;
        const isCircle = r2 >= 12 && r2 <= 20;
        const isCorner = (x === 2 && y === 2) || (x === 12 && y === 2) || (x === 2 && y === 12) || (x === 12 && y === 12);
        return isCircle || isCorner;
    } else if (variant === 1) {
        // Bar Chart / Audio visualizer (Like BulkBeings middle card)
        const h = [0, 2, 8, 4, 11, 7, 2, 7, 11, 4, 8, 2, 0];
        if (x >= 1 && x <= 13) {
            return y >= 13 - h[x - 1] && y <= 13;
        }
        return false;
    } else if (variant === 2) {
        // Spiral / Golden Ratio (Like BulkBeings right card)
        const spiralPts = [
            [7, 7], [8, 7], [8, 8], [7, 8], [6, 8], [6, 7], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6],
            [10, 7], [10, 8], [10, 9], [10, 10], [9, 10], [8, 10], [7, 10], [6, 10], [5, 10], [4, 10], [4, 9],
            [4, 8], [4, 7], [4, 6], [4, 5], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4]
        ];
        return spiralPts.some(p => p[0] === x && p[1] === y);
    } else if (variant === 3) {
        // Sine wave / Pulse
        const yBase = Math.sin(x * 0.8) * 3 + 7;
        return Math.abs(y - yBase) <= 1;
    } else if (variant === 4) {
        // Neural Network Nodes
        const nodes = [[3, 3], [11, 3], [7, 7], [3, 11], [11, 11]];
        const isNode = nodes.some(p => Math.abs(x - p[0]) <= 1 && Math.abs(y - p[1]) <= 1);
        const isX = Math.abs(x - y) === 0 || Math.abs(x + y) === 14;
        return (isNode || (isX && x > 1 && x < 13 && y > 1 && y < 13)) && !(isNode && isX);
    } else {
        // DNA / Double Helix
        const y1 = Math.sin(x * 0.5) * 3 + 7;
        const y2 = Math.cos(x * 0.5) * 3 + 7;
        return Math.abs(y - y1) <= 0.5 || Math.abs(y - y2) <= 0.5;
    }
};

const PixelGrid = ({ variant }: { variant: number }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Higher resolution for retina displays
        const dpr = window.devicePixelRatio || 1;
        const size = 15;
        const cellSize = 5; // 5px square
        const gap = 2; // 2px gap
        const totalSize = size * cellSize + (size - 1) * gap;

        canvas.width = totalSize * dpr;
        canvas.height = totalSize * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${totalSize}px`;
        canvas.style.height = `${totalSize}px`;

        ctx.clearRect(0, 0, totalSize, totalSize);

        // Dark mode check for background dots
        const isDark = document.documentElement.classList.contains('dark');
        const bgDotColor = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.1)';

        for (let i = 0; i < 225; i++) {
            const x = i % size;
            const y = Math.floor(i / size);
            const cx = x * (cellSize + gap);
            const cy = y * (cellSize + gap);

            if (getPattern(x, y, variant)) {
                // Active red pixel
                ctx.fillStyle = '#f10b18';
                ctx.shadowColor = 'rgba(241, 11, 24, 0.9)';
                ctx.shadowBlur = 6;
                // Draw rounded rect (1px radius approach)
                ctx.beginPath();
                ctx.roundRect(cx, cy, cellSize, cellSize, 1);
                ctx.fill();
                ctx.shadowBlur = 0; // Reset for other draws
            } else {
                // Inactive pixel
                ctx.fillStyle = bgDotColor;
                ctx.beginPath();
                ctx.roundRect(cx, cy, cellSize, cellSize, 1);
                ctx.fill();
            }
        }
    }, [variant]); // Re-run if theme changes usually requires a theme listener, but for now this is static

    return (
        <div className="w-fit mx-auto my-10 pointer-events-none flex items-center justify-center">
            <canvas ref={canvasRef} className="block" />
        </div>
    );
};

const TypewriterText = ({ text, delay = 0, showCursor = false, loop = true }: { text: string, delay?: number, showCursor?: boolean, loop?: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!isInView) return;
        let timeout: any;
        let timer: any;

        const type = () => {
            setDisplayed("");
            setDone(false);
            let i = 0;
            timer = setInterval(() => {
                setDisplayed(text.substring(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(timer);
                    setDone(true);
                    if (loop) {
                        timeout = setTimeout(type, 3000); // Wait 3s then loop
                    }
                }
            }, 60);
        };

        timeout = setTimeout(type, delay);

        return () => { clearTimeout(timeout); clearInterval(timer); };
    }, [isInView, text, delay, loop]);

    return (
        <span ref={ref} className="inline-block min-h-[14px]">
            {displayed}
            {showCursor && !done && <span className="animate-pulse ml-0.5 opacity-70">_</span>}
        </span>
    );
};

const BulkBeingsCard = ({ project, index }: { project: any, index: number }) => {
    // Generate deterministic categories for the card header
    const typeTokens = project.techStack.length >= 2
        ? `${project.techStack[0]} • ${project.techStack[1]}`
        : 'SYSTEM • KERNEL';

    const figNumber = `FIG.0${index + 1}`;

    // Determine status badge
    const status = project.metrics?.find((m: any) => m.label.includes('Status'))?.value?.toUpperCase() || 'LIVE';
    const isLive = status.includes('LIVE') || status.includes('PROD');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col w-full group"
        >
            {/* The Top Canvas Box */}
            <div className="w-full bg-[#fafafa] dark:bg-[#0c0c0e] rounded-md border border-light-border/60 dark:border-white/[0.08] p-5 flex flex-col relative overflow-hidden transition-colors hover:border-light-primary/30 dark:hover:border-white/[0.2]">

                {/* Header Row */}
                <div className="flex justify-between items-center w-full mb-6">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-light-textSecondary/60 dark:text-white/40">
                        {typeTokens}
                    </span>
                    <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-500 shadow-[0_0_4px_#10b981]' : 'bg-amber-500 shadow-[0_0_4px_#f59e0b]'}`}></span>
                        <span className="font-mono text-[9px] tracking-widest text-light-textPrimary dark:text-white/70 uppercase">
                            {status}
                        </span>
                    </div>
                </div>

                {/* Terminal Exec Lines */}
                <div className="font-mono text-[9.5px] uppercase tracking-wider text-light-textSecondary dark:text-white/50 flex flex-col gap-1.5 relative z-10 min-h-[40px]">
                    <div className="flex items-center">
                        <span className="text-[#f10b18] mr-1.5">$</span>
                        <TypewriterText
                            text={project.techStack.length > 2 ? `INIT ${project.techStack[2]}` : 'SYSTEM MOUNT'}
                            delay={index * 200 + 400}
                        />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: (index * 0.2) + 1.2, repeat: Infinity, repeatDelay: 3, duration: 0.2, repeatType: 'loop' }}
                            className="ml-1.5"
                        >
                            OK
                        </motion.span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-[#f10b18] mr-1.5">{index % 2 === 0 ? '$' : '∷'}</span>
                        <TypewriterText
                            text="WIRING DATA LAYER"
                            delay={index * 200 + 1200}
                            showCursor={index === 2}
                        />
                    </div>
                </div>

                {/* THE PIXEL LED GRID */}
                <PixelGrid variant={index % 6} />

                {/* Footer Row */}
                <div className="flex justify-between items-center w-full mt-auto pt-2">
                    <span className="font-mono text-[9px] tracking-widest text-light-textSecondary/50 dark:text-white/30">
                        {figNumber}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-light-textSecondary/50 dark:text-white/30">
                        {project.metrics?.[0]?.value || 'TRAINING'}
                    </span>
                </div>

            </div>

            {/* Content Below Box */}
            <div className="mt-6 flex flex-col px-1">
                <p className="font-mono text-[10px] uppercase text-[#f10b18] tracking-widest mb-3 font-semibold">
                    {project.technicalDetails?.[0] || 'ENGINEERING'}
                </p>
                <h3 className="text-2xl font-light text-light-textPrimary dark:text-white leading-tight mb-3">
                    {project.title}
                </h3>
                <p className="text-[14px] text-light-textSecondary dark:text-white/60 leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                </p>

                {/* View Actions */}
                <div className="flex items-center gap-5 mt-auto">
                    {project.links?.live && project.links.live !== '#' && (
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-[#f10b18] hover:opacity-70 transition-opacity">
                            Live System <ExternalLink className="w-3 h-3" />
                        </a>
                    )}
                    {project.links?.github && project.links.github !== '#' && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-[#f10b18] hover:opacity-70 transition-opacity">
                            Source Code <Github className="w-3 h-3" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

const Projects: React.FC = () => {
    return (
        <section id="projects" className="pt-24 pb-32">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-light text-light-textPrimary dark:text-white tracking-tight mb-4">
                        Engineering autonomous <span className="text-[#f10b18]">systems.</span>
                    </h2>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-light-textSecondary/60 dark:text-white/40 md:text-right w-full md:-mt-8">
                        03 / PRODUCTION SCHEMAS
                    </p>
                </motion.div>

                {/* Strict 3-Column Grid matching BulkBeings exactly */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                    {projects.map((project, index) => (
                        <BulkBeingsCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
