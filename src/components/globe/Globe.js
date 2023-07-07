import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import './globe.css'

function Globe() {
  const colorMap = useLoader(TextureLoader, 'assests/earth.jpg')
  return (
    <>
        <ambientLight intensity={0.9} />
        <pointLight position={[0, 10, 50]} />
        <mesh >
            <sphereGeometry args={[1.5, 50, 50]} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    </>
  )
}

export default Globe