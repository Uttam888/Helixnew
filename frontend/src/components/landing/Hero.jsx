import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { DNAHelix3D } from './DNAHelix3D';
import { HERO } from '@/constants/testIds';
import { maskLine } from '@/lib/motion';

const headlineLines = ['Programming', 'the code', 'of life.'];

const MaskWord = ({ children, delay }) => (
	<span className="reveal-mask">
		<motion.span
			className="inline-block"
			variants={maskLine}
			initial="hidden"
			animate="show"
			transition={{ delay, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
		>
			{children}
		</motion.span>
	</span>
);

export const Hero = () => {
	return (
		<section
			id="top"
			data-testid={HERO.section}
			className="relative min-h-screen flex items-center overflow-hidden"
		>
			{/* DNA canvas */}
			<div className="absolute inset-0 z-0">
				<div className="absolute right-0 top-0 h-full w-full md:w-[55%]">
					<DNAHelix3D />
				</div>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
				<div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#00f0ff]/10 blur-[140px]" />
			</div>

			<div className="pointer-events-none relative z-10 w-full px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto pt-24">
				<div className="[&_a]:pointer-events-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1 }}
					className="flex items-center gap-3 mb-8"
				>
					<span className="inline-block w-8 h-px bg-[#d4ff00]" />
					<span className="font-mono-space text-xs uppercase tracking-[0.25em] text-white/50">
						Synthetic Biology / Est. 2019
					</span>
				</motion.div>

				<h1 className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.92]">
					{headlineLines.map((line, i) => (
						<span key={line} className="block">
							<MaskWord delay={0.35 + i * 0.14}>
								{i === 2 ? (
									<span className="text-[#d4ff00]">{line}</span>
								) : (
									line
								)}
							</MaskWord>
						</span>
					))}
				</h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.05, duration: 0.8 }}
					className="mt-8 max-w-xl text-base md:text-lg text-zinc-400 leading-relaxed"
				>
					HELIXA engineers programmable cells and precision genomic
					therapeutics — turning biology into a platform we can read,
					write, and rewrite at scale.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}
					className="mt-10 flex flex-wrap items-center gap-4"
				>
					<a
						href="#technology"
						data-testid={HERO.primaryCta}
						className="group inline-flex items-center gap-2 bg-[#d4ff00] text-black font-mono-space text-xs uppercase tracking-[0.15em] px-7 py-4 hover:scale-[1.03] transition-transform glow-lime"
					>
						Explore the platform
						<ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
					</a>
					<a
						href="#about"
						data-testid={HERO.secondaryCta}
						className="inline-flex items-center gap-2 border border-white/20 text-white font-mono-space text-xs uppercase tracking-[0.15em] px-7 py-4 hover:border-[#d4ff00] hover:text-[#d4ff00] transition-colors"
					>
						Our science
					</a>
				</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.6 }}
				className="pointer-events-none absolute bottom-8 left-6 md:left-12 lg:left-24 flex items-center gap-3 text-white/40"
			>
				<ArrowDown size={16} className="animate-bounce" />
				<span className="font-mono-space text-[10px] uppercase tracking-[0.25em]">Scroll to discover</span>
			</motion.div>
		</section>
	);
};
