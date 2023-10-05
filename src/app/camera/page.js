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
            pX:{value:0,min:-10,max:10,step:1},
            pY:{value:0,min:-10,max:10,step:1},
            pZ:{value:0,min:-10,max:10,step:1},
            rX:{value:0,min:-2 * Math.PI,max:2 * Math.PI,step:0.01},
            rY:{value:0,min:-2 * Math.PI,max:2 * Math.PI,step:0.01},
            rZ:{value:0,min:-2 * Math.PI,max:2 * Math.PI,step:0.01},
        }
    }

    const camera = useControls('透視相機(PerspectiveCamera)',value())
    const obj = useControls('正方體位置',value())
    const color = useControls('color',{ color:'#cc00cc'})

    return(
      <div className='h-[100vh]'>
        <Canvas camera={{ position: [2, 3, 6] }}>
          <PerspectiveCamera ref={c}
             position={[camera.pX, camera.pY, camera.pZ]}
             rotation={[camera.rX, camera.rY, camera.rZ]}
          >
            <OrbitControls/>
            <gridHelper />
            <axesHelper args={[50]} />
            <mesh position={[obj.pX , obj.pY , obj.pZ]}
                  rotation={[obj.rX, obj.rY, obj.rZ]}
            >
              <boxGeometry />
              <meshBasicMaterial color={color.color}/>
            </mesh>
          </PerspectiveCamera>
        </Canvas>
        <Link href='/' className='apply-btn absolute top-0'>
            回首頁
        </Link>
        <div className='absolute bottom-0 text-[#fff] m-2 leading-8 font-lg border-2 p-3 rounded-md bg-[#000]'>
           <p className='text-[24px]'>code :</p>
           <code>
             {'<PerspectiveCamera position={[x , y , z]} rotation={[x , y , z]}>'}<br/>
             &emsp;&emsp;{'<mesh position={[x , y , z]}> rotation={[x , y , z]}>'}<br/>
             &emsp;&emsp;&emsp;&emsp;{'<boxGeometry />'}<br/>
             &emsp;&emsp;&emsp;&emsp;{'<meshBasicMaterial color="#cc00cc" />'}<br/>
             &emsp;&emsp;{'</mesh>'}<br/>
             {'</PerspectiveCamera>'}
           </code>
        </div>
      </div>
    )
}