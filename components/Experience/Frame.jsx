import * as THREE from 'three';
import { MeshPortalMaterial, Text, useCursor } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useRouter, useSearchParams } from 'next/navigation';
import { easing, geometry } from 'maath'
import { useRef, useState } from 'react';

extend(geometry)

function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
    const portal = useRef()
    const location = useRouter()
    const searchParam = useSearchParams()
    const params = searchParam.get('item')
    const [hovered, hover] = useState(false)

    useCursor(hovered)

    useFrame((state, dt) => easing.damp(portal.current, 'blend', params === id ? 1 : 0, 0.2, dt), [params])
    return (
      <group {...props}>
        <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
          {name}
        </Text>
        <Text fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
          /{id}
        </Text>
        <Text fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
          {author}
        </Text>
        <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), location.push('/?item=' + e.object.name, {shallow: true}))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
          <roundedPlaneGeometry args={[width, height, 0.1]} />
          <MeshPortalMaterial ref={portal} events={params === id} side={THREE.DoubleSide}>
            <color attach="background" args={[bg]} />
            {children}
          </MeshPortalMaterial>
        </mesh>
      </group>
    )
}

export default Frame