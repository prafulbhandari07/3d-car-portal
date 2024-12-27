import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Text } from "@react-three/drei";

function App() {
  return (
    <>
      <div className="w-full h-full overflow-hidden relative">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
          <Experience />
        </Canvas>
        <div className="absolute text-black top-4 font-extrabold left-[50%]">
          hi
        </div>
      </div>
    </>
  );
}

export default App;
