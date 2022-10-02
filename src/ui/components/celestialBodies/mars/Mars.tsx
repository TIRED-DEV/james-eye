import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh;
  };
  materials: {
    ['Default OBJ.005']: THREE.MeshStandardMaterial;
  };
};

export function Mars(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./textures/Mars.glb') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['Default OBJ.005']}
      />
    </group>
  );
}

useGLTF.preload('./images/Mars.glb');
