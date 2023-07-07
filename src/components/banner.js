import React from 'react'
import Globe from './globe/Globe'
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Banner() {
  return (
    <>
    <div className='flex h-5/6  bg-black'>
     
      <span className='overflow-hidden text-6xl max-h-full text-white ml-12 pl-20 bg-black block basis-1/2 text-start self-center font-customMont font-semibold italic '>From Earth to the Cosmos: Rockets, Our Gateway to the Stars!</span>
      
      <div className='basis-1/2 '>
        <Canvas  style={{ background: "#000000" }}>
          <Suspense fallback={null}>
            <Globe />
              <OrbitControls
                autoRotate
                enableZoom={false}
              />
          </Suspense>
        </Canvas>
       </div>
    </div>
    </>
  )
}

export default Banner