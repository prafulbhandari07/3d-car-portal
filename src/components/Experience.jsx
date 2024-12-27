import { CameraControls } from "@react-three/drei";
import * as THREE from "three";
import CarStage from "./CarStage";
import McLarenModel from "./McLaren";
import { useRef, useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";

const Experience = () => {
  const [active, setActive] = useState(null);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(0, 0, 2, targetPosition.x, targetPosition.y, targetPosition.z, true,);
    }else{
      controlsRef.current.setLookAt(0, 0, 5, 0, 0, 0, true);
    }
  }, [active]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <CameraControls ref={controlsRef} />

      <CarStage
        texture={"textures/tokyo.jpg"}
        position-x={-1.7}
        rotation-y={Math.PI / 8}
        preset={"city"}
        name={"Tokyo"}
        color={"#f00"}
        active={active}
        setActive={setActive}
      >
        <McLarenModel scale={0.3} position-y={-0.5} />
      </CarStage>

      <CarStage
        texture={"textures/spa.jpg"}
        preset={"sunset"}
        position-z={-0.3}
        name={"Senna"}
        color={"#0f0"}
        active={active}
        setActive={setActive}
      >
        <McLarenModel scale={0.3} position-y={-0.5} />
      </CarStage>

      <CarStage
        texture={"textures/spa.jpg"}
        position-x={1.7}
        rotation-y={-Math.PI / 8}
        preset={"sunset"}
        name={"Monaco"}
        color={"#00f"}
        active={active}
        setActive={setActive}
      >
        <McLarenModel scale={0.3} position-y={-0.5} />
      </CarStage>
    </>
  );
};

export default Experience;
