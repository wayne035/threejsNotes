'use client'
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Useframe() {
  const g = useControls('網格幫手(gridHelper)',{
    size:{value:10,min:10,max:100,step:10},
    NxN:{value:10,min:10,max:100,step:10},
    centerLine:'#fff',
    line:'#fff'
  })
  const a = useControls('軸向幫手(axesHelper)',{
    size:{value:5,min:5,max:100,step:10},
  })

  return (
    <div className='h-[100vh]'>
      <Canvas camera={{ position: [2, 2, 6] }}>
          <OrbitControls/>
          <gridHelper args={[g.size,g.NxN,g.centerLine,g.line]}/>
          <axesHelper args={[a.size]} />
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
          {'import { Canvas } from "@react-three/fiber"'}<br/>
          {'import { OrbitControls } from "@react-three/drei"'}<br/>
          {'<Canvas camera={{ position: [2, 3, 6] }}>'}<br/>
          &emsp;&emsp;{'<OrbitControls/>'}<br/>
          &emsp;&emsp;{"<gridHelper args={[size , N , centerLine , line]}/>"}<br/>
          &emsp;&emsp;{"<axesHelper args={[size]} />"}<br/>
          &emsp;&emsp;{'<mesh>'}<br/>
          &emsp;&emsp;&emsp;&emsp;{'<boxGeometry />'}<br/>
          &emsp;&emsp;&emsp;&emsp;{"<meshBasicMaterial color='#fff'/>"}<br/>
          &emsp;&emsp;{'</mesh>'}<br/>
          {'</Canvas>'}
        </code>
      </div>
    </div>
  )
}