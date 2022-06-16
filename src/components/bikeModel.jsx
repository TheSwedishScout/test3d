import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const BikeModel = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF("/Dytonbike.glb");
  // console.log('hmm', hmm)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028.geometry}
        material={nodes.Cylinder028.material}
        position={[-2.49, -0.86, -10.73]}
        scale={[2.56, 0.15, 2.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={nodes.Plane015.material}
        position={[-3.48, 0.96, -10.72]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.aksesoris_rangka_spedah002.geometry}
        material={nodes.aksesoris_rangka_spedah002.material}
        position={[-1.76, 0.58, -10.71]}
        rotation={[0, 0, 0.61]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={nodes.Cylinder026.material}
        position={[-3.61, 0.66, -10.64]}
        rotation={[0, 0, -0.41]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={nodes.Plane014.material}
        position={[-3.56, 0.68, -10.71]}
        rotation={[Math.PI / 2, -1.4, Math.PI / 2]}
        scale={[0.45, 0.52, 0.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt001.geometry}
        material={nodes.Bolt001.material}
        position={[-3.55, 0.8, -10.71]}
        rotation={[0, 0, -1.96]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-3.52, 0.77, -10.02]}
        rotation={[0, 0, -0.91]}
        scale={[0.02, 0.02, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-1.85, 0.81, -9.96]}
        rotation={[0, 0, 0.18]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt.geometry}
        material={nodes.Bolt.material}
        position={[-1.89, 0.8, -10.7]}
        rotation={[0, 0, -0.87]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={nodes.Plane013.material}
        position={[-1.79, 0.74, -10.71]}
        rotation={[Math.PI / 2, -0.31, Math.PI / 2]}
        scale={[0.49, 0.49, 0.49]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={nodes.Plane012.material}
        position={[-1.42, 0.11, -10.7]}
        rotation={[0, 0, -1.52]}
        scale={[0.4, 0.4, 0.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={nodes.Plane010.material}
        position={[-3.1, 1.61, -10.14]}
        rotation={[-1.7, 0.29, 2.29]}
        scale={[0.23, 0.17, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027.geometry}
        material={nodes.Cylinder027.material}
        position={[-2.74, 1.01, -10.72]}
        rotation={[0, 0, -1.66]}
        scale={[0.04, 0.01, 0.04]}
      />
      <group
        position={[-3.33, 1.47, -10.72]}
        rotation={[-Math.PI / 2, 0.33, 0]}
        scale={[0.01, 0.02, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032.geometry}
          material={nodes.Cylinder032.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032_1.geometry}
          material={nodes.Cylinder032_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024.geometry}
        material={nodes.Cylinder024.material}
        position={[-1.59, 0.09, -10.57]}
        rotation={[0, 0, 1.67]}
        scale={[0.01, 0.36, 0.01]}
      />
      <group
        position={[-3.32, 1.49, -10.72]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={nodes.Cylinder030.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030_1.geometry}
          material={nodes.Cylinder030_1.material}
        />
      </group>
      <group
        position={[-3.56, 0.73, -11.77]}
        rotation={[0, 0, -1.55]}
        scale={[0.05, 0.1, 0.1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_2.geometry}
          material={nodes.Plane014_2.material}
        />
      </group>
      <group
        position={[-0.66, 0.39, -10.71]}
        rotation={[0, 0, -1.55]}
        scale={[0.14, 0.03, 0.14]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={nodes.Cylinder029.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_1.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={nodes.Circle005.material}
        position={[-2.43, -0.06, -10.71]}
        rotation={[0, 0, 0.02]}
        scale={[0.82, 0.75, 0.64]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={nodes.Plane008.material}
        position={[1.38, 0.15, -10.68]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.57}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={nodes.Plane007.material}
        position={[-1.37, 0.18, -10.61]}
        rotation={[0, 0, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={nodes.BezierCurve.material}
        position={[-3.4, 0.75, -10.76]}
        rotation={[0, 0, 0.02]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-3.69, 1.26, -10.8]}
        rotation={[-3.14, 0.19, 3.12]}
        scale={[0.31, 0.2, 0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={nodes.Cylinder021.material}
        position={[-3.34, 1.15, -10.72]}
        rotation={[0, 0, 2.82]}
        scale={[0.06, 0.02, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={nodes.Cylinder020.material}
        position={[-3.64, 1.18, -10.72]}
        rotation={[0, 0, 0.02]}
        scale={[0.01, 0.02, 0.01]}
      />
      <group
        position={[-3.55, 1.17, -10.71]}
        rotation={[0, 0, -0.17]}
        scale={0.06}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_1.geometry}
          material={nodes.Cylinder026_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_2.geometry}
          material={nodes.Cylinder026_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_3.geometry}
          material={nodes.Cylinder026_3.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={nodes.Cylinder018.material}
        position={[-2.26, 0.58, -10.72]}
        rotation={[0, 0, 2.8]}
        scale={[0.04, 0.01, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={nodes.Cylinder017.material}
        position={[-2.17, 0.82, -10.72]}
        rotation={[0, 0, 2.8]}
        scale={[0.04, 0.01, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[-2.12, 0.69, -10.73]}
        rotation={[-Math.PI / 2, 0.34, 0]}
        scale={0.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-2.47, 0.65, -10.72]}
        rotation={[0, 0, 0.02]}
        scale={[0.42, 0.27, 0.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={nodes.Circle004.material}
        position={[-2.56, 0.91, -10.76]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.02, 0.13, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={nodes.Circle002.material}
        position={[-2.57, 0.9, -10.67]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.02, 0.13, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={nodes.Cylinder016.material}
        position={[-1.69, 0.08, -10.62]}
        rotation={[2.98, 0.1, -1.65]}
        scale={[0.02, 0.01, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={nodes.Cylinder013.material}
        position={[-1.94, 0.06, -10.63]}
        rotation={[3.06, 0.09, -1.69]}
        scale={[0.02, 0.01, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={nodes.Cylinder015.material}
        position={[-2.43, 0.01, -10.72]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.06, 0.09, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[-1.49, 1.01, -10.71]}
        rotation={[0, 0, 0.02]}
        scale={[0.41, 0.31, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
        position={[-1.49, 1.01, -10.71]}
        rotation={[0, 0, 0.02]}
        scale={[0.41, 0.31, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={nodes.Cylinder014.material}
        position={[-1.48, 1, -10.65]}
        rotation={[-Math.PI / 2, -0.02, -Math.PI / 2]}
        scale={[0.01, 0.05, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[-1.51, 0.99, -10.71]}
        rotation={[0, 0, 0.02]}
        scale={[0.25, 0.14, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={nodes.Cylinder012.material}
        position={[-2.74, 1.01, -10.72]}
        rotation={[0, 0, -1.66]}
        scale={[0.04, 0.01, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={nodes.Cylinder011.material}
        position={[-2.24, 1.4, -10.71]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
        position={[-3.22, 1.06, -10.72]}
        rotation={[0, 0, -1.66]}
        scale={[0.04, 0.01, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[-3.18, 1.05, -10.72]}
        rotation={[0, 0, -1.66]}
        scale={[0.04, 0.01, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-1.41, 0.72, -10.6]}
        rotation={[0, 0, 0.02]}
      />
      <group
        position={[-1.47, 0.73, -10.52]}
        rotation={[0, 0, 0.02]}
        scale={[0.31, 0.2, 0.11]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={nodes.Cube003_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={nodes.Cube003_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials["Warna Ban.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_4.geometry}
          material={nodes.Cube003_4.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.aksesoris_rangka_spedah.geometry}
        material={nodes.aksesoris_rangka_spedah.material}
        position={[-1.76, 0.58, -10.71]}
        rotation={[0, 0, 0.61]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.aksesoris_rangka_spedah001.geometry}
        material={nodes.aksesoris_rangka_spedah001.material}
        position={[-1.71, 0.63, -10.89]}
        rotation={[0, 0, 0.61]}
        scale={[0.01, 0.01, 0.01]}
      />
      <group
        position={[-3.89, 0.04, -10.68]}
        rotation={[Math.PI / 2, 0.24, -Math.PI]}
        scale={[0.74, 0.39, 0.74]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_1.geometry}
          material={nodes.Circle_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_2.geometry}
          material={nodes.Circle_2.material}
        />
      </group>
      <group
        position={[-1.43, 0.1, -10.68]}
        rotation={[Math.PI / 2, 0.24, -Math.PI]}
        scale={[0.74, 0.39, 0.74]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_1.geometry}
          material={nodes.Circle002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_2.geometry}
          material={nodes.Circle002_2.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={nodes.Circle003.material}
        position={[-1.99, 1.29, -10.71]}
        rotation={[0, 0, -0.35]}
        scale={[0.03, 0.03, 0.03]}
      />
      <group
        position={[-3.47, 0.78, -10.64]}
        rotation={[0, 0, -0.38]}
        scale={0.04}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={nodes.Cylinder_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={nodes.Cylinder_2.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-3.46, 0.96, -10.72]}
        rotation={[0, 0, -1.69]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[-3.46, 0.94, -10.72]}
        rotation={[0, 0, -1.69]}
        scale={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-1.41, -0.57, -10.71]}
        rotation={[0, 0, 0.02]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-3.47, 0.78, -10.64]}
        rotation={[0, 0, -0.38]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[-1.97, 1.38, -10.72]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[-3.88, -0.64, -10.71]}
        rotation={[0, 0, 0.02]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[-1.04, 0.81, -10.71]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.01, 0.06, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={nodes.Cylinder009.material}
        position={[-1.43, 0.11, -10.72]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.02, 0.09, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gear.geometry}
        material={nodes.Gear.material}
        position={[-1.43, 0.11, -10.65]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.05, 0.02, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gear001.geometry}
        material={nodes.Gear001.material}
        position={[-1.43, 0.11, -10.64]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.05, 0.01, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gear002.geometry}
        material={nodes.Gear002.material}
        position={[-1.43, 0.11, -10.63]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gear003.geometry}
        material={nodes.Gear003.material}
        position={[-1.43, 0.11, -10.63]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gear004.geometry}
        material={nodes.Gear004.material}
        position={[-2.43, 0.02, -10.8]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={[0.19, 0.09, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.jok_Pilot.geometry}
        material={nodes.jok_Pilot.material}
        position={[-3.47, 0.78, -10.64]}
        rotation={[0, 0, -0.38]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kayuh_spedah.geometry}
        material={nodes.kayuh_spedah.material}
        position={[-2.43, 0.02, -10.64]}
        rotation={[0, 0, 0.02]}
        scale={[0.01, 0.02, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kotak_ajah.geometry}
        material={nodes.kotak_ajah.material}
        position={[-3.32, 1.5, -10.72]}
        rotation={[0, 0, -0.54]}
        scale={[-0.05, -0.05, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-4.02, 0.83, -10.71]}
        rotation={[0, 0, 0.02]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[-2.04, 0.62, -10.71]}
        rotation={[0, 0, 0.73]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rangka_utama_spedah.geometry}
        material={nodes.rangka_utama_spedah.material}
        position={[-1.53, 0.52, -10.69]}
        rotation={[-Math.PI / 2, -0.02, 0]}
        scale={0.76}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={nodes.Torus.material}
        position={[-1.83, 1.4, -10.61]}
        rotation={[0, 0, -0.13]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={nodes.Torus001.material}
        position={[-1.83, 1.4, -10.79]}
        rotation={[0, 0, -0.13]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder000.geometry}
        material={nodes.Cylinder000.material}
        position={[-1.43, 0.05, -10.72]}
        rotation={[0, 0, -1.57]}
        scale={[0, 0.02, 0]}
      />
    </group>
  )
}

useGLTF.preload('/Dytonbike.glb')