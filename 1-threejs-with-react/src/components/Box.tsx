import { BoxGeometryProps, Color,Euler } from "@react-three/fiber";

interface IBoxProps extends BoxGeometryProps {
  color?: Color;
  rotation?:Euler
}

export function Box({args,color,rotation}:IBoxProps){
    return <mesh rotation={rotation}>
        <boxBufferGeometry args={args} />
        <meshLambertMaterial color={color?color:'blue'}/>
    </mesh>
}

