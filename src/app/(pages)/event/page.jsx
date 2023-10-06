'use client'
import { useState } from 'react'
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Event() {
  const [hover,setHover] = useState(false)
  const [click,setClick] = useState(false)
  return (
    <div className='h-[100vh]'>
    <Canvas camera={{ position: [2, 2, 6] }}>
        <OrbitControls/>
        <mesh onClick={()=>setClick(state=>!state)}
              onPointerEnter={()=> setHover(true)}
              onPointerOut={()=> setHover(false)}
              scale={click ? 3 : 1 }
        >
          <boxGeometry />
          <meshBasicMaterial color={hover ? '#0f0' : '#fff'}/>
        </mesh>
    </Canvas>
    <Link href='/' className='apply-btn absolute top-0'>
        回首頁
    </Link>
    <div className='apply-code'>
      <p className='text-[24px]'>code :</p>
      <code>
        {"const [hover,setHover] = useState(false)"}<br/>
        {"const [click,setClick] = useState(false)"}<br/>
        {"<mesh onClick={()=> setClick(state=>!state) }"}<br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"onPointerEnter={()=> setHover(true) }"}<br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"onPointerOut={()=> setHover(false) }"}<br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"scale={click ? 3 : 1 }"}<br/>
        &emsp;&emsp;{"<boxGeometry />"}<br/>
        &emsp;&emsp;{"<meshBasicMaterial color={hover ? '#0f0' : '#fff'}/>"}<br/>
        {"</mesh>"}<br/>
      </code>
    </div>
  </div>
  )
}
