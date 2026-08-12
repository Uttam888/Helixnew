import { useEffect } from 'react';
import Lenis from 'lenis';

// Wraps children with Lenis momentum smooth-scroll. Respects reduced motion.
export const SmoothScroll = ({ children }) => {
	useEffect(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) return;

		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			touchMultiplier: 1.6,
		});

		let rafId;
		const raf = (time) => {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		};
		rafId = requestAnimationFrame(raf);

		// Anchor links -> lenis scroll
		const onClick = (e) => {
			const a = e.target.closest('a[href^="#"]');
			if (!a) return;
			const id = a.getAttribute('href');
			if (id.length > 1) {
				const el = document.querySelector(id);
				if (el) {
					e.preventDefault();
					lenis.scrollTo(el, { offset: -80 });
				}
			}
		};
		document.addEventListener('click', onClick);

		return () => {
			cancelAnimationFrame(rafId);
			document.removeEventListener('click', onClick);
			lenis.destroy();
		};
	}, []);

	return children;
};
