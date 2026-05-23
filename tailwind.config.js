/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                light: {
                    bg: 'rgb(var(--color-light-bg) / <alpha-value>)',
                    surface: 'rgb(var(--color-light-surface) / <alpha-value>)',
                    primary: 'rgb(var(--color-light-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--color-light-secondary) / <alpha-value>)',
                    accent: 'rgb(var(--color-light-accent) / <alpha-value>)',
                    textPrimary: 'rgb(var(--color-light-textPrimary) / <alpha-value>)',
                    textSecondary: 'rgb(var(--color-light-textSecondary) / <alpha-value>)',
                    border: 'rgb(var(--color-light-border) / <alpha-value>)',
                },
                dark: {
                    bg: 'rgb(var(--color-dark-bg) / <alpha-value>)',
                    surface: 'rgb(var(--color-dark-surface) / <alpha-value>)',
                    primary: 'rgb(var(--color-dark-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--color-dark-secondary) / <alpha-value>)',
                    accent: 'rgb(var(--color-dark-accent) / <alpha-value>)',
                    textPrimary: 'rgb(var(--color-dark-textPrimary) / <alpha-value>)',
                    textSecondary: 'rgb(var(--color-dark-textSecondary) / <alpha-value>)',
                    border: 'rgb(var(--color-dark-border) / <alpha-value>)',
                },
            },
            fontFamily: {
                sans: ['"Manrope"', 'system-ui', 'sans-serif'],
                heading: ['"Julius Sans One"', 'sans-serif'],
            },
            borderRadius: {
                'soft': '12px',
            },
            boxShadow: {
                'soft': '0 4px 24px rgba(0, 0, 0, 0.06)',
                'glow': '0 0 20px rgba(0, 0, 0, 0.08)',
                'glow-dark': '0 0 20px rgba(255, 255, 255, 0.05)',
            },
            animation: {
                'fadeIn': 'fadeIn 0.5s ease-in',
                'slideUp': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(16px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
