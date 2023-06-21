'use client'
import { Suspense } from 'react';
import { Canvas, useFrame, useThree, extend, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import Iphone from '@/assets/3dmodels/Iphone';


const Page = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        shadows
        style={{ background: 'black' }}
        camera={{ position: [3, 3, 3] }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          position={[-2, 9, -3]}
          intensity={1}
          castShadow
        />
        
        <OrbitControls />
        <Suspense fallback={null}>
          <Iphone/>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Page;
