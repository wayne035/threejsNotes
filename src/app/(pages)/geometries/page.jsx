'use client'
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Geometries() {
  const g = useControls('幾何體',{
    geometries:{
      options:['boxGeometry','coneGeometry','planeGeometry','torusGeometry','sphereGeometry','tetrahedronGeometry']
    }
  })

  function geometrie(v){
    switch(v){
      case 'boxGeometry':
        return <boxGeometry/>
      case 'coneGeometry' :
        return <coneGeometry/>
      case 'planeGeometry' :
        return <planeGeometry/>
      case 'torusGeometry' :
        return <torusGeometry/>
      case 'sphereGeometry' :
        return <sphereGeometry/>
      case 'tetrahedronGeometry' :
        return <tetrahedronGeometry/>
    }
  }

  return (
    <div className='h-[100vh]'>
      <Canvas camera={{ position: [2, 2, 6] }}>
        <OrbitControls/>
          <mesh>
            {geometrie(`${g.geometries}`)}
          </mesh>
      </Canvas>
      <Link href='/' className='apply-btn absolute top-0'>
          回首頁
      </Link>
      <div className='apply-code'>
        <p className='text-[24px]'>code :</p>
        <code>
          {'import { Canvas } from "@react-three/fiber"'}<br/>
          {'<Canvas camera={{ position: [2, 2, 6] }}>'}<br/>
          &emsp;&emsp;{'<mesh>'}<br/>
          &emsp;&emsp;&emsp;&emsp;{'<{geometries} />'}<br/>
          &emsp;&emsp;{'</mesh>'}<br/>
          {'</Canvas>'}
        </code>
      </div>
    </div>
  )
}