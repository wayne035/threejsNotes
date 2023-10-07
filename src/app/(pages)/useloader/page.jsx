'use client'
import Link from "next/link"
import { useLoader,Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Useloads() {
  const three = useLoader(GLTFLoader,'/models/three.gltf')
  
  return (
    <div className='h-[100vh]'>
      <Canvas camera={{ position: [2, 2, 6] }}>
        <OrbitControls/>
        <primitive object={three.scene} position={[0, 0, 0]} scale={1.5}/>
        <spotLight args={['#fff',1000]} position={[0,5,2]}/>
        <spotLight args={['#fff',1000]} position={[0,5,-2]}/>
      </Canvas>
      <Link href='/' className='apply-btn absolute top-0'>
          回首頁
      </Link>
      <div className='apply-code'>
        <p className='text-[24px]'>code :</p>
        <code>
          {'import { useLoader } from "@react-three/fiber"'}<br/>
          {'import { GLTFLoader } from "three/..."'}<br/>
          {'...'}<br/>
          {"const three = useLoader(GLTFLoader,'url')"}<br/>
          {'...'}<br/>
          {"<Canvas>"}<br/>
          &emsp;&emsp;{'<primitive object={three.scene} position={[0, 0, 0]} scale={1.5}/>'}<br/>
          {'</Canvas>'}
        </code>
      </div>
    </div>
  )
}
