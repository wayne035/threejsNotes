'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Camera(){
    const c = useRef(null)

    const value = ()=>{
        return {
            X:{value:0,min:-10,max:10,step:1},
            Y:{value:0,min:-10,max:10,step:1},
            Z:{value:0,min:-10,max:10,step:1},
            rX:{value:0,min:-2 * Math.PI,max:2 * Math.PI,step:0.01},
            rY:{value:0,min:-2 * Math.PI,max:2 * Math.PI,step:0.01},
            rZ:{value:0,min:-2 * Math.PI,max:2 * Math.PI,step:0.01},
        }
    }

    const camera = useControls('透視相機(PerspectiveCamera)',value())
    const obj = useControls('正方體位置',value())

    return(
      <div className='h-screen w-screen fixed'>
        <Canvas camera={{ position: [2, 3, 6] }}>
          <PerspectiveCamera ref={c}
             position={[camera.X, camera.Y, camera.Z]}
             rotation={[camera.rX, camera.rY, camera.rZ]}
          >
            <OrbitControls/>
            <gridHelper />
            <axesHelper args={[50]} />
            <mesh position={[obj.X , obj.Y , obj.Z]}
                  rotation={[obj.rX, obj.rY, obj.rZ]}
            >
              <boxGeometry />
            </mesh>
          </PerspectiveCamera>
        </Canvas>
        <Link href='/' className='apply-btn absolute top-0'>
            回首頁
        </Link>
        <div className='apply-code'>
           <p className='text-[24px]'>code :</p>
           <code>
             {'import { PerspectiveCamera } from "@react-three/drei"'}<br/>
             {'...'}<br/>
             {'<PerspectiveCamera position={[X , Y , Z]} rotation={rX , rY , rZ]}>'}<br/>
             &emsp;&emsp;{'<mesh position={[X , Y , Z]}> rotation={[rX , rY , rZ]}>'}<br/>
             &emsp;&emsp;&emsp;&emsp;{'<boxGeometry />'}<br/>
             &emsp;&emsp;{'</mesh>'}<br/>
             {'</PerspectiveCamera>'}
           </code>
        </div>
      </div>
    )
}