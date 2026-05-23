import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, FileText, Command } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolio';

const Navigation: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navItems.map(item => item.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const openCommandPalette = () => {
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl border-b border-light-border dark:border-dark-border'
                        : 'bg-transparent'
                }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="text-lg font-bold text-light-textPrimary dark:text-dark-textPrimary tracking-tight"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Shriram M
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                        activeSection === item.href.replace('#', '')
                                            ? 'text-light-textPrimary dark:text-dark-textPrimary'
                                            : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-textPrimary dark:hover:text-dark-textPrimary'
                                    }`}
                                >
                                    {item.name}
                                    {/* Animated underline indicator */}
                                    {activeSection === item.href.replace('#', '') && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute bottom-0 left-2 right-2 h-[2px] bg-light-primary dark:bg-dark-primary rounded-full"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}

                            {/* Cmd+K Button */}
                            <button
                                onClick={openCommandPalette}
                                className="ml-1 px-2 py-1.5 rounded-lg text-light-textSecondary dark:text-dark-textSecondary hover:bg-light-surface dark:hover:bg-dark-surface transition-colors flex items-center gap-1 text-xs"
                                aria-label="Command palette"
                            >
                                <Command className="w-3 h-3" />
                                <span className="font-mono">K</span>
                            </button>

                            {/* Theme Toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                className="p-2 ml-1 rounded-lg text-light-textSecondary dark:text-dark-textSecondary hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
                                aria-label="Toggle theme"
                                whileTap={{ rotate: 180 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </motion.button>

                            {/* Resume CTA */}
                            <motion.a
                                href={personalInfo.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 px-4 py-2 text-sm font-semibold bg-light-primary dark:bg-white text-white dark:text-dark-bg rounded-lg hover:opacity-90 transition-all inline-flex items-center gap-1.5"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <FileText className="w-3.5 h-3.5" />
                                Resume
                            </motion.a>
                        </div>

                        {/* Mobile Controls */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg text-light-textSecondary dark:text-dark-textSecondary"
                                aria-label="Toggle theme"
                            >
                                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg text-light-textPrimary dark:text-dark-textPrimary"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="fixed top-16 left-3 right-3 z-30 md:hidden bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl p-4 shadow-xl"
                        >
                            <div className="flex flex-col gap-1">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`text-left py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                                            activeSection === item.href.replace('#', '')
                                                ? 'bg-light-surface dark:bg-dark-bg text-light-textPrimary dark:text-dark-textPrimary'
                                                : 'text-light-textSecondary dark:text-dark-textSecondary'
                                        }`}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                                <a
                                    href={personalInfo.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 py-2.5 px-4 text-sm font-semibold bg-light-primary dark:bg-white text-white dark:text-dark-bg rounded-xl text-center inline-flex items-center justify-center gap-1.5"
                                >
                                    <FileText className="w-3.5 h-3.5" />
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
