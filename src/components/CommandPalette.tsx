import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUp, CornerDownLeft, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface CommandItem {
    id: string;
    label: string;
    shortcut?: string;
    icon: React.ElementType;
    action: () => void;
    category: string;
}

const CommandPalette: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const commands: CommandItem[] = [
        {
            id: 'about', label: 'Go to About', icon: ArrowUp, category: 'Navigation',
            action: () => { document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); },
        },
        {
            id: 'experience', label: 'Go to Experience', icon: ArrowUp, category: 'Navigation',
            action: () => { document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); },
        },
        {
            id: 'projects', label: 'Go to Projects', icon: ArrowUp, category: 'Navigation',
            action: () => { document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); },
        },
        {
            id: 'skills', label: 'Go to Skills', icon: ArrowUp, category: 'Navigation',
            action: () => { document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); },
        },
        {
            id: 'contact', label: 'Go to Contact', icon: ArrowUp, category: 'Navigation',
            action: () => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); },
        },
        {
            id: 'resume', label: 'Open Resume', icon: FileText, category: 'Actions',
            action: () => { window.open(personalInfo.resumeUrl, '_blank'); setIsOpen(false); },
        },
        {
            id: 'github', label: 'Open GitHub', icon: Github, category: 'Actions',
            action: () => { window.open(personalInfo.github, '_blank'); setIsOpen(false); },
        },
        {
            id: 'linkedin', label: 'Open LinkedIn', icon: Linkedin, category: 'Actions',
            action: () => { window.open(personalInfo.linkedin, '_blank'); setIsOpen(false); },
        },
        {
            id: 'email', label: 'Send Email', icon: Mail, category: 'Actions',
            action: () => { window.location.href = `mailto:${personalInfo.email}`; setIsOpen(false); },
        },
        {
            id: 'top', label: 'Scroll to Top', icon: ArrowUp, category: 'Actions',
            action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); },
        },
    ];

    const filtered = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase()) ||
        cmd.category.toLowerCase().includes(query.toLowerCase())
    );

    const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
        if (!acc[cmd.category]) acc[cmd.category] = [];
        acc[cmd.category].push(cmd);
        return acc;
    }, {});

    const flatFiltered = filtered;

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            setIsOpen(prev => !prev);
            setQuery('');
            setSelectedIndex(0);
        }
        if (e.key === 'Escape') {
            setIsOpen(false);
        }
    }, []);

    const handleInternalKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => Math.min(prev + 1, flatFiltered.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (flatFiltered[selectedIndex]) {
                flatFiltered[selectedIndex].action();
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Palette */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-[90] bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Search */}
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-light-border dark:border-dark-border">
                            <Search className="w-4 h-4 text-light-textSecondary dark:text-dark-textSecondary flex-shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleInternalKeyDown}
                                placeholder="Type a command or search..."
                                className="flex-1 bg-transparent text-sm text-light-textPrimary dark:text-dark-textPrimary placeholder:text-light-textSecondary/50 dark:placeholder:text-dark-textSecondary/50 outline-none"
                            />
                            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-light-textSecondary dark:text-dark-textSecondary bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded">
                                ESC
                            </kbd>
                        </div>

                        {/* Results */}
                        <div className="max-h-72 overflow-y-auto py-2">
                            {Object.entries(grouped).map(([category, items]) => (
                                <div key={category}>
                                    <p className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary">
                                        {category}
                                    </p>
                                    {items.map((cmd) => {
                                        const globalIndex = flatFiltered.indexOf(cmd);
                                        return (
                                            <button
                                                key={cmd.id}
                                                onClick={cmd.action}
                                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                                                    selectedIndex === globalIndex
                                                        ? 'bg-light-surface dark:bg-dark-bg text-light-textPrimary dark:text-dark-textPrimary'
                                                        : 'text-light-textSecondary dark:text-dark-textSecondary'
                                                }`}
                                            >
                                                <cmd.icon className="w-4 h-4 flex-shrink-0" />
                                                <span className="text-sm font-medium flex-1">{cmd.label}</span>
                                                {selectedIndex === globalIndex && (
                                                    <CornerDownLeft className="w-3 h-3 text-light-textSecondary dark:text-dark-textSecondary" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            ))}
                            {flatFiltered.length === 0 && (
                                <p className="px-4 py-6 text-sm text-light-textSecondary dark:text-dark-textSecondary text-center">
                                    No results found.
                                </p>
                            )}
                        </div>

                        {/* Footer hint */}
                        <div className="px-4 py-2 border-t border-light-border dark:border-dark-border flex items-center gap-4 text-[10px] text-light-textSecondary dark:text-dark-textSecondary">
                            <span className="flex items-center gap-1">
                                <kbd className="px-1 py-0.5 bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded font-mono">↑↓</kbd>
                                Navigate
                            </span>
                            <span className="flex items-center gap-1">
                                <kbd className="px-1 py-0.5 bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded font-mono">↵</kbd>
                                Select
                            </span>
                            <span className="flex items-center gap-1">
                                <kbd className="px-1 py-0.5 bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded font-mono">esc</kbd>
                                Close
                            </span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
