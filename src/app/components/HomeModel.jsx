'use client'
import { useGLTF,PerspectiveCamera } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useBookToggle } from "../store/bookToggle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { useControls } from "leva"; 

gsap.registerPlugin(ScrollTrigger)

export default function HomeModel({body}) {
  const { nodes, materials } = useGLTF('/models/home.glb')
  const camera = useRef()
  const {setToggle} = useBookToggle()
  // const c = useControls('camera',{
  //   x:{value:13,mix:-20,max:20,step:1},
  //   y:{value:-16,mix:-20,max:20,step:1},
  //   z:{value:17,mix:-20,max:20,step:1},
  //   rX:{value:0,min:-2 * Math.PI,max:2 * Math.PI,step:0.005},
  //   rY:{value:1.64,min:-2 * Math.PI,max:2 * Math.PI,step:0.005},
  //   rZ:{value:0,min:-2 * Math.PI,max:2 * Math.PI,step:0.005},
  // })
  const Link = (e,value) =>{
    e.stopPropagation()
    switch(value){
      case 'threejs':
        return window.open('https://threejs.org/')
      case 'drei':
        return window.open('https://github.com/pmndrs/drei')
      case 'fiber':
        return window.open('https://docs.pmnd.rs/react-three-fiber/getting-started/introduction')
      case 'react':
        return window.open('https://react.dev/')
    }
  }

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:body.current,
        start:'top',
        end: '+=5000',
        scrub:2,
        markers:{
          startColor:'transparent',
          endColor:'transparent',
        },
      }
    });
    tl.to(camera.current.position,{
      x : 9, y : -15, z : 15 
    },0)
    .to(camera.current.rotation,{
      x : .45 
    },0)

    .to(camera.current.rotation,{
      x : 0.1, y : 0
    },.5)
    .to(camera.current.position,{
      x : 4
    },.5)

  },[])

  return (
    <PerspectiveCamera ref={camera} position={[13,-16,17]} rotation={[0, 1.64, 0]}>
      <group dispose={null}>
        <group position={[0, 16.29, 0]} scale={0.01}>
          <group position={[-16, -33, 13]}>
            <group position={[1447.63, -1420.96, -1581.36]} rotation={[0, -1.55, 0]} scale={[5.53, 3.98, 5.05]}>
              <group position={[-0.28, 83.54, -9.17]} scale={1.74}>
                <mesh geometry={nodes.Cube_12001.geometry} material={materials.bedwood} position={[-0.02, -14.69, 70.41]} rotation={[0, -0.02, 0]} scale={[0.89, 0.88, 0.9]} />
                <mesh geometry={nodes.Cube_12002.geometry} material={materials.bedwood} position={[0.67, -29.32, 4.19]} rotation={[0, 1.55, 0]} scale={[1.62, 1.62, 1.58]} />
                <mesh geometry={nodes.Cube_14001.geometry} material={materials.bedwood} position={[2.07, -24.01, -70.37]} rotation={[-0.03, 1.55, 1.6]} scale={[1.62, 1.62, 1.55]} />
                <mesh geometry={nodes.Cube_15001.geometry} material={materials.bedwood} position={[37.42, -13.3, 71.03]} rotation={[0, -0.02, 0]} scale={[0.58, 0.88, 0.9]} />
                <mesh geometry={nodes.Cube_15002.geometry} material={materials.bedwood} position={[-37.15, -13.3, 69.79]} rotation={[0, -0.02, 0]} scale={[0.67, 0.88, 0.9]} />
                <mesh geometry={nodes.Cylinder.geometry} material={materials.bedwood} position={[2.08, -1, -70.28]} rotation={[0.03, 1.55, 1.54]} scale={[2.18, 2.18, 2.37]} />
              </group>
              <mesh geometry={nodes.Cube_15003.geometry} material={materials.sheet} position={[0.53, 48.23, 18.76]} rotation={[0, 1.55, 0]} scale={[3.02, 2.14, 2.87]} />
              <mesh geometry={nodes.Cube_16.geometry} material={materials['材質.003']} position={[-26.41, 89.79, -103.37]} rotation={[-0.68, -0.02, 1.56]} scale={[1.11, 0.61, 1.7]} />
              <mesh geometry={nodes.Cube_75.geometry} material={materials['材質.003']} position={[30.65, 90.02, -102.08]} rotation={[-0.68, -0.02, 1.56]} scale={[1.11, 0.61, 1.7]} />
              <mesh geometry={nodes.Cube_17.geometry} material={materials.sheet} position={[0.46, 47.03, -64.55]} rotation={[-Math.PI / 2, 0, 1.55]} scale={[1.87, 1.87, 1.42]} />
              <mesh geometry={nodes.Cube_74.geometry} material={materials['材質.003']} position={[0.89, 56.61, -1.87]} rotation={[0, 1.55, 0]} scale={[2.82, 2.82, 2.78]} />
            </group>
            <group position={[1827.31, -873.28, -672.17]} rotation={[-0.02, 0.42, -1.57]} scale={[0.74, 1.05, 1.07]} onClick={(e)=>{e.stopPropagation(),setToggle()}}>
              <mesh geometry={nodes['book-title'].geometry} material={materials['材質.015']} position={[-22.7, 32.77, 1.79]} rotation={[0, -1.57, 0]} />
              <mesh geometry={nodes.bookbody.geometry} material={materials['材質.013']} position={[-16.54, 9.14, 9.8]} scale={[0.99, 1.01, 1]} />
              <mesh geometry={nodes.page.geometry} material={materials['材質.003']} position={[-0.29, 0.87, 3.34]} scale={[0.99, 1.01, 1.09]} />
              <mesh geometry={nodes.paper.geometry} material={materials['材質.015']} position={[20.2, -38.66, -33.94]} rotation={[-0.09, -1.42, 0.24]} scale={[0.78, 0.7, 1.54]} />
            </group>
            <group position={[1866.12, -765.3, -402.12]} rotation={[Math.PI, -1.46, Math.PI]} scale={[0.8, 1.05, 0.78]}>
              <group position={[-13.7, -104.33, 11.98]}>
                <group position={[-92.38, -0.21, -86.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.11, 0.21]}>
                  <mesh geometry={nodes.Mesh_3.geometry} material={materials['材質.015']} />
                  <mesh geometry={nodes.Mesh_3001.geometry} material={materials['材質.015']} position={[134, 0, 0]} />
                  <mesh geometry={nodes.Mesh_3002.geometry} material={materials['材質.015']} position={[268, 0, 0]} />
                  <mesh geometry={nodes.Mesh_3003.geometry} material={materials['材質.015']} position={[402, 0, 0]} />
                  <mesh geometry={nodes.Mesh_3004.geometry} material={materials['材質.015']} position={[536, 0, 0]} />
                  <mesh geometry={nodes.Mesh_3005.geometry} material={materials['材質.015']} position={[670, 0, 0]} />
                  <mesh geometry={nodes.Mesh_3006.geometry} material={materials['材質.015']} position={[804, 0, 0]} />
                  <mesh geometry={nodes.Mesh_3007.geometry} material={materials['材質.015']} position={[938, 0, 0]} />
                  <mesh geometry={nodes.Mesh_3008.geometry} material={materials['材質.015']} position={[1072, 0, 0]} />
                  <mesh geometry={nodes.Mesh_3009.geometry} material={materials['材質.015']} position={[1206, 0, 0]} />
                </group>
                <group position={[-140.42, -0.21, -11.16]} rotation={[Math.PI / 2, 0, 0]} scale={0.21}>
                  <mesh geometry={nodes.Mesh_5.geometry} material={materials['材質.015']} />
                  <mesh geometry={nodes.Mesh_5001.geometry} material={materials['材質.015']} position={[134, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5002.geometry} material={materials['材質.015']} position={[268, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5003.geometry} material={materials['材質.015']} position={[402, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5004.geometry} material={materials['材質.015']} position={[536, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5005.geometry} material={materials['材質.015']} position={[670, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5006.geometry} material={materials['材質.015']} position={[804, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5007.geometry} material={materials['材質.015']} position={[938, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5008.geometry} material={materials['材質.015']} position={[1072, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5009.geometry} material={materials['材質.015']} position={[1206, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5010.geometry} material={materials['材質.015']} position={[1340, 0, 0]} />
                  <mesh geometry={nodes.Mesh_5011.geometry} material={materials['材質.015']} position={[1474, 0, 0]} />
                </group>
                <group position={[-140.42, -0.21, -47.89]} rotation={[Math.PI / 2, 0, 0]} scale={0.21}>
                  <mesh geometry={nodes.Mesh_6.geometry} material={materials['材質.015']} />
                  <mesh geometry={nodes.Mesh_6001.geometry} material={materials['材質.015']} position={[134, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6002.geometry} material={materials['材質.015']} position={[268, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6003.geometry} material={materials['材質.015']} position={[402, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6004.geometry} material={materials['材質.015']} position={[536, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6005.geometry} material={materials['材質.015']} position={[670, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6006.geometry} material={materials['材質.015']} position={[804, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6007.geometry} material={materials['材質.015']} position={[938, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6008.geometry} material={materials['材質.015']} position={[1072, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6009.geometry} material={materials['材質.015']} position={[1206, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6010.geometry} material={materials['材質.015']} position={[1340, 0, 0]} />
                  <mesh geometry={nodes.Mesh_6011.geometry} material={materials['材質.015']} position={[1474, 0, 0]} />
                </group>
                <mesh geometry={nodes.Cube_10.geometry} material={materials['材質.015']} position={[-137.32, 0, 21.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.16, 0.21]} />
                <mesh geometry={nodes.Cube_12.geometry} material={materials['材質.015']} position={[-100.06, 0, 21.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.16, 0.21]} />
                <mesh geometry={nodes.Cube_13.geometry} material={materials['材質.015']} position={[105.5, 0, 21.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.16, 0.21]} />
                <mesh geometry={nodes.Cube_14.geometry} material={materials['材質.015']} position={[138.63, 0, 21.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.16, 0.21]} />
                <mesh geometry={nodes.Cube_11.geometry} material={materials['材質.015']} position={[5.67, 0, 24.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.16, 0.21]} />
                <mesh geometry={nodes.Cube_15.geometry} material={materials['材質.015']} position={[2.38, 0.65, 67]} rotation={[Math.PI / 2, 0, 0]} scale={[0.18, 0.14, 0.18]} />
                <mesh geometry={nodes.Cube_4.geometry} material={materials['材質.015']} position={[-139.99, -0.21, -80.67]} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
                <mesh geometry={nodes.Cube_5.geometry} material={materials['材質.015']} position={[-92.38, -0.21, -86.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.11, 0.21]} />
                <mesh geometry={nodes.Cube_6.geometry} material={materials['材質.015']} position={[-92.38, -0.21, -86.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.11, 0.21]} />
                <mesh geometry={nodes.Cube_7.geometry} material={materials['材質.015']} position={[-140.42, -0.21, -47.89]} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
                <mesh geometry={nodes.Cube_8.geometry} material={materials['材質.015']} position={[-140.42, -0.21, -11.16]} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
              </group>
              <mesh geometry={nodes.bottompart.geometry} material={materials['材質.014']} position={[0, -112.25, 0.82]} rotation={[Math.PI / 2, 0, 0]} />
              <mesh geometry={nodes.laptopbackscreen.geometry} material={materials['材質.014']} position={[0, 1.7, -142.56]} rotation={[-0.26, 0, 0]} />
              <mesh geometry={nodes.screen.geometry} material={materials.black} position={[0, 5.7, -133.24]} rotation={[-0.26, 0, 0]} scale={[0.93, 0.92, 0.25]} />
            </group>
            <group position={[1926.42, -1417.22, -503.45]} rotation={[0, -1.57, 0]} scale={[1.7, 2.03, 2.87]}>
              <mesh geometry={nodes.backpiece.geometry} material={nodes.backpiece.material} position={[0, 228.81, -56.2]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.98, 1.94, 0.48]} />
              <mesh geometry={nodes.keyboardtable.geometry} material={materials.table} position={[0.73, 203.31, 50.46]} scale={[0.91, 0.78, 0.48]} />
              <mesh geometry={nodes.rail_l.geometry} material={materials.black} position={[152.48, 203.31, 50.46]} scale={[0.02, 1.11, 0.35]} />
              <mesh geometry={nodes.rail_r.geometry} material={materials.black} position={[-151.02, 203.31, 50.46]} scale={[0.02, 1.11, 0.35]} />
              <mesh geometry={nodes.support_l.geometry} material={materials.table} position={[161.14, 125.4, 14.95]} rotation={[0, 0, -Math.PI / 2]} scale={[1.05, 1.94, 0.24]} />
              <mesh geometry={nodes.support_l_2.geometry} material={materials.table} position={[-155.13, 125.4, 14.95]} rotation={[0, 0, -Math.PI / 2]} scale={[1.05, 1.94, 0.24]} />
              <mesh geometry={nodes.table.geometry} material={materials.table} position={[0, 251.96, 6.6]} scale={[1.05, 1.94, 0.48]} />
            </group>
            <group position={[2124.77, 21.3, -1116.66]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[1.24, 1.93, 0.62]}>
              <mesh geometry={nodes.Rectangle.geometry} material={materials['材質.015']} position={[0.34, -0.55, 30.18]} />
              <mesh geometry={nodes.Rectangle_3.geometry} material={materials.frame} position={[-1.61, 0, -17.53]} />
            </group>
            <group position={[-123.77, -389.79, -2177.81]}>
              <group position={[-211.66, 81.99, 30.77]} scale={[0.87, 0.87, 1]} onClick={(e)=>Link(e,'threejs')}>
                <mesh geometry={nodes.frame1.geometry} material={materials.frame} position={[0, 0, -17.53]} />
                <mesh geometry={nodes.threejsscreen.geometry} material={materials.threeIMG} position={[0, 0, 2.98]} scale={0.94} />
              </group>
              <group position={[137.73, 291.31, 30.77]} scale={[0.46, 0.47, 1]} onClick={(e)=>Link(e,'drei')}>
                <mesh geometry={nodes.frame1001.geometry} material={materials.frame} position={[0, 0, -17.53]} />
                <mesh geometry={nodes.dreiscreen.geometry} material={materials.dreiIMG} position={[0, 0, 2.98]} scale={0.94} />
              </group>
              <group position={[208.08, -38.82, 21.23]} rotation={[0.14, 0.01, 0]} scale={[1.31, 1.17, 1.16]} onClick={(e)=>Link(e,'fiber')}>
                <mesh geometry={nodes.frame3.geometry} material={materials.frame} position={[0, 0, -0.36]} rotation={[-0.13, 0, 0]} />
                <mesh geometry={nodes.screen3.geometry} material={materials.fiberIMG} position={[-0.56, -0.28, 12.36]} rotation={[-0.13, 0, -1.57]} />
              </group>
              <group position={[-22.73, -326.09, 30.77]} scale={[0.81, 0.35, 1]} onClick={(e)=>Link(e,'react')}>
                <mesh geometry={nodes.frame4.geometry} material={materials.frame} position={[0, 0, -17.53]} />
                <mesh geometry={nodes.screen4.geometry} material={materials.reactIMG} position={[0, 0, 2.98]} scale={0.94} />
              </group>
            </group>
            <group position={[1139.32, -419.44, -2156.04]} scale={[1.33, 0.9, 1]}>
              <mesh geometry={nodes.Cube_4001.geometry} material={materials.window} position={[0.63, 0.94, -10.81]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh geometry={nodes.Cube_5001.geometry} material={materials.window} position={[1.69, 181.53, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh geometry={nodes.screen001.geometry} material={materials.windowBG} position={[0, 0, 9.16]} rotation={[0, 0, -Math.PI / 2]} />
            </group>
            <mesh geometry={nodes.floor.geometry} material={materials.floor} position={[160.73, -1509.46, 15.02]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[1.33, 1, 9.57]} />
            <mesh geometry={nodes.wallC.geometry} material={materials.wall} position={[2257.66, 57.76, -14.56]} rotation={[0, -1.57, 0]} scale={[1, 0.86, 14.73]} />
            <mesh geometry={nodes.wallL.geometry} material={materials.wall} position={[183.36, 60.23, -2293.15]} scale={[1.16, 1.44, 13.4]} />
          </group>
        </group>
        <group position={[-24.03, 3.24, -7.64]} scale={0.01}>
          <group position={[4032.38, -353.56, 507.77]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={2.53}>
            <mesh geometry={nodes.Cube_48.geometry} material={materials.black} position={[85.01, 299.63, -120.06]} rotation={[0, 1.55, 0]} scale={[4.1, 5.8, 3.1]} />
            <mesh geometry={nodes.Cube_49.geometry} material={materials['材質.014']} position={[84.94, 230.48, -116.28]} rotation={[0, 1.55, 0]} scale={3.1} />
            <mesh geometry={nodes.Cube_50.geometry} material={materials.black} position={[87.78, 193.67, -57.02]} rotation={[-Math.PI / 2, 0, 1.55]} scale={[4.63, 4.24, 1.92]} />
            <mesh geometry={nodes.Cylinder_12.geometry} material={materials['材質.014']} position={[88.48, 154.75, -57.04]} rotation={[0, -0.02, Math.PI]} scale={[0.39, 0.67, 0.39]} />
            <mesh geometry={nodes.Cylinder_13.geometry} material={materials.black} position={[87.95, 100.65, 5.18]} rotation={[0, -Math.PI / 9, Math.PI / 2]} scale={[2.43, 0.53, 2.43]} />
            <mesh geometry={nodes.Cylinder_14.geometry} material={materials.black} position={[90.12, 100.65, -118.92]} rotation={[0, -0.02, Math.PI / 2]} scale={[2.43, 0.53, 2.43]} />
            <mesh geometry={nodes.Cylinder_15.geometry} material={materials.black} position={[152.4, 100.65, -58.92]} rotation={[0, -0.84, Math.PI / 2]} scale={[2.43, 0.53, 2.43]} />
            <mesh geometry={nodes.Cylinder_16.geometry} material={materials.black} position={[25.04, 106.37, -59.01]} rotation={[-Math.PI, -1.26, -Math.PI / 2]} scale={[2.43, 0.53, 2.43]} />
            <mesh geometry={nodes.Merged_Geometry.geometry} material={materials['材質.014']} position={[88.99, 118.21, -55.97]} />
        </group>
      </group>
        <mesh geometry={nodes.booktext.geometry} material={materials.black} position={[18.17, 7.44, -7.01]} rotation={[0, -1.09, 0]} />
        <mesh geometry={nodes.文字004.geometry} material={materials.black} position={[20.88, 15.68, -15.48]} rotation={[Math.PI / 2, 0, 1.57]} />
        <mesh geometry={nodes.文字001.geometry} material={materials.black} position={[-4.62, 17.02, -21.33]} rotation={[1.6, 0, 0]} />
        <mesh geometry={nodes.文字002.geometry} material={materials.black} position={[20.75, 16.92, -15.28]} rotation={[1.57, 0, 1.56]} />
      </group>
    </PerspectiveCamera>
  )
}
useGLTF.preload('/models/home.glb')
