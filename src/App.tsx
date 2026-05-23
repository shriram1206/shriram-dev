import { Suspense, lazy, useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CredibilityStrip from './components/CredibilityStrip';
import About from './components/About';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import './index.css';

// Lazy load sections below the fold
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const CurrentlyBuilding = lazy(() => import('./components/CurrentlyBuilding'));
const Contact = lazy(() => import('./components/Contact'));

// Minimal loading fallback
const SectionLoader = () => (
    <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-light-border dark:border-dark-border border-t-light-primary dark:border-t-dark-primary rounded-full animate-spin" />
    </div>
);

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    const handlePreloaderComplete = useCallback(() => {
        setIsLoaded(true);
    }, []);

    return (
        <ThemeProvider>
            {/* Preloader */}
            {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}

            {/* Custom Cursor (desktop only) */}
            <CustomCursor />

            {/* Command Palette (Cmd+K) */}
            <CommandPalette />

            <div className={`min-h-screen overflow-x-hidden custom-scrollbar ${isLoaded ? '' : 'opacity-0'}`}>
                <ScrollProgress />
                <Navigation />
                <main>
                    <Hero />
                    <CredibilityStrip />
                    <About />
                    <Suspense fallback={<SectionLoader />}>
                        <Experience />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Projects />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Skills />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <CurrentlyBuilding />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Contact />
                    </Suspense>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
