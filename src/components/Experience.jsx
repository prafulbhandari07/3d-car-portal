import { CameraControls } from "@react-three/drei";
import * as THREE from "three";
import CarStage from "./CarStage";
import McLarenModel from "./McLaren";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { RB19Model } from "./Rb19";
import { GTRModel } from "./Gtr";

const Experience = ({ active, setActive }) => {
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        1,
        1,
        4,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 0, 5, 0, 0, 0, true);
    }
  }, [active]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        minDistance={0.5}
        maxDistance={6}
      />

      <CarStage
        texture={"textures/tokyo.jpg"}
        position-x={-1.7}
        rotation-y={Math.PI / 8}
        preset={"city"}
        name={"GTR"}
        color={"#fcbe21"}
        active={active}
        setActive={setActive}
      >
        {active ? (
          <GTRModel
            scale={[0.5, 0.5, 0.5]}
            position={[-0.4, -0.4, 0.4]}
            rotation-y={0.3}
          />
        ) : (
          <GTRModel
            scale={0.5}
            position={[-0.1, -0.6, -0.2]}
            rotation-y={-0.02}
          />
        )}
      </CarStage>

      <CarStage
        texture={"textures/spa.jpg"}
        preset={"sunset"}
        position-z={0.2}
        name={"Mclaren"}
        color={"#ff6803"}
        active={active}
        setActive={setActive}
      >
        {active ? (
          <McLarenModel
            scale={0.4}
            position={[0, -0.3, -0.2]}
            rotation-y={0.1}
          />
        ) : (
          <McLarenModel scale={0.3} position-y={-0.5} />
        )}
      </CarStage>

      <CarStage
        texture={"textures/circuit.jpg"}
        position-x={1.7}
        rotation-y={-Math.PI / 8}
        preset={"sunset"}
        name={"RB19"}
        color={"#2b2ee0"}
        active={active}
        setActive={setActive}
      >
        {active ? (
          <RB19Model scale={0.7} position={[0.3, -0.3, 0.2]} />
        ) : (
          <RB19Model scale={0.58} position={[0.1, -0.5, 0.5]} />
        )}
      </CarStage>
    </>
  );
};

export default Experience;
