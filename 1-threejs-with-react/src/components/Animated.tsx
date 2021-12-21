import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./Box";
import { BoxNormal } from "./BoxNormal";
import { SphereAnimated } from "./SpherAnimated";
import Ete from './Ete'

export default function AnimatedPanel() {
  return (
    <> 7410

      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight
          intensity={0.3}
          color={"white"}
          position={[-2, 5, 2]}
        />
        <Suspense fallback={null}>
          <Box args={[3, 3, 3]} rotation={[90, 0, 60]} />
        </Suspense>
      </Canvas>

      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight
          intensity={0.3}
          color={"white"}
          position={[-2, 5, 2]}
        />
        <Suspense fallback={null}>
          <BoxNormal args={[3, 3, 3]} rotation={[90, 0, 20]} />
        </Suspense>
      </Canvas>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight
          intensity={0.3}
          color={"white"}
          position={[-2, 5, 2]}
        />
        <Suspense fallback={null}>
          <SphereAnimated args={[1, 200, 200]} distort={0.5} />
        </Suspense>
      </Canvas>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight
          intensity={0.3}
          color={"white"}
          position={[-2, 5, 2]}
        />
        <Suspense fallback={null}>
          <Ete/>
        </Suspense>
      </Canvas>
    </>
  );
}
