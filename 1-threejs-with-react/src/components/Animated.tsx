import React from "react";
import { Canvas ,Vector3} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Box} from "./Box";


export default function AnimatedPanel() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={1} />
      <directionalLight intensity={0.3} color={"white"} position={[-2,5,2]} />
      <Box args={[3,3,3]} rotation={[90,0,60]}/>
      {/* <Box args={[3,3,3]} color='61ffca' rotation={[90,0,20]}/> */}
    </Canvas>
  );
}
