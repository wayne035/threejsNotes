'use client'
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Useframe() {
  const o = useControls('軌道控制器(OrbitControls)',{
    Pan:{value:true},
    Rotate:{value:true},
    Zoom:{value:true}
  })

  return (
    <div className='h-[100vh]'>
      <Canvas camera={{ position: [2, 2, 6] }}>
          <OrbitControls enablePan={o.Pan} enableRotate={o.Rotate} enableZoom={o.Zoom}/>
          <gridHelper />
          <axesHelper />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color='#fff'/>
          </mesh>
      </Canvas>
      <Link href='/' className='apply-btn absolute top-0'>
          回首頁
      </Link>
      <div className='apply-code'>
        <p className='text-[24px]'>code :</p>
        <code>
          {'import { OrbitControls } from "@react-three/drei"'}<br/>
          {'<Canvas>'}<br/>
          &emsp;&emsp;{'<OrbitControls enablePan={Pan} enableRotate={Rotate} enableZoom={Zoom}/>'}<br/>
          &emsp;&emsp;{'...'}<br/>
          {'</Canvas>'}
        </code>
      </div>
    </div>
  )
}
