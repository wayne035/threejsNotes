'use client'
import { useEffect, useRef } from 'react'
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import gsap from 'gsap'

export default function React() {
  const react = useRef(null)
  const { scene } = useLoader(GLTFLoader,'/models/react.gltf')
  
  useEffect(()=>{
    const tl = gsap.timeline({repeat:-1})
    tl.set(react.current.position,{y:0})
    tl.to(react.current.position,{
        y:'+=1',duration:2.5,ease:'Sine.easeInOut'
    })
    .to(react.current.position,{
        y:'-=1',duration:2.5,ease:'Sine.easeInOut'
    })
  },[])

  return (
    <primitive ref={react} object={scene} position={[2, -.5, 0]} 
               rotation={[-.2,0,0]} scale={4.5}
    />
  )
}
