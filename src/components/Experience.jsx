import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Experience = () => {
  const map = useTexture("textures/tokyo.jpg");
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="park" />
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default Experience;
