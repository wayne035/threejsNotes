'use client'
import Link from "next/link"
import { useRef } from 'react'
import { Canvas,useFrame } from "@react-three/fiber"
import { OrbitControls,PerspectiveCamera } from "@react-three/drei"
import { useControls } from "leva"

export default function Useframe() {
  const mesh = useRef(null)
  const camera = useRef(null)
  let objFrame = useControls('ObjectFrame',{
    rX:{value:0,min:-2,max:2,step:.01},
    rY:{value:0,min:-2,max:2,step:.01},
    rZ:{value:0,min:-2,max:2,step:.01},
  })
  let cameraFrame = useControls('CameraFrame',{
    rX:{value:0,min:-2,max:2,step:.01},
    rY:{value:0,min:-2,max:2,step:.01},
    rZ:{value:0,min:-2,max:2,step:.01},
  })

  function Animation(){
    useFrame(()=>{
      mesh.current.rotation.x += objFrame.rX
      mesh.current.rotation.y += objFrame.rY
      mesh.current.rotation.z += objFrame.rZ
      camera.current.rotation.x += cameraFrame.rX
      camera.current.rotation.y += cameraFrame.rY
      camera.current.rotation.z += cameraFrame.rZ
    })
  }
  const reset = ()=>{
    mesh.current.rotation.x = 0
    mesh.current.rotation.y = 0
    mesh.current.rotation.z = 0
    camera.current.rotation.x = 0
    camera.current.rotation.y = 0
    camera.current.rotation.z = 0
    cameraFrame.rX = 0
    cameraFrame.rY = 0
    cameraFrame.rZ = 0
    objFrame.rX = 0
    objFrame.rY = 0
    objFrame.rZ = 0
  }

  return (
    <div className='h-screen w-screen fixed'>
      <Canvas camera={{ position: [2, 3, 6] }}>
        <PerspectiveCamera ref={camera} position={[0,0,0]}>
          <OrbitControls/>
          <gridHelper />
          <axesHelper args={[50]} />
          <mesh ref={mesh} position={[0,0,0]}>
            <boxGeometry />
            <meshBasicMaterial color='#fff'/>
          </mesh>
          <Animation/>
        </PerspectiveCamera>
      </Canvas>
      <Link href='/' className='apply-btn absolute top-0'>
          回首頁
      </Link>
      <button className="absolute top-[15%] apply-btn" onClick={reset}>
        重設
      </button>
      <div className='apply-code'>
        <p className='text-[24px]'>code :</p>
        <code>
          {'import { useFrame } from "@react-three/fiber"'}<br/>
          {'function Animation(){'}<br/>
          &emsp;{'useFrame(()=>{'}<br/>
          &emsp;&emsp;{'mesh.current.rotation.x += rX'}<br/>
          &emsp;&emsp;{'...'}<br/>
          &emsp;&emsp;{'camera.current.rotation.x += rX'}<br/>
          &emsp;&emsp;{'...'}<br/>
          &emsp;{'})'}<br/>
          {'}'}<br/>
          {'<Animation/> //放置Canvas裡'}
        </code>
      </div>
    </div>
  )
}