'use client'
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Lights(){
    const al = useControls('環境光(ambientLight)',{
        color:'#fff',
        intensity:{value:2,min:0,max:10,spep:1},
        visible:true
    })

    const setup = (v) =>{
        const value = (v === 'dl') ? 1 : 10 
        const max = (v === 'dl') ? 10 : 100
        return ({
            color:'#fff',
            intensity:{value , min:value, max, spep:value},
            x:{value:0,min:-10,max:10,spep:1},
            y:{value:5,min:-10,max:10,spep:1},
            z:{value:0,min:-10,max:10,spep:1},
            visible:false
        })
    }
    const dl = useControls('定向光(directionalLight)',setup('dl'))
    const sl = useControls('聚光燈(spotLight)',setup('sl'))

    return(
      <div className='h-[100vh]'>
        <Canvas camera={{ position: [2, 2, 6] }} shadows>
          <axesHelper args={[50]}/>
          <OrbitControls/>
            <mesh position={[0,.5,0]} castShadow>
              <boxGeometry />
              <meshStandardMaterial/>
            </mesh>
            <mesh rotation={[-(Math.PI/2),0,0]} receiveShadow>
              <planeGeometry args={[10,10]}/>
              <meshStandardMaterial color='#0f0'/>
            </mesh>
            <ambientLight args={[al.color, al.intensity]} 
                          visible={al.visible} 
            />
            <directionalLight args={[dl.color, dl.intensity]} 
                              position={[ dl.x , dl.y , dl.z ]} 
                              visible={dl.visible} 
                              castShadow
            />
            <spotLight args={[sl.color, sl.intensity]} 
                       position={[ sl.x , sl.y , sl.z ]} 
                       visible={sl.visible} 
                       castShadow
            />
        </Canvas>
        <Link href='/' className='apply-btn absolute top-0'>
            回首頁
        </Link>
        <div className='apply-code'>
          <p className='text-[24px]'>code :</p>
          <code>
            {'<Canvas shadows >'}<br/>
            &emsp;&emsp;{'<mesh receiveShadow >'}
            &emsp;&emsp;{'...'}
            &emsp;&emsp;{'</mesh>'}<br/>
            &emsp;&emsp;{'<{lights} args={[color, intensity]} position={[ x , y , z ]} '}<br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            {'visible={visible} castShadow />'}<br/>
            {'</Canvas>'}
          </code>
        </div>
      </div>
    )
}