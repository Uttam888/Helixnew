import { useRef, useMemo, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { HERO } from '@/constants/testIds';

const COUNT = 26;
const STEP = 0.36;
const RADIUS = 1.25;
const TWIST = 0.52;

const Bond = ({ start, end }) => {
	const ref = useRef();
	useLayoutEffect(() => {
		const s = new THREE.Vector3(...start);
		const e = new THREE.Vector3(...end);
		const mid = s.clone().add(e).multiplyScalar(0.5);
		const dir = e.clone().sub(s);
		const len = dir.length();
		ref.current.position.copy(mid);
		ref.current.scale.set(1, len, 1);
		ref.current.quaternion.setFromUnitVectors(
			new THREE.Vector3(0, 1, 0),
			dir.clone().normalize()
		);
	}, [start, end]);
	return (
		<mesh ref={ref}>
			<cylinderGeometry args={[0.018, 0.018, 1, 6]} />
			<meshStandardMaterial
				color="#7dd3fc"
				emissive="#00f0ff"
				emissiveIntensity={0.5}
				transparent
				opacity={0.55}
			/>
		</mesh>
	);
};

const Helix = ({ drag }) => {
	const group = useRef();

	const { strandA, strandB, bonds } = useMemo(() => {
		const a = [];
		const b = [];
		const bd = [];
		for (let i = 0; i < COUNT; i++) {
			const y = (i - COUNT / 2) * STEP;
			const angle = i * TWIST;
			const pa = [Math.cos(angle) * RADIUS, y, Math.sin(angle) * RADIUS];
			const pb = [Math.cos(angle + Math.PI) * RADIUS, y, Math.sin(angle + Math.PI) * RADIUS];
			a.push(pa);
			b.push(pb);
			bd.push({ start: pa, end: pb });
		}
		return { strandA: a, strandB: b, bonds: bd };
	}, []);

	useFrame((_, delta) => {
		const d = drag.current;
		if (!group.current) return;
		if (!d.active) {
			d.vy *= 0.94;
			d.rotY += delta * 0.28 + d.vy;
		}
		group.current.rotation.y = d.rotY;
		group.current.rotation.x = THREE.MathUtils.clamp(d.rotX, -0.6, 0.6);
	});

	return (
		<group ref={group}>
			{strandA.map((p, i) => (
				<mesh key={`a${i}`} position={p}>
					<sphereGeometry args={[0.16, 20, 20]} />
					<meshStandardMaterial
						color="#d4ff00"
						emissive="#d4ff00"
						emissiveIntensity={1.4}
						roughness={0.3}
						metalness={0.1}
					/>
				</mesh>
			))}
			{strandB.map((p, i) => (
				<mesh key={`b${i}`} position={p}>
					<sphereGeometry args={[0.16, 20, 20]} />
					<meshStandardMaterial
						color="#e6faff"
						emissive="#00f0ff"
						emissiveIntensity={1.1}
						roughness={0.3}
						metalness={0.1}
					/>
				</mesh>
			))}
			{bonds.map((b, i) => (
				<Bond key={`bond${i}`} start={b.start} end={b.end} />
			))}
		</group>
	);
};

export const DNAHelix3D = () => {
	const drag = useRef({ active: false, lastX: 0, lastY: 0, vy: 0, rotY: 0, rotX: 0 });
	const reduce =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const onDown = (e) => {
		const d = drag.current;
		d.active = true;
		d.lastX = e.clientX;
		d.lastY = e.clientY;
		d.vy = 0;
	};
	const onMove = (e) => {
		const d = drag.current;
		if (!d.active) return;
		const dx = e.clientX - d.lastX;
		const dy = e.clientY - d.lastY;
		d.rotY += dx * 0.008;
		d.rotX += dy * 0.005;
		d.vy = dx * 0.0006;
		d.lastX = e.clientX;
		d.lastY = e.clientY;
	};
	const onUp = () => {
		drag.current.active = false;
	};

	return (
		<div
			data-testid={HERO.canvas}
			className="w-full h-full cursor-grab active:cursor-grabbing"
			onPointerDown={onDown}
			onPointerMove={onMove}
			onPointerUp={onUp}
			onPointerLeave={onUp}
		>
			<Canvas
				camera={{ position: [0, 0, 9.5], fov: 42 }}
				dpr={[1, 1.6]}
				gl={{ antialias: true, alpha: true }}
			>
				<ambientLight intensity={0.4} />
				<pointLight position={[6, 4, 6]} intensity={90} color="#d4ff00" />
				<pointLight position={[-6, -3, 4]} intensity={70} color="#00f0ff" />
				<pointLight position={[0, 0, 8]} intensity={30} color="#ffffff" />
				<Helix drag={drag} />
			</Canvas>
			{!reduce && (
				<span className="pointer-events-none absolute bottom-6 right-6 font-mono-space text-[10px] uppercase tracking-[0.25em] text-white/30">
					Drag to rotate
				</span>
			)}
		</div>
	);
};
