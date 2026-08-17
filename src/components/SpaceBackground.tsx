import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    drift: number;
}

interface Comet {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
    angle: number;
    life: number;
    maxLife: number;
}

const SpaceBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { isDark } = useTheme();
    const animationRef = useRef<number>(0);

    useEffect(() => {
        if (!isDark) {
            cancelAnimationFrame(animationRef.current);
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Grid settings
        const gridSpacing = 60;

        // Create debris particles
        const particles: Particle[] = [];
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.5 + 0.3,
                speed: Math.random() * 0.15 + 0.02,
                opacity: Math.random() * 0.5 + 0.1,
                drift: (Math.random() - 0.5) * 0.08,
            });
        }

        // Comets
        const comets: Comet[] = [];
        const spawnComet = () => {
            comets.push({
                x: Math.random() * width * 1.2 + width * 0.1,
                y: -20,
                length: Math.random() * 80 + 60,
                speed: Math.random() * 1.5 + 1.0,
                opacity: Math.random() * 0.4 + 0.3,
                angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
                life: 0,
                maxLife: Math.random() * 300 + 200,
            });
        };

        let frameCount = 0;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            frameCount++;

            // 1. Draw subtle line grid
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
            ctx.lineWidth = 0.5;

            // Vertical lines
            for (let x = gridSpacing; x < width; x += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = gridSpacing; y < height; y += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Grid intersection dots (brighter)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
            for (let x = gridSpacing; x < width; x += gridSpacing) {
                for (let y = gridSpacing; y < height; y += gridSpacing) {
                    ctx.beginPath();
                    ctx.arc(x, y, 1, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // 2. Draw and update debris particles
            particles.forEach((p) => {
                p.y -= p.speed;
                p.x += p.drift;

                // Wrap around
                if (p.y < -5) {
                    p.y = height + 5;
                    p.x = Math.random() * width;
                }
                if (p.x < -5) p.x = width + 5;
                if (p.x > width + 5) p.x = -5;

                // Twinkle effect
                const twinkle = Math.sin(frameCount * 0.02 + p.x) * 0.15;
                const alpha = Math.max(0.05, Math.min(0.7, p.opacity + twinkle));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            });

            // 3. Spawn and draw comets
            if (frameCount % 420 === 0 || (comets.length === 0 && frameCount > 60)) {
                spawnComet();
            }

            for (let i = comets.length - 1; i >= 0; i--) {
                const c = comets[i];
                c.life++;
                c.x -= Math.cos(c.angle) * c.speed;
                c.y += Math.sin(c.angle) * c.speed;

                // Fade in and out
                let alpha = c.opacity;
                if (c.life < 30) alpha *= c.life / 30;
                if (c.life > c.maxLife - 60) alpha *= (c.maxLife - c.life) / 60;

                // Comet head
                const gradient = ctx.createLinearGradient(
                    c.x, c.y,
                    c.x + Math.cos(c.angle) * c.length,
                    c.y - Math.sin(c.angle) * c.length
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
                gradient.addColorStop(0.3, `rgba(200, 220, 255, ${alpha * 0.5})`);
                gradient.addColorStop(1, 'rgba(200, 220, 255, 0)');

                ctx.beginPath();
                ctx.moveTo(c.x, c.y);
                ctx.lineTo(
                    c.x + Math.cos(c.angle) * c.length,
                    c.y - Math.sin(c.angle) * c.length
                );
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.2;
                ctx.stroke();

                // Glow around head
                const glow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, 4);
                glow.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.8})`);
                glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.beginPath();
                ctx.arc(c.x, c.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                // Remove dead comets
                if (c.life > c.maxLife || c.y > height + 50 || c.x < -100) {
                    comets.splice(i, 1);
                }
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [isDark]);

    if (!isDark) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        />
    );
};

export default SpaceBackground;
