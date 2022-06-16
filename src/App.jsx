import { Suspense } from 'react';
import './App.css';
// import { Box } from './components/box';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { DogModel } from './components/dogModel';
import { Header } from './components/Header';

import './index.css';
import { Room } from './components/room';
import { Lager } from './components/lager';


function App() {
  return (
    <div className="page">
      <Header />
      <Canvas shadows >
        <OrbitControls />

        <ambientLight intensity={0.9} />
        <spotLight color={"#ffffff"} intensity={1.4} target-position={[1,1,1]}  distance={70} position={[10, 25, 10]} castShadow shadow-mapSize={[4096, 4096]} />
        <spotLight color={"#ffffff"} intensity={1.4} target-position={[1,1,1]}  distance={70} position={[-10, 25, 10]} castShadow shadow-mapSize={[4096, 4096]} />
        {/* <directionalLight color={"#ffffff"} angle={0.78} distance={50} position={[16, 7, 23]} castShadow shadow-mapSize={[4096, 4096]} /> */}
        
        <Suspense fallback={null}>
          <Room position={[0, 0.904, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <DogModel position={[0, 1.4, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Lager position={[0, 1.4, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
