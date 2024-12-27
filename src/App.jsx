import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import {  Suspense, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="w-full h-full overflow-hidden relative bg-black">
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 30 }}
          gl={{ powerPreference: "high-performance" }}
        >
          <Suspense fallback={<Loader/>}>
            <Experience active={active} setActive={setActive} />
          </Suspense>
        </Canvas>
        <div
          className="absolute w-full top-0 py-8 font-bold tracking-widest text-3xl text-white text-center bg-black/50 backdrop-blur-sm"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Double Click any Portal to enter&nbsp;/&nbsp;exit it.
        </div>
      </div>
    </>
  );
}

export default App;
