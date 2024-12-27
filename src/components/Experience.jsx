import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import RB19Model from "./McLaren";
import CarStage from "./CarStage";
import McLarenModel from "./McLaren";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <OrbitControls />

      <CarStage
        texture={"textures/tokyo.jpg"}
        position-x={-1.7}
        rotation-y={Math.PI / 8}
        preset={"city"}
        name={"Tokyo"}
        color={"#f00"}
      >
        <McLarenModel scale={0.3} position-y={-0.5} />
      </CarStage>

      <CarStage
        texture={"textures/spa.jpg"}
        preset={"sunset"}
        position-z={-0.3}
        name={"Senna"}
        color={"#0f0"}
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
      >
        <McLarenModel scale={0.3} position-y={-0.5} />
      </CarStage>
    </>
  );
};

export default Experience;
