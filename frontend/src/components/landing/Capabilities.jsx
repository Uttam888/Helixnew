import { motion } from 'framer-motion';
import { Dna, FlaskConical, Microscope, Cpu, ShieldCheck, Activity } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import { CAPABILITIES } from '@/constants/testIds';

const services = [
	{ icon: Dna, title: 'Gene & Cell Therapy', desc: 'End-to-end development of autologous and allogeneic living therapeutics.' },
	{ icon: FlaskConical, title: 'Synthetic Biology', desc: 'Engineered microbial and mammalian chassis for on-demand biomanufacturing.' },
	{ icon: Microscope, title: 'Target Discovery', desc: 'Multi-omic screening to surface druggable nodes in complex disease networks.' },
	{ icon: Cpu, title: 'Computational Design', desc: 'In-silico protein and circuit design powered by our generative models.' },
	{ icon: ShieldCheck, title: 'Safety & Regulatory', desc: 'Built-in biosafety switches and IND-ready translational pipelines.' },
	{ icon: Activity, title: 'Diagnostics', desc: 'CRISPR-based molecular assays with clinical-grade sensitivity.' },
];

export const Capabilities = () => {
	return (
		<section
			data-testid={CAPABILITIES.section}
			className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto"
		>
			<motion.div
				variants={fadeUp}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="mb-14"
			>
				<span className="font-mono-space text-xs uppercase tracking-[0.25em] text-[#d4ff00]">
					/ Capabilities
				</span>
				<h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mt-6 max-w-3xl">
					Everything from first hypothesis to the clinic.
				</h2>
			</motion.div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10"
			>
				{services.map((s) => (
					<motion.div
						key={s.title}
						variants={fadeUp}
						className="group relative p-8 md:p-10 border-b border-r border-white/10 hover:bg-white/[0.03] transition-colors"
					>
						<div className="w-12 h-12 flex items-center justify-center border border-white/15 group-hover:border-[#d4ff00] group-hover:bg-[#d4ff00] transition-all">
							<s.icon size={20} className="text-[#d4ff00] group-hover:text-black transition-colors" />
						</div>
						<h3 className="font-syne font-semibold text-xl md:text-2xl mt-6">{s.title}</h3>
						<p className="mt-3 text-zinc-400 leading-relaxed">{s.desc}</p>
						<span className="absolute top-8 right-8 font-mono-space text-xs text-white/20 group-hover:text-[#d4ff00] transition-colors">
							→
						</span>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};
