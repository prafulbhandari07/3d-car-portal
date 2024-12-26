import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 3, 3], fov: 30 }}
      gl={{ clearColor: "#ececec" }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
