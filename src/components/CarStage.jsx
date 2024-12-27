import React from "react";
import {
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  useTexture,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const CarStage = ({
  children,
  texture,
  preset,
  name,
  color,
  active,
  setActive,
  ...props
}) => {
  const map = useTexture(texture);

  const portalMaterial = React.useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

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
      <RoundedBox
        name={name}
        args={[1.5, 2, 0.1]}
        onDoubleClick={() => setActive(active === name ? null : name)}
      >
        <MeshPortalMaterial side={THREE.DoubleSide} ref={portalMaterial}>
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
