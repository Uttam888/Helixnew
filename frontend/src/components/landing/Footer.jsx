import { FOOTER } from '@/constants/testIds';

const cols = [
	{ title: 'Platform', links: ['Design AI', 'CRISPR Suite', 'Cell Foundry', 'Diagnostics'] },
	{ title: 'Company', links: ['About', 'Careers', 'Newsroom', 'Ethics'] },
	{ title: 'Connect', links: ['Twitter / X', 'LinkedIn', 'Research', 'Contact'] },
];

export const Footer = () => {
	return (
		<footer
			data-testid={FOOTER.section}
			className="relative border-t border-white/10 bg-[#050505] px-6 md:px-12 lg:px-24 py-16"
		>
			<div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
				<div className="md:col-span-5">
					<div className="font-syne font-extrabold text-3xl tracking-tight flex items-center gap-2">
						<span className="inline-block w-2 h-2 bg-[#d4ff00] rotate-45" />
						HELIXA<span className="text-[#d4ff00]">.</span>
					</div>
					<p className="mt-5 text-zinc-500 max-w-sm">
						Engineering programmable biology for a healthier planet.
					</p>
				</div>
				{cols.map((c) => (
					<div key={c.title} className="md:col-span-2">
						<h4 className="font-mono-space text-xs uppercase tracking-[0.2em] text-white/40">
							{c.title}
						</h4>
						<ul className="mt-5 space-y-3">
							{c.links.map((l) => (
								<li key={l}>
									<a href="#top" className="text-zinc-400 hover:text-[#d4ff00] transition-colors">
										{l}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-zinc-600 font-mono-space uppercase tracking-[0.15em]">
				<span>© 2026 Helixa Biosciences</span>
				<span>Programming the code of life</span>
			</div>
		</footer>
	);
};
