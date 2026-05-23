import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
    const contactActions = [
        {
            icon: Mail,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
            primary: true,
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/shriram-m-sde',
            href: personalInfo.linkedin,
            primary: false,
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/shriram1206',
            href: personalInfo.github,
            primary: false,
        },
        {
            icon: FileText,
            label: 'Resume',
            value: 'Download Resume',
            href: personalInfo.resumeUrl,
            primary: false,
        },
    ];

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="section-label">Contact</p>
                        <h2 className="section-title">Let's Build Something Useful</h2>
                        <p className="section-subtitle mb-10">
                            Open to backend, AI backend, and full-stack engineering opportunities.
                            Interested in roles where product thinking, backend architecture,
                            and practical AI engineering matter.
                        </p>
                    </motion.div>

                    {/* Contact Actions */}
                    <div className="space-y-3">
                        {contactActions.map((action, index) => (
                            <motion.a
                                key={action.label}
                                href={action.href}
                                target={action.label !== 'Email' ? '_blank' : undefined}
                                rel={action.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="flex items-center gap-4 p-4 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface hover:border-light-primary/30 dark:hover:border-dark-primary/30 hover:bg-light-surface dark:hover:bg-dark-bg transition-all group"
                            >
                                <div className="p-2.5 bg-light-surface dark:bg-dark-bg rounded-lg border border-light-border dark:border-dark-border group-hover:border-light-primary/20 dark:group-hover:border-dark-primary/20 transition-colors">
                                    <action.icon className="w-4 h-4 text-light-textPrimary dark:text-dark-textPrimary" />
                                </div>
                                <div>
                                    <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">
                                        {action.label}
                                    </p>
                                    <p className="text-sm font-medium text-light-textPrimary dark:text-dark-textPrimary">
                                        {action.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
