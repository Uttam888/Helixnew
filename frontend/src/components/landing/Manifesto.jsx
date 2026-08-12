import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import { ABOUT } from '@/constants/testIds';

const chapters = [
	{
		no: '01',
		tag: 'Origin',
		title: 'We treat biology as an engineering discipline.',
		body: 'Every organism runs on code. We build the tools to read it with precision and rewrite it with intent — moving from observation to authorship.',
	},
	{
		no: '02',
		tag: 'Method',
		title: 'Programmable cells, designed with computation.',
		body: 'Our design–build–test–learn loop couples deep-learning models with automated wet-lab foundries, compressing years of discovery into weeks.',
	},
	{
		no: '03',
		tag: 'Purpose',
		title: 'Therapeutics that adapt to the patient.',
		body: 'From oncology to rare genetic disease, we engineer living medicines that sense, compute and respond inside the body.',
	},
];

const scientistImg =
	'https://images.pexels.com/photos/17571899/pexels-photo-17571899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

export const Manifesto = () => {
	return (
		<section
			id="about"
			data-testid={ABOUT.section}
			className="relative py-28 md:py-40 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto"
		>
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
				<div className="lg:col-span-4">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={viewportOnce}
						className="sticky top-28"
					>
						<span className="font-mono-space text-xs uppercase tracking-[0.25em] text-[#d4ff00]">
							/ The Manifesto
						</span>
						<h2 className="font-syne font-bold text-4xl md:text-5xl tracking-tight leading-none mt-6">
							Biology,<br />rewritten.
						</h2>
						<div className="mt-10 overflow-hidden border border-white/10">
							<img
								src={scientistImg}
								alt="Researcher working in a dark laboratory"
								loading="lazy"
								className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
							/>
						</div>
					</motion.div>
				</div>

				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="show"
					viewport={viewportOnce}
					className="lg:col-span-8 flex flex-col"
				>
					{chapters.map((c) => (
						<motion.div
							key={c.no}
							variants={fadeUp}
							className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-t border-white/10 first:border-t-0 md:first:border-t"
						>
							<div className="md:col-span-3 flex md:flex-col gap-3 items-baseline">
								<span className="font-mono-space text-5xl md:text-6xl text-white/15">{c.no}</span>
								<span className="font-mono-space text-xs uppercase tracking-[0.25em] text-[#d4ff00]">
									{c.tag}
								</span>
							</div>
							<div className="md:col-span-9">
								<h3 className="font-syne font-semibold text-2xl md:text-4xl tracking-tight leading-tight">
									{c.title}
								</h3>
								<p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
									{c.body}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
