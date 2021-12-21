import { Color} from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

interface ISphereAnimatedPros {
  color?: Color;
  args?: any | null;
  distort?:number
}

export function SphereAnimated({color,args,distort}:ISphereAnimatedPros) {
  return (
    <Sphere args={args} scale={2}>
      <MeshDistortMaterial distort={distort} color={color?color:'blue'}/>
    </Sphere>
  );
}
