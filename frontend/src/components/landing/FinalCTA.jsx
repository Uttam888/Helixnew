import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import axios from 'axios';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { FINAL_CTA } from '@/constants/testIds';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const FinalCTA = () => {
	const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' });
	const [status, setStatus] = useState('idle'); // idle | loading | success | error
	const [error, setError] = useState('');

	const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

	const submit = async (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) {
			setError('Please fill in your name, email and message.');
			return;
		}
		setError('');
		setStatus('loading');
		try {
			await axios.post(`${API}/contact`, form);
			setStatus('success');
			setForm({ name: '', email: '', organization: '', message: '' });
		} catch (err) {
			setStatus('error');
			setError('Something went wrong. Please try again.');
		}
	};

	return (
		<section
			id="contact"
			data-testid={FINAL_CTA.section}
			className="relative py-28 md:py-40 px-6 md:px-12 border-t border-white/10 overflow-hidden"
		>
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#d4ff00]/[0.06]" />
			<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-[400px] w-[700px] rounded-full bg-[#d4ff00]/10 blur-[160px]" />

			<div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
				<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
					<span className="font-mono-space text-xs uppercase tracking-[0.25em] text-[#d4ff00]">
						/ Partner with us
					</span>
					<h2 className="font-syne font-extrabold text-5xl md:text-7xl tracking-tighter leading-[0.95] mt-8">
						Let&apos;s engineer
						<br />
						what&apos;s next.
					</h2>
					<p className="mt-8 text-lg text-zinc-400 max-w-md">
						Whether you&apos;re a researcher, clinician or investor — request
						access and our team will be in touch within two business days.
					</p>
					<a
						href="mailto:hello@helixa.bio"
						data-testid={FINAL_CTA.button}
						className="group mt-10 inline-flex items-center gap-2 font-mono-space text-xs uppercase tracking-[0.15em] text-white hover:text-[#d4ff00] transition-colors"
					>
						or email hello@helixa.bio
						<ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform" />
					</a>
				</motion.div>

				<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
					{status === 'success' ? (
						<div
							data-testid={FINAL_CTA.success}
							className="border border-[#d4ff00]/40 bg-[#d4ff00]/[0.04] p-10 flex flex-col items-start gap-4"
						>
							<div className="w-12 h-12 flex items-center justify-center bg-[#d4ff00] text-black">
								<Check size={22} />
							</div>
							<h3 className="font-syne font-semibold text-2xl">Request received.</h3>
							<p className="text-zinc-400">
								Thanks for reaching out. Our team will review your request and
								respond shortly.
							</p>
							<button
								onClick={() => setStatus('idle')}
								className="mt-2 font-mono-space text-xs uppercase tracking-[0.15em] text-[#d4ff00] hover:underline"
							>
								Send another →
							</button>
						</div>
					) : (
						<form
							onSubmit={submit}
							data-testid={FINAL_CTA.form}
							className="border border-white/10 bg-white/[0.02] p-7 md:p-9 flex flex-col gap-5"
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
								<Field
									label="Name *"
									testid={FINAL_CTA.nameInput}
									value={form.name}
									onChange={update('name')}
									placeholder="Ada Lovelace"
								/>
								<Field
									label="Email *"
									type="email"
									testid={FINAL_CTA.emailInput}
									value={form.email}
									onChange={update('email')}
									placeholder="you@lab.org"
								/>
							</div>
							<Field
								label="Organization"
								testid={FINAL_CTA.orgInput}
								value={form.organization}
								onChange={update('organization')}
								placeholder="Institute / Company"
							/>
							<div className="flex flex-col gap-2">
								<label className="font-mono-space text-[10px] uppercase tracking-[0.2em] text-white/50">
									Message *
								</label>
								<textarea
									data-testid={FINAL_CTA.messageInput}
									value={form.message}
									onChange={update('message')}
									rows={4}
									placeholder="Tell us about your program or interest…"
									className="bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-[#d4ff00] focus:outline-none transition-colors resize-none"
								/>
							</div>

							{error && (
								<p className="text-sm text-red-400 font-mono-space">{error}</p>
							)}

							<button
								type="submit"
								data-testid={FINAL_CTA.submit}
								disabled={status === 'loading'}
								className="group inline-flex items-center justify-center gap-2 bg-[#d4ff00] text-black font-mono-space text-xs uppercase tracking-[0.15em] px-8 py-5 hover:scale-[1.02] transition-transform glow-lime disabled:opacity-60 disabled:hover:scale-100"
							>
								{status === 'loading' ? (
									<>
										<Loader2 size={16} className="animate-spin" /> Sending…
									</>
								) : (
									<>
										Request access
										<ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
									</>
								)}
							</button>
						</form>
					)}
				</motion.div>
			</div>
		</section>
	);
};

const Field = ({ label, testid, type = 'text', value, onChange, placeholder }) => (
	<div className="flex flex-col gap-2">
		<label className="font-mono-space text-[10px] uppercase tracking-[0.2em] text-white/50">
			{label}
		</label>
		<input
			data-testid={testid}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-[#d4ff00] focus:outline-none transition-colors"
		/>
	</div>
);
