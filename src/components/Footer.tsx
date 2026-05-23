import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { name: 'GitHub', icon: Github, href: personalInfo.github },
        { name: 'LinkedIn', icon: Linkedin, href: personalInfo.linkedin },
        { name: 'Email', icon: Mail, href: `mailto:${personalInfo.email}` },
    ];

    return (
        <footer className="border-t border-light-border dark:border-dark-border">
            <div className="container-custom py-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    {/* Left: Name + Role */}
                    <div>
                        <p className="text-sm font-semibold text-light-textPrimary dark:text-dark-textPrimary">
                            {personalInfo.name}
                        </p>
                        <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary mt-0.5">
                            {personalInfo.title}
                        </p>
                    </div>

                    {/* Center: Quick Links */}
                    <div className="flex flex-wrap gap-4">
                        {quickLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs text-light-textSecondary dark:text-dark-textSecondary hover:text-light-textPrimary dark:hover:text-dark-textPrimary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right: Social + Scroll Top */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-light-textSecondary dark:text-dark-textSecondary hover:text-light-textPrimary dark:hover:text-dark-textPrimary hover:bg-light-surface dark:hover:bg-dark-surface transition-all"
                                aria-label={social.name}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon className="w-4 h-4" />
                            </motion.a>
                        ))}

                        {/* Scroll to top with progress ring */}
                        <button
                            onClick={scrollToTop}
                            className="relative p-2 rounded-lg ml-2 group"
                            aria-label="Back to top"
                        >
                            {/* Progress ring */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                                <circle
                                    cx="18" cy="18" r="15"
                                    fill="none"
                                    className="stroke-light-border dark:stroke-dark-border"
                                    strokeWidth="1.5"
                                />
                                <motion.circle
                                    cx="18" cy="18" r="15"
                                    fill="none"
                                    className="stroke-light-primary dark:stroke-dark-primary"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    style={{
                                        pathLength: smoothProgress,
                                        strokeDasharray: '0 1',
                                    }}
                                />
                            </svg>
                            <ArrowUp className="w-4 h-4 text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-textPrimary dark:group-hover:text-dark-textPrimary transition-colors relative z-10" />
                        </button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-light-border dark:border-dark-border">
                    <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary text-center">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
