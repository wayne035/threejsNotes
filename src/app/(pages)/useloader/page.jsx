'use client'
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import React from "@/app/components/React"

export default function Useloads() {
  return (
    <div className='h-screen w-screen fixed'>
      <Canvas camera={{ position: [2, 2, 6] }}>
        <React/>
        <spotLight args={['#208ef5',1000]} position={[0,5,5]}/>
        <spotLight args={['#ffffff',1000]} position={[0,5,-4]}/>
      </Canvas>
      <Link href='/' className='apply-btn absolute top-0'>
          回首頁
      </Link>
      <div className='apply-code'>
        <p className='text-[24px]'>code :</p>
        <code>
          {'import { useLoader,Canvas } from "@react-three/fiber"'}<br/>
          {'import { GLTFLoader } from "three/..."'}<br/>
          {'...'}<br/>
          {"const { scene } = useLoader(GLTFLoader,'url')"}<br/>
          {'...'}<br/>
          {"<Canvas>"}<br/>
          &emsp;&emsp;{'<primitive object={scene} rotation={[...]} scale={...}/>'}<br/>
          {'</Canvas>'}
        </code>
      </div>
    </div>
  )
}