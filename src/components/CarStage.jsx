import React from "react";
import {
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  useTexture,
  Text,
} from "@react-three/drei";
import * as THREE from "three";

const CarStage = ({ children, texture, preset, name,color, ...props }) => {
  const map = useTexture(texture);
  return (
    <group {...props}>
      <Text
        font={"/fonts/PermanentMarker-Regular.ttf"}
        fontSize={0.3}
        position={[0, -0.9, 0.051]}
        anchorY="bottom"
      >
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>
      <RoundedBox args={[1.5, 2, 0.1]}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={0.5} />
          <Environment preset={preset} />
          {children}
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};
export default CarStage;
