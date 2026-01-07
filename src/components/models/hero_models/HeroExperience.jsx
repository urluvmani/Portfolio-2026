import { OrbitControls, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, memo } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={isMobile ? 1 : [1, 1.5]}
      frameloop="demand"
      gl={{ powerPreference: "high-performance" }}
    >
      {/* Adaptive performance */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <ambientLight intensity={0.15} color="#1a1a40" />

      {/* Controls only when really needed */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={!isMobile}
        makeDefault
      />

      <Suspense fallback={<mesh />}>
        <HeroLights isMobile={isMobile} />


        {/* Reduce particles on mobile */}
        <Particles count={isMobile ? 30 : 60} />

        <group
          scale={isMobile ? 0.65 : 1}
          position={[0, -3.2, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default memo(HeroExperience);
