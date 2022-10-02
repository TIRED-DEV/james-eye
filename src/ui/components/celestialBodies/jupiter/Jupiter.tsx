import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    cubemap: THREE.Mesh;
  };
  materials: {
    None: THREE.MeshStandardMaterial;
  };
};

export function Jupiter(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./textures/Jupiter.glb') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        geometry={nodes.cubemap.geometry}
        material={materials.None}
      />
    </group>
  );
}

useGLTF.preload('./images/Jupter.glb');
