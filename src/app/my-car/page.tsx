// @ts-nocheck
'use client'

import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function MyCarPage() {
  const [carState, setCarState] = useState<'off' | 'on'>('on')
  const [doorsOpen, setDoorsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const carRef = useRef<THREE.Group | null>(null)
  const doorsRef = useRef<Map<string, THREE.Mesh>>(new Map())
  const doorPartsRef = useRef<{mesh: THREE.Mesh, side: string}[]>([])
  const wheelsRef = useRef<Map<string, THREE.Mesh>>(new Map())
  const animationRef = useRef<number>(0)
  const carStateRef = useRef(carState)
  const doorsOpenRef = useRef(doorsOpen)

  // Keep refs in sync with state
  useEffect(() => {
    carStateRef.current = carState
  }, [carState])

  useEffect(() => {
    doorsOpenRef.current = doorsOpen
  }, [doorsOpen])

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x18181b)

    // Camera
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000)
    camera.position.set(3, 1.5, 3)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(1)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enablePan = false
    controls.enableZoom = true
    controls.minDistance = 3
    controls.maxDistance = 12

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    // Main directional light
    const dirLight = new THREE.DirectionalLight(0xffffff, 2)
    dirLight.position.set(5, 10, 7)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 4096
    dirLight.shadow.mapSize.height = 4096
    dirLight.shadow.bias = -0.0003
    dirLight.shadow.normalBias = 0.05
    dirLight.shadow.camera.near = 0.1
    dirLight.shadow.camera.far = 30
    dirLight.shadow.camera.left = -5
    dirLight.shadow.camera.right = 5
    dirLight.shadow.camera.top = 5
    dirLight.shadow.camera.bottom = -5
    dirLight.shadow.radius = 8
    scene.add(dirLight)

    // Fill light
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8)
    fillLight.position.set(-5, 5, -5)
    scene.add(fillLight)

    // Rim light for car silhouette
    const rimLight = new THREE.DirectionalLight(0xffffff, 1)
    rimLight.position.set(0, 5, -10)
    scene.add(rimLight)

    // Ground - invisible plane for shadows only
    const groundGeo = new THREE.PlaneGeometry(20, 20)
    const groundMat = new THREE.ShadowMaterial({ opacity: 0 })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = 0
    ground.receiveShadow = true
    scene.add(ground)

    // Load car model
    const loader = new GLTFLoader()
    loader.load(
      '/models/gr86.glb',
      (gltf) => {
        // Compute bounding box to see model size
        const box = new THREE.Box3().setFromObject(gltf.scene)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())

        const model = gltf.scene

        // Center the model at origin, then position it
        model.position.x = -center.x
        model.position.y = -box.min.y // Put bottom at y=0
        model.position.z = -center.z

        // Scale based on model size (target ~4 meters length)
        const targetLength = 4
        const scale = targetLength / size.z
        model.scale.set(scale, scale, scale)

        // Add shadows - keep original materials
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true

            const mat = child.material as THREE.MeshStandardMaterial
            const nameLower = child.name.toLowerCase()

            // Make windows 40% dark, skip headlights/taillights
            const matName = mat.name ? mat.name.toLowerCase() : ''
            const isWindow = nameLower.includes('glass') || nameLower.includes('window') || matName.includes('glass') || matName.includes('window')
            const isLight = nameLower.includes('light_b') || nameLower.includes('light_f') || nameLower.includes('head') || nameLower.includes('tail_l') || nameLower.includes('lamp') || nameLower.includes('brake') || matName.includes('light_b') || matName.includes('light_f') || matName.includes('head') || matName.includes('tail_l') || matName.includes('lamp') || matName.includes('brake')
            if (isWindow && !isLight) {
              if (mat.color) {
                mat.color.setScalar(0.2) // Set to 20% brightness
              }
              mat.opacity = 0.2 // 20% opaque
              mat.transparent = false
              mat.depthWrite = true
              mat.needsUpdate = true
            }

            // Fix material rendering
            mat.depthWrite = true
            mat.depthTest = true
            mat.polygonOffset = false
            mat.polygonOffsetFactor = 0
            mat.polygonOffsetUnits = 0

            if (mat instanceof THREE.MeshStandardMaterial) {
              mat.envMapIntensity = 1
              mat.needsUpdate = true
            }

            // Find ALL door and mirror meshes - add everything
            const name = child.name

            // FL Door - all front left door parts
            if (nameLower.includes('door_fl')) {
              doorPartsRef.current.push({ mesh: child, side: 'FL' })
              console.log('FL door part:', name)
            }

            // FR Door - all front right door parts
            if (nameLower.includes('door_fr')) {
              doorPartsRef.current.push({ mesh: child, side: 'FR' })
              console.log('FR door part:', name)
            }

            // Side mirrors - ALL parts (not just _0_1)
            if (nameLower.includes('sidemirror')) {
              const side = nameLower.includes('_l') || nameLower.includes('left') ? 'MirrorL' : 'MirrorR'
              doorPartsRef.current.push({ mesh: child, side })
              console.log('Mirror part:', name, '->', side)
            }

            // Track wheels
            if (nameLower.includes('wheel') || nameLower.includes('tire') || nameLower.includes('rim')) {
              wheelsRef.current.set(name, child)
            }
          }
        })

        scene.add(model)
        carRef.current = model
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error)
      }
    )

    // Animation loop
    let doorProgress = 0
    let wheelRotation = 0
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)

      const targetProgress = doorsOpenRef.current ? 1 : 0

      if (Math.abs(doorProgress - targetProgress) > 0.01) {
        doorProgress += (targetProgress - doorProgress) * 0.1

        // Rotate ALL door and mirror parts on Y axis (flipped)
        doorPartsRef.current.forEach(({ mesh, side }) => {
          if (side === 'FL') {
            mesh.rotation.y = -doorProgress * 1.2
          } else if (side === 'FR') {
            mesh.rotation.y = doorProgress * 1.2
          } else if (side === 'MirrorL') {
            mesh.rotation.y = -doorProgress * 0.8
          } else if (side === 'MirrorR') {
            mesh.rotation.y = doorProgress * 0.8
          }
        })
      }

      // Engine state animations
      if (carRef.current) {
        if (carStateRef.current === 'on') {
          // Bumps in the road - irregular timing
          const bumpIntensity = 0.01
          const time = Date.now()
          // Combine multiple prime frequencies for irregular bumps
          carRef.current.position.y = (
            Math.abs(Math.sin(time * 0.002)) * 0.4 +
            Math.abs(Math.sin(time * 0.005)) * 0.35 +
            Math.abs(Math.sin(time * 0.009)) * 0.25
          ) * bumpIntensity

          // Rotate wheels
          wheelRotation += 0.15
          wheelsRef.current.forEach((wheel) => {
            wheel.rotation.x = wheelRotation
          })
        } else {
          // Off - no vibration
          carRef.current.position.y = 0

          // Reset wheel rotation
          wheelsRef.current.forEach((wheel) => {
            wheel.rotation.x = 0
          })
        }
      }

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationRef.current)
      renderer.dispose()
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-zinc-100 mb-2">My Car</h1>
        <p className="text-zinc-400 mb-8">2022 Toyota GR86</p>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setCarState('off')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                carState === 'off' ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              Off
            </button>
            <button
              onClick={() => setCarState('on')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                carState === 'on' ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              On
            </button>
          </div>

          <button
            onClick={() => setDoorsOpen(!doorsOpen)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              doorsOpen ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            {doorsOpen ? 'Close Doors' : 'Open Doors'}
          </button>
        </div>

      </div>

      <div ref={containerRef} className="h-[60vh] w-full" />
    </div>
  )
}
