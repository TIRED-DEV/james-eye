import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas as FICanvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Mars } from '../../components/celestialBodies/mars/Mars';
import { SkyBox } from './skybox/SkyBox';

interface ICanvas {
  children: React.ReactNode;
}

export const Canvas = (params: ICanvas) => {
  const ref = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [params.children]);

  return (
    <FICanvas
      shadows
      dpr={[1, 2]}
      /* style={{ height: "100% !important" }} */
      camera={{ fov: 50 }}
    >
      <Suspense fallback={null}>
        <Stage
          controls={ref as any}
          preset="rembrandt"
          intensity={0.5}
          environment="night"
          visible={!loading}
        >
          {params.children}
        </Stage>
      </Suspense>
      <SkyBox />
      <OrbitControls
        ref={ref as any}
        enablePan={false}
        autoRotateSpeed={0.5}
        autoRotate
      />
    </FICanvas>
  );
};
