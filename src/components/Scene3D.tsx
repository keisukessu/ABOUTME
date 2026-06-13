import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'


// グラデーションテクスチャを生成するカスタムフック
function useGradientTexture(
  stops: { offset: number; color: string }[],
  direction: 'diagonal' | 'horizontal' | 'vertical' = 'diagonal'
) {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')!

    const gradient = (() => {
      switch (direction) {
        case 'horizontal': return ctx.createLinearGradient(0, 0, 256, 0)
        case 'vertical': return ctx.createLinearGradient(0, 0, 0, 256)
        default: return ctx.createLinearGradient(0, 0, 256, 256)
      }
    })()

    stops.forEach(({ offset, color }) => gradient.addColorStop(offset, color))
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 256, 256)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  }, [stops, direction])
}

// 共通カラー定義
const GRADIENT_STOPS_PURPLE = [
  { offset: 0, color: '#c8cce0' },
  { offset: 0.5, color: '#a5b4fc' },
  { offset: 1, color: '#818cf8' },
]

const GRADIENT_STOPS_YELLOW = [
  { offset: 0, color: '#fef9c3' },
  { offset: 0.5, color: '#fde047' },
  { offset: 1, color: '#f59e0b' },
]

const GRADIENT_STOPS_GREEN = [
  { offset: 0, color: '#d1fae5' },
  { offset: 0.5, color: '#34d399' },
  { offset: 1, color: '#059669' },
]

const GRADIENT_STOPS_GRAY = [
  { offset: 0, color: '#ffffff' },
  { offset: 0.5, color: '#5d626c' },
  { offset: 1, color: '#15171c' },
]

const GRADIENT_STOPS_BLACK = [
  { offset: 0, color: '#515155' },
  { offset: 0.5, color: '#424247' },
  { offset: 1, color: '#171b1f' },
]

const GRADIENT_STOPS_RED = [
  { offset: 0, color: '#fee2e2' },
  { offset: 0.5, color: '#f87171' },
  { offset: 1, color: '#dc2626' },
]



function Platform() {
  const gradientTexture = useGradientTexture(GRADIENT_STOPS_BLACK, 'vertical')
  return (

    <mesh position={[0, -1.55, 0]} receiveShadow>
      <cylinderGeometry args={[1.4, 1.4, 0.22, 64]} />
      <meshStandardMaterial map={gradientTexture} roughness={0.4} metalness={0.05} />
    </mesh>
  )
}

function useFloatAnimation(speed: number, floatAmount: number, phase: number, rotateY = 0) {
  const ref = useRef<THREE.Mesh>(null)
  const baseY = useRef<number | null>(null)
  useFrame((state) => {
    if (!ref.current) return
    if (baseY.current === null) baseY.current = ref.current.position.y
    ref.current.position.y = baseY.current + Math.sin(state.clock.elapsedTime * speed + phase) * floatAmount
    if (rotateY !== 0) ref.current.rotation.y += rotateY * 0.01
  })
  return ref
}

function FloatingCube() {
  const ref = useFloatAnimation(0.6, 0.10, 0, 0.3)
  const gradientTexture = useGradientTexture(GRADIENT_STOPS_YELLOW)
  return (
    <mesh ref={ref} position={[-0.85, 1.6, 0]} rotation={[0.5, 0.4, 0]} castShadow>
      <boxGeometry args={[0.7, 0.7, 0.7]} />
      <meshStandardMaterial map={gradientTexture} roughness={0.2} metalness={0.1} />
    </mesh>
  )
}

function FloatingSphere() {
  const ref = useFloatAnimation(0.5, 0.12, 1.0)
  const gradientTexture = useGradientTexture(GRADIENT_STOPS_GRAY)
  return (
    <mesh ref={ref} position={[-0.2, 0.2, 0.6]} castShadow>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial map={gradientTexture} roughness={0.15} metalness={0.0} />
    </mesh>
  )
}

function FloatingCone() {
  const ref = useFloatAnimation(0.55, 0.06, 2.0)
  const gradientTexture = useGradientTexture(GRADIENT_STOPS_GREEN, 'vertical')
  return (
    <mesh ref={ref} position={[-0.9, -1.05, 0.3]} castShadow>
      <coneGeometry args={[0.38, 0.88, 32]} />
      <meshStandardMaterial map={gradientTexture} roughness={0} metalness={0.2} />
    </mesh>
  )
}

function FloatingPlane() {
  const ref = useFloatAnimation(0.6, 0.10, 0.5, 0.3)
  const gradientTexture = useGradientTexture(GRADIENT_STOPS_PURPLE)
  return (
    <mesh ref={ref} position={[1, -0.75, 0]} rotation={[0.5, 0.4, -0.3]} castShadow>
      <boxGeometry args={[0.05, 0.8, 0.8]} />
      <meshStandardMaterial map={gradientTexture} roughness={0} metalness={0} />
    </mesh>
  )
}

function SmallSphere() {
  const ref = useFloatAnimation(0.7, 0.14, 3.0)
  const gradientTexture = useGradientTexture(GRADIENT_STOPS_RED)
  return (
    <mesh ref={ref} position={[0.8, 1.55, -0.2]} castShadow>
      <sphereGeometry args={[0.18, 32, 32]} />
      <meshStandardMaterial map={gradientTexture} roughness={0.2} metalness={0.0} />
    </mesh>
  )
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.06
    }
  })

  return (
    <group ref={groupRef} position={[0.5, 0, 0]}>
      <Platform />
      <FloatingCube />
      <FloatingSphere />
      <FloatingCone />
      <FloatingPlane />
      <SmallSphere />
    </group>
  )
}

interface Scene3DProps {
  isDark: boolean
}

export default function Scene3D({ isDark }: Scene3DProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [0.4, -0.2, 7.5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={isDark ? 1.2 : 2.0} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={isDark ? 1.2 : 2.0}
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[-5, 3, -2]} intensity={isDark ? 0.6 : 1.0} />
      <SceneContent />
    </Canvas>
  )
}
