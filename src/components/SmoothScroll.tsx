'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
    useEffect(() => {
        // Only run on desktop and if user hasn't requested reduced motion
        // Lenis is quite heavy, so we only initialize it when needed
        const isDesktop = window.innerWidth > 1024;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!isDesktop || prefersReducedMotion) return;

        let lenis: Lenis | null = null;
        let rafId: number | null = null;

        const initLenis = () => {
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                infinite: false,
            });

            function raf(time: number) {
                lenis?.raf(time);
                rafId = requestAnimationFrame(raf);
            }

            rafId = requestAnimationFrame(raf);
        };

        initLenis();

        return () => {
            if (lenis) lenis.destroy();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return null;
}
