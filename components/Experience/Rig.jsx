import { CameraControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import * as THREE from 'three';

function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
    const { controls, scene } = useThree()
    const searchParam = useSearchParams()
    const param = searchParam.get('item')
    useEffect(() => {

      const active = scene.getObjectByName(param)
      if (active) {
        active.parent.localToWorld(position.set(0, 0.5, 0.25))
        active.parent.localToWorld(focus.set(0, 0, -2))
      }
      controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
    })

    return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}

export default Rig