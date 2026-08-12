import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import { CASES } from '@/constants/testIds';

const cases = [
	{
		tag: 'Oncology',
		year: '2025',
		title: 'A programmable T-cell that outsmarts solid tumors',
		metric: '3.4×',
		metricLabel: 'tumor clearance vs. standard CAR-T',
		img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
	},
	{
		tag: 'Rare Disease',
		year: '2025',
		title: 'One-shot base edit reverses an inherited metabolic disorder',
		metric: '92%',
		metricLabel: 'durable correction at 12 months',
		img: 'https://images.unsplash.com/photo-1578496781329-41da6c97ffc4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
	},
	{
		tag: 'Bio-manufacturing',
		year: '2024',
		title: 'Engineered microbes brewing therapeutic proteins at scale',
		metric: '40×',
		metricLabel: 'yield increase over wild-type strains',
		img: 'https://images.unsplash.com/photo-1576765608741-911f44c98546?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
	},
];

export const CaseStudies = () => {
	return (
		<section
			id="cases"
			data-testid={CASES.section}
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
						/ Breakthroughs
					</span>
					<h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mt-6 max-w-2xl">
						Proof, from bench to bedside.
					</h2>
				</div>
				<p className="text-zinc-400 max-w-sm md:text-lg">
					Selected programs where our platform moved the needle on real
					clinical and industrial outcomes.
				</p>
			</motion.div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
			>
				{cases.map((c) => (
					<motion.article
						key={c.title}
						variants={fadeUp}
						className="group relative flex flex-col border border-white/10 overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
					>
						<div className="relative overflow-hidden aspect-[4/3]">
							<img
								src={c.img}
								alt={c.title}
								loading="lazy"
								className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
							<div className="absolute top-4 left-4 flex items-center gap-3 font-mono-space text-[10px] uppercase tracking-[0.2em]">
								<span className="text-[#d4ff00]">{c.tag}</span>
								<span className="text-white/50">{c.year}</span>
							</div>
						</div>
						<div className="p-7 flex flex-col flex-1">
							<h3 className="font-syne font-semibold text-xl leading-tight">{c.title}</h3>
							<div className="mt-auto pt-8 flex items-baseline gap-3">
								<span className="font-mono-space text-4xl text-[#d4ff00]">{c.metric}</span>
								<span className="text-xs text-zinc-500 leading-snug max-w-[160px]">
									{c.metricLabel}
								</span>
							</div>
						</div>
					</motion.article>
				))}
			</motion.div>
		</section>
	);
};
