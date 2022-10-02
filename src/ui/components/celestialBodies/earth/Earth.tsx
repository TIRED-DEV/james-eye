import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
  };
  materials: {
    ['Default OBJ']: THREE.MeshStandardMaterial;
  };
};

export function Earth(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./textures/Earth.glb') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Default OBJ']}
      />
    </group>
  );
}

useGLTF.preload('./images/Mars.glb');
