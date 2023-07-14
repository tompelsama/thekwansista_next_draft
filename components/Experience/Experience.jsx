import React from 'react'
import { Environment, OrbitControls, useTexture } from '@react-three/drei'
import { Cake } from '../Cake';
import Frame from './Frame';
import Rig from './Rig';

const Experience = () => {

  const map = useTexture(
    "/textures/cartoon_kitchen.jpg"
  )

  return <>
    <Frame id="01" name={`pick\nles`} author="Omar Faruq Tawsif" bg="#e4cdac" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]}>
      <Cake position={[0, -0.7, -2]} />
    </Frame>
    <Rig />
  </>
}

export default Experience