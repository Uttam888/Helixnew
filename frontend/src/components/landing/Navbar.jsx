import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/constants/testIds';

const links = [
	{ label: 'About', href: '#about', id: 'about', tid: NAV.linkAbout },
	{ label: 'Technology', href: '#technology', id: 'technology', tid: NAV.linkTech },
	{ label: 'Cases', href: '#cases', id: 'cases', tid: NAV.linkCases },
	{ label: 'Impact', href: '#impact', id: 'impact', tid: NAV.linkImpact },
];

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState('');

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		links.forEach((l) => {
			const el = document.getElementById(l.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return (
		<motion.header
			data-testid={NAV.wrapper}
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
				scrolled
					? 'bg-black/50 backdrop-blur-xl border-b border-white/10'
					: 'bg-transparent border-b border-transparent'
			}`}
		>
			<nav className="mx-auto max-w-[1600px] px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
				<a
					href="#top"
					data-testid={NAV.logo}
					className="font-syne font-extrabold text-xl md:text-2xl tracking-tight flex items-center gap-2 group"
				>
					<span className="inline-block w-2 h-2 bg-[#d4ff00] rotate-45 group-hover:scale-150 transition-transform" />
					HELIXA
					<span className="text-[#d4ff00]">.</span>
				</a>

				<div className="hidden md:flex items-center gap-9">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							data-testid={l.tid}
							className={`relative font-mono-space text-xs uppercase tracking-[0.15em] transition-colors ${
								active === l.id ? 'text-[#d4ff00]' : 'text-white/60 hover:text-white'
							}`}
						>
							{l.label}
							{active === l.id && (
								<motion.span
									layoutId="nav-active"
									className="absolute -bottom-1.5 left-0 right-0 h-px bg-[#d4ff00]"
								/>
							)}
						</a>
					))}
					<a
						href="#contact"
						data-testid={NAV.cta}
						className="font-mono-space text-xs uppercase tracking-[0.15em] px-5 py-2.5 border border-white/20 hover:bg-[#d4ff00] hover:text-black hover:border-[#d4ff00] transition-all"
					>
						Request Access
					</a>
				</div>

				<button
					data-testid={NAV.menuToggle}
					onClick={() => setOpen((v) => !v)}
					className="md:hidden text-white p-2"
					aria-label="Toggle menu"
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</nav>

			<AnimatePresence>
				{open && (
					<motion.div
						data-testid={NAV.mobileMenu}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
						className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
					>
						<div className="px-6 py-6 flex flex-col gap-5">
							{links.map((l) => (
								<a
									key={l.href}
									href={l.href}
									onClick={() => setOpen(false)}
									className="font-syne text-2xl text-white/80 hover:text-[#d4ff00]"
								>
									{l.label}
								</a>
							))}
							<a
								href="#contact"
								onClick={() => setOpen(false)}
								className="font-mono-space text-xs uppercase tracking-[0.15em] px-5 py-3 bg-[#d4ff00] text-black text-center"
							>
								Request Access
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};
