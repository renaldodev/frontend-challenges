import { BoxGeometryProps, Euler } from "@react-three/fiber";
interface IBoxProps extends BoxGeometryProps {
  rotation?: Euler;
}

export function BoxNormal({ args, rotation }: IBoxProps) {
  return (
    <mesh rotation={rotation}>
      <boxBufferGeometry args={args} />
      <meshNormalMaterial />
    </mesh>
  );
}
