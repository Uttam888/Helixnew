import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { FINAL_CTA } from '@/constants/testIds';

export const FinalCTA = () => {
	return (
		<section
			id="contact"
			data-testid={FINAL_CTA.section}
			className="relative py-28 md:py-44 px-6 md:px-12 border-t border-white/10 overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#d4ff00]/[0.06]" />
			<div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[400px] w-[700px] rounded-full bg-[#d4ff00]/10 blur-[160px]" />

			<motion.div
				variants={fadeUp}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="relative z-10 max-w-4xl mx-auto text-center"
			>
				<span className="font-mono-space text-xs uppercase tracking-[0.25em] text-[#d4ff00]">
					/ Partner with us
				</span>
				<h2 className="font-syne font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] mt-8">
					Let&apos;s engineer
					<br />
					what&apos;s next.
				</h2>
				<p className="mt-8 text-lg text-zinc-400 max-w-xl mx-auto">
					Whether you&apos;re a researcher, clinician or investor — join us in
					building the operating system for biology.
				</p>
				<div className="mt-12 flex flex-wrap items-center justify-center gap-4">
					<a
						href="mailto:hello@helixa.bio"
						data-testid={FINAL_CTA.button}
						className="group inline-flex items-center gap-2 bg-[#d4ff00] text-black font-mono-space text-xs uppercase tracking-[0.15em] px-8 py-5 hover:scale-105 transition-transform glow-lime"
					>
						Request access
						<ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
					</a>
					<a
						href="#about"
						className="inline-flex items-center gap-2 border border-white/20 text-white font-mono-space text-xs uppercase tracking-[0.15em] px-8 py-5 hover:border-[#d4ff00] hover:text-[#d4ff00] transition-colors"
					>
						Read our science
					</a>
				</div>
			</motion.div>
		</section>
	);
};
