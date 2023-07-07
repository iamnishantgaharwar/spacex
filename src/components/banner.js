import React from 'react'
import Globe from './globe/Globe'
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';


function Banner() {
  return (
    <>
    <div className='flex h-5/6  bg-black'>
     <div className='basis-1/2 text-white self-center ml-12 pl-20'>
      <span className='overflow-hidden  text-6xl max-h-full  bg-black block  text-start  font-customMont font-semibold italic '>From Earth to the Cosmos: Rockets, Our Gateway to the Stars!</span>
      <Link to={"/explore"}>
      <button 
      className='
      hover:bg-slate-100
      p-4 
      rounded-full
      bg-white 
      text-black 
      font-customMont 
      font-semibold 
      italic 
      mt-2'>Explore Rockets</button>
      </Link>
      
     </div>
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