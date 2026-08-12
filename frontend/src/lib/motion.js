// Shared framer-motion variants for consistent scroll reveals.

export const fadeUp = {
	hidden: { opacity: 0, y: 32 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
	},
};

export const stagger = {
	hidden: {},
	show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const maskLine = {
	hidden: { y: '110%' },
	show: {
		y: '0%',
		transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
	},
};

export const viewportOnce = { once: true, amount: 0.3 };
