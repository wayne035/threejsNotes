'use client'
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Canva() {
  return (
    <div className='h-screen w-screen fixed'>
      <Canvas camera={{ position: [2, 2, 6] }}>
        <OrbitControls/>
          <mesh>
            <boxGeometry />
          </mesh>
      </Canvas>
      <Link href='/' className='apply-btn absolute top-0'>
          回首頁
      </Link>
      <div className='apply-code'>
        <p className='text-[24px]'>code :</p>
        <code>
          {'import { Canvas } from "@react-three/fiber"'}<br/>
          {'<Canvas camera={{ position: [2, 2, 6] }}>'}<br/>
          &emsp;&emsp;{'<mesh>'}<br/>
          &emsp;&emsp;&emsp;&emsp;{'<boxGeometry />'}<br/>
          &emsp;&emsp;{'</mesh>'}<br/>
          {'</Canvas>'}
        </code>
      </div>
    </div>
  )
}