import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-full h-full rounded-full font-bold text-white ">
          Loading...
        </div>
      </div>
    </Html>
  );
};

export default Loader;
