import { OrbitControls } from "@react-three/drei";

import {Avatar} from "./Avatar";
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}/>
      <Avatar />
      <ambientLight intensity={1}/>
      
    </>
  );
};
