import Marquee from 'react-fast-marquee';
import { MARQUEE } from '@/constants/testIds';

const words = [
	'Genomic Editing',
	'Synthetic Biology',
	'Cellular Reprogramming',
	'Precision Therapeutics',
	'Protein Design',
];

export const EditorialMarquee = () => {
	return (
		<section
			data-testid={MARQUEE.section}
			className="relative py-16 md:py-24 border-y border-white/10 bg-[#0a0a0c] overflow-hidden"
		>
			<Marquee speed={60} gradient={false} autoFill>
				{words.map((w, i) => (
					<div key={w} className="flex items-center">
						<span
							className={`font-syne font-extrabold text-6xl md:text-8xl tracking-tighter px-8 ${
								i % 2 === 0 ? 'text-stroke' : 'text-white'
							}`}
						>
							{w}
						</span>
						<span className="text-[#d4ff00] text-5xl md:text-7xl px-2">/</span>
					</div>
				))}
			</Marquee>
		</section>
	);
};
