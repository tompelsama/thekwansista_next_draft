'use client';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import Experience from './Experience';

const Main = () => {
    return <Canvas shadows camera={{ position: [0, 0, 20], fov: 70 }}  eventPrefix="client">
        <color attach="background" args={['#f0f0f0']} />
        <Experience />
    </Canvas>
}

export default Main