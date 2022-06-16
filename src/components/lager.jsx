
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export const Lager = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/lager.gltf");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions)
    actions?.explode.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" scale={0.03}>
          <primitive object={nodes.Dummy003} />
          <skinnedMesh
            castShadow
            name="Pds"
            geometry={nodes.Pds.geometry}
            material={materials["01___Default"]}
            skeleton={nodes.Pds.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lager.gltf");
