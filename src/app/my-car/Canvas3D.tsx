// @ts-nocheck
'use client'

import { useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
  Html,
  useProgress
} from '@react-three/drei'
import * as THREE from 'three'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-zinc-400 font-mono">
        {progress.toFixed(0)}% loaded
      </div>
    </Html>
  )
}

function GR86Model({
  doorsOpen,
  carState,
}: {
  doorsOpen: boolean
  carState: 'off' | 'idle' | 'moving'
}) {
  const { scene } = useGLTF('/models/gr86.glb')
  const groupRef = useRef<THREE.Group>(null)
  const partsRef = useRef<{ [key: string]: THREE.Mesh }>({})
  const doorProgress = useRef(0)

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        child.receiveShadow = true

        const name = child.name.toLowerCase()
        if (name.includes('door')) {
          partsRef.current[child.name] = child
        }
      }
    })
  }, [scene])

  useFrame((state, delta) => {
    const targetProgress = doorsOpen ? 1 : 0
    const speed = 3

    if (Math.abs(doorProgress.current - targetProgress) > 0.01) {
      doorProgress.current += (targetProgress - doorProgress.current) * speed * delta

      Object.values(partsRef.current).forEach((part) => {
        const name = part.name.toLowerCase()
        if (name.includes('fl')) {
          part.rotation.y = -doorProgress.current * 0.6
        } else if (name.includes('fr')) {
          part.rotation.y = doorProgress.current * 0.6
        }
      })
    }
  })

  useFrame((state) => {
    if (groupRef.current) {
      if (carState === 'idle') {
        groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 15) * 0.003
      } else if (carState === 'moving') {
        groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.01
      } else {
        groupRef.current.position.y = 0
      }
    }
  })

  return <primitive ref={groupRef} object={scene} scale={1.2} position={[0, -0.5, 0]} />
}

function Scene({ doorsOpen, carState }: { doorsOpen: boolean, carState: 'off' | 'idle' | 'moving' }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />

      <Suspense fallback={<Loader />}>
        <GR86Model doorsOpen={doorsOpen} carState={carState} />
        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.6}
          scale={15}
          blur={2.5}
          far={4}
        />
        <Environment preset="city" />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.2}
        minDistance={3}
        maxDistance={12}
        target={[0, 0, 0]}
      />
    </>
  )
}

export default function Canvas3D({ doorsOpen, carState }: { doorsOpen: boolean, carState: 'off' | 'idle' | 'moving' }) {
  return (
    <div className="h-[60vh] w-full">
      <Canvas
        camera={{ position: [5, 2.5, 5], fov: 45 }}
        shadows
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#09090b']} />
        <Scene doorsOpen={doorsOpen} carState={carState} />
      </Canvas>
    </div>
  )
}
