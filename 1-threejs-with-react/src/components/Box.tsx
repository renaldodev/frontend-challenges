import { BoxGeometryProps, Color,Euler,useLoader } from "@react-three/fiber";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import waterDropsGlass from '../images/water-drops-glass.jpg'
interface IBoxProps extends BoxGeometryProps {
  rotation?:Euler
}

export function Box({args,rotation}:IBoxProps){
    const mapMatirial=useLoader(TextureLoader,waterDropsGlass)
    return <mesh rotation={rotation}>
        <boxBufferGeometry args={args} />
        <meshStandardMaterial map={mapMatirial}/>
    </mesh>
}

