import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 800;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.005;
    }

    return { positions, velocities };
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    const geometry = meshRef.current.geometry;
    const positionAttribute = geometry.getAttribute("position") as THREE.BufferAttribute;
    const array = positionAttribute.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      array[i3] += velocities[i3];
      array[i3 + 1] += velocities[i3 + 1];
      array[i3 + 2] += velocities[i3 + 2];

      // Wrap around
      if (array[i3] > 10) array[i3] = -10;
      if (array[i3] < -10) array[i3] = 10;
      if (array[i3 + 1] > 10) array[i3 + 1] = -10;
      if (array[i3 + 1] < -10) array[i3 + 1] = 10;
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#D4A853"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Lines() {
  const lineRef = useRef<THREE.Line>(null);

  const { positions } = useMemo(() => {
    const points: number[] = [];
    const segments = 100;

    for (let i = 0; i < 5; i++) {
      const yOffset = (i - 2) * 2;
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const x = (t - 0.5) * 20;
        const y = Math.sin(t * Math.PI * 2 + i) * 1.5 + yOffset;
        const z = Math.cos(t * Math.PI + i * 0.5) * 2 - 5;
        points.push(x, y, z);
      }
    }

    return { positions: new Float32Array(points) };
  }, []);

  useFrame(({ clock }) => {
    if (!lineRef.current) return;
    lineRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.1) * 0.05;
  });

  return (
    <line ref={lineRef as any}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
    </line>
  );
}

export function HeroBackground() {
  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <Lines />
      </Canvas>
    </div>
  );
}
