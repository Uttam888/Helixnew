import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import { IMPACT } from '@/constants/testIds';

const stats = [
	{ value: 148, suffix: '+', label: 'Engineered therapeutic candidates in pipeline' },
	{ value: 12, suffix: 'M', label: 'Sequences analysed by our design models', prefix: '' },
	{ value: 98, suffix: '%', label: 'On-target editing precision achieved' },
	{ value: 30, suffix: '+', label: 'Global research & clinical partners' },
];

const Counter = ({ value, prefix = '', suffix = '' }) => {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, amount: 0.5 });
	const [display, setDisplay] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) {
			setDisplay(value);
			return;
		}
		let raf;
		const start = performance.now();
		const dur = 1800;
		const tick = (now) => {
			const p = Math.min((now - start) / dur, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setDisplay(Math.round(eased * value));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, value]);

	return (
		<span ref={ref} className="font-mono-space text-[#d4ff00]">
			{prefix}
			{display}
			{suffix}
		</span>
	);
};

export const Impact = () => {
	return (
		<section
			id="impact"
			data-testid={IMPACT.section}
			className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto"
		>
			<motion.div
				variants={fadeUp}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="mb-16 max-w-2xl"
			>
				<span className="font-mono-space text-xs uppercase tracking-[0.25em] text-[#d4ff00]">
					/ Impact
				</span>
				<h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mt-6">
					Measured in outcomes, not promises.
				</h2>
			</motion.div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8"
			>
				{stats.map((s) => (
					<motion.div key={s.label} variants={fadeUp} className="border-t border-white/15 pt-6">
						<div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
							<Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
						</div>
						<p className="mt-5 text-zinc-400 text-sm leading-relaxed max-w-[220px]">
							{s.label}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};
