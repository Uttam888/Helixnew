import { useEffect, useRef } from 'react';
import { HERO } from '@/constants/testIds';

// Signature interactive biotech visual: an animated, rotating DNA double helix
// rendered on a 2D canvas with depth shading, glowing nodes and mouse parallax.
export const DNAHelix = () => {
	const canvasRef = useRef(null);
	const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		let width = 0;
		let height = 0;
		let dpr = Math.min(window.devicePixelRatio || 1, 2);

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();

		const ro = new ResizeObserver(resize);
		ro.observe(canvas);

		const onMove = (e) => {
			mouse.current.tx = (e.clientX / window.innerWidth - 0.5) * 2;
			mouse.current.ty = (e.clientY / window.innerHeight - 0.5) * 2;
		};
		window.addEventListener('mousemove', onMove);

		const POINTS = 46;
		const AMP = () => Math.min(width, height) * 0.16;
		let t = 0;
		let raf;

		const draw = () => {
			t += reduce ? 0 : 0.012;
			ctx.clearRect(0, 0, width, height);

			// ease mouse
			mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.06;
			mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.06;

			const cx = width * 0.5 + mouse.current.x * 30;
			const amp = AMP();
			const spacing = height / POINTS;
			const parallaxTilt = mouse.current.y * 0.25;

			const nodes = [];
			for (let i = 0; i < POINTS; i++) {
				const y = i * spacing + spacing / 2;
				const phase = i * 0.42 + t + parallaxTilt;
				// two strands, offset by PI
				for (let s = 0; s < 2; s++) {
					const angle = phase + s * Math.PI;
					const x = cx + Math.sin(angle) * amp;
					const depth = (Math.cos(angle) + 1) / 2; // 0..1 front/back
					nodes.push({ x, y, depth, i, s, angle });
				}
			}

			// connecting rungs (base pairs)
			for (let i = 0; i < POINTS; i++) {
				const a = nodes[i * 2];
				const b = nodes[i * 2 + 1];
				const avgDepth = (a.depth + b.depth) / 2;
				ctx.beginPath();
				ctx.moveTo(a.x, a.y);
				ctx.lineTo(b.x, b.y);
				const useLime = i % 4 === 0;
				ctx.strokeStyle = useLime
					? `rgba(212, 255, 0, ${0.15 + avgDepth * 0.5})`
					: `rgba(0, 240, 255, ${0.06 + avgDepth * 0.22})`;
				ctx.lineWidth = 0.6 + avgDepth * 1.4;
				ctx.stroke();
			}

			// nodes sorted by depth so front draws last
			nodes
				.slice()
				.sort((n1, n2) => n1.depth - n2.depth)
				.forEach((n) => {
					const r = 1.4 + n.depth * 4.2;
					const alpha = 0.2 + n.depth * 0.8;
					const lime = n.s === 0;
					ctx.beginPath();
					ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
					if (lime) {
						ctx.fillStyle = `rgba(212, 255, 0, ${alpha})`;
						ctx.shadowColor = 'rgba(212, 255, 0, 0.9)';
					} else {
						ctx.fillStyle = `rgba(220, 250, 255, ${alpha})`;
						ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
					}
					ctx.shadowBlur = n.depth * 16;
					ctx.fill();
					ctx.shadowBlur = 0;
				});

			raf = requestAnimationFrame(draw);
		};
		draw();

		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			window.removeEventListener('mousemove', onMove);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			data-testid={HERO.canvas}
			className="w-full h-full block"
			aria-hidden="true"
		/>
	);
};
