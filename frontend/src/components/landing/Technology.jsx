import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import { TECH } from '@/constants/testIds';

const macroImg =
	'https://images.unsplash.com/photo-1572884267966-02340ebc90ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxtaWNyb3Njb3BlJTIwbGVucyUyMG1hY3JvfGVufDB8fHx8MTc4MzA5NDY0NHww&ixlib=rb-4.1.0&q=85';
const fluidImg =
	'https://images.unsplash.com/photo-1625527575322-791601f72b4d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200';

export const Technology = () => {
	return (
		<section
			id="technology"
			data-testid={TECH.section}
			className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto"
		>
			<motion.div
				variants={fadeUp}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
			>
				<div>
					<span className="font-mono-space text-xs uppercase tracking-[0.25em] text-[#d4ff00]">
						/ Technology &amp; Research
					</span>
					<h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mt-6 max-w-2xl">
						A platform stack for living systems.
					</h2>
				</div>
				<p className="text-zinc-400 max-w-sm md:text-lg">
					Four integrated layers — from in-silico design to autonomous
					wet-lab execution — powering everything we make.
				</p>
			</motion.div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(220px,auto)]"
			>
				{/* Hero block */}
				<motion.article
					variants={fadeUp}
					className="md:col-span-8 md:row-span-2 relative overflow-hidden border border-white/10 group min-h-[420px]"
				>
					<img
						src={macroImg}
						alt="Microscope lens macro"
						loading="lazy"
						className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
					<div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
						<span className="font-mono-space text-xs uppercase tracking-[0.25em] text-[#d4ff00] mb-4">
							Core Engine
						</span>
						<h3 className="font-syne font-bold text-3xl md:text-5xl tracking-tight max-w-xl">
							Generative genome design AI
						</h3>
						<p className="mt-4 text-zinc-300 max-w-lg md:text-lg">
							Foundation models trained on billions of protein and
							regulatory sequences propose novel constructs, then rank
							them for stability, expression and safety.
						</p>
						<span className="mt-6 inline-flex items-center gap-2 font-mono-space text-xs uppercase tracking-[0.15em] text-white group-hover:text-[#d4ff00] transition-colors">
							Explore engine <ArrowUpRight size={15} />
						</span>
					</div>
				</motion.article>

				<motion.article
					variants={fadeUp}
					className="md:col-span-4 relative overflow-hidden border border-white/10 bg-white/[0.02] p-8 group hover:bg-white/[0.04] transition-colors"
				>
					<span className="font-mono-space text-5xl text-white/10">01</span>
					<h3 className="font-syne font-semibold text-2xl mt-4">CRISPR Precision Suite</h3>
					<p className="mt-3 text-zinc-400">
						Base &amp; prime editors with sub-nucleotide targeting and
						near-zero off-target activity.
					</p>
				</motion.article>

				<motion.article
					variants={fadeUp}
					className="md:col-span-4 relative overflow-hidden border border-white/10 group min-h-[220px]"
				>
					<img
						src={fluidImg}
						alt="Abstract biological fluid"
						loading="lazy"
						className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
					<div className="relative z-10 h-full flex flex-col justify-end p-8">
						<h3 className="font-syne font-semibold text-2xl">Automated Cell Foundry</h3>
						<p className="mt-2 text-zinc-300 text-sm">
							Robotic build &amp; test at 10,000 constructs / week.
						</p>
					</div>
				</motion.article>
			</motion.div>
		</section>
	);
};
