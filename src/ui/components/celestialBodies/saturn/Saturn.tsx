import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    RingsTop: THREE.Mesh;
    RingsBottom: THREE.Mesh;
    Saturn001: THREE.Mesh;
  };
  materials: {
    SaturnRings: THREE.MeshStandardMaterial;
    None: THREE.MeshStandardMaterial;
  };
};

export function Saturn(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./textures/Saturn.glb') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RingsTop.geometry}
        material={materials.SaturnRings}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RingsBottom.geometry}
        material={materials.SaturnRings}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Saturn001.geometry}
        material={materials.None}
      />
    </group>
  );
}

useGLTF.preload('./images/Saturn.glb');
