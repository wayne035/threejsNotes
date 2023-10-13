'use client'
import { Canvas } from '@react-three/fiber'
import HomeModel from './components/HomeModel'
import Basic from './components/Basic'
import { useRef } from 'react'

export default function Home() {
  const body = useRef(null)
  return (
    <>
      <div ref={body} className='fixed h-full w-full bg-[#000]'>
        <Canvas>        
          <ambientLight args={['#fff',2]}/>
          <HomeModel body={body}/>
          <spotLight args={['#fff',1000]} position={[20,40,0]}/>
          <spotLight args={['#fff',8000]} position={[20,40,0]}/>
        </Canvas>
      </div>
      <Basic/>
    </>
  )
}