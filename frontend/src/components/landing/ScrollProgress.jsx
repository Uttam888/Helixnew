import { motion, useScroll, useSpring } from 'framer-motion';
import { PROGRESS } from '@/constants/testIds';

// Slim lime scroll-progress bar fixed to the top of the viewport.
export const ScrollProgress = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<motion.div
			data-testid={PROGRESS.bar}
			style={{ scaleX }}
			className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-[#d4ff00] shadow-[0_0_12px_rgba(212,255,0,0.7)]"
		/>
	);
};
