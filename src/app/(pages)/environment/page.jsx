'use client'
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,Environment } from "@react-three/drei"
import { useControls } from "leva"

export default function Useframe() {
  const e = useControls('背景環境(Environment)',{
    BG:{
        options:["apartment","city","dawn","forest","lobby","night","park","studio","sunset","warehouse"]
    },
    blur:{value:0,min:0,max:1,step:.1},
  })

  return (
    <div className='h-[100vh]'>
      <Canvas camera={{ position: [2, 2, 6] }}>
          <OrbitControls/>
          <Environment preset={e.BG} blur={e.blur} background/>
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color='#00f'/>
          </mesh>
      </Canvas>
      <Link href='/' className='apply-btn absolute top-0'>
          回首頁
      </Link>
      <div className='apply-code'>
        <p className='text-[24px]'>code :</p>
        <code>
          {'import { Environment } from "@react-three/drei"'}<br/>
          {'<Canvas>'}<br/>
          &emsp;&emsp;{'<Environment preset={BG} blur={blur} background/>'}<br/>
          &emsp;&emsp;{'...'}<br/>
          {'</Canvas>'}
        </code>
      </div>
    </div>
  )
}
