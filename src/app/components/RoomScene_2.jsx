"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import {
  useGLTF,
  useVideoTexture,
  useTexture,
  Html,
  Text,
} from "@react-three/drei";
import url from "../../../public/video.mp4";
import "../home/homepage.css";
import * as THREE from "three";

export default function RoomScene(props) {
  const rotateRef = useRef();
  const texture = useTexture("BakedTexture.png");
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });
  const { nodes, materials } = useGLTF("RoomScene.gltf");
  /* const calculateTimeRemaining = () => {
     const currentDate = new Date();
     const targetDate = new Date("2024-04-7"); // Replace with your target date
     const timeDifference = targetDate.getTime() - currentDate.getTime();
 
     // Calculate hours, minutes, and seconds remaining
     const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
     const minutesRemaining = Math.floor(
       (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
     );
     const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);
 
     return {
       hours: hoursRemaining,
       minutes: minutesRemaining,
       seconds: secondsRemaining,
     };
   };
 
   const clockModelRef = useRef();
   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
   console.log(timeRemaining);*/

  const calculateTimeRemaining = () => {
    const currentDate = new Date();
    const targetDate = new Date("2024-03-7"); // Replace with your target date
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Calculate days remaining
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return [daysRemaining];
  };

  const [daysRemaining] = useState(calculateTimeRemaining());
  console.log(daysRemaining[0]); // Array containing the number of days remaining

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.type = "video/mp4" / vid.play();
    console.log(vid);
    return vid;
  });
  const laptopScreen = useTexture("alcher.png");
  const mobileScreen = useTexture("qr.png");

  return (
    <group {...props} ref={rotateRef} dispose={null}>
      <mesh
        name="WallsF"
        geometry={nodes.WallsF.geometry}
        material={textureMaterial}
        position={[-3.578, 1.77, -1.723]}
      />
      <mesh
        name="Calendar"
        geometry={nodes.Calendar.geometry}
        material={textureMaterial}
        position={[-5.947, 2.128, -1.636]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Desk2"
        geometry={nodes.Desk2.geometry}
        material={textureMaterial}
        position={[-5.278, 0.814, -2.532]}
      />
      <mesh
        name="Mat"
        geometry={nodes.Mat.geometry}
        material={textureMaterial}
        position={[-3.214, 0.057, -1.175]}
      />
      <mesh
        name="ShelfUpper"
        geometry={nodes.ShelfUpper.geometry}
        material={textureMaterial}
        position={[-2.938, 1.651, -3.065]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        name="Phone"
        geometry={nodes.Phone.geometry}
        material={textureMaterial}
        position={[-4.736, 0.888, -3.185]}
        rotation={[0, -0.903, -1.295]}
      />
      <mesh
        name="CupBoard"
        geometry={nodes.CupBoard.geometry}
        material={textureMaterial}
        position={[-5.308, 0.341, 0.02]}
      />
      <mesh
        name="Slippies"
        geometry={nodes.Slippies.geometry}
        material={textureMaterial}
        position={[-4.484, 0.068, -2.251]}
      />
      <mesh
        name="Darwaaza"
        geometry={nodes.Darwaaza.geometry}
        material={textureMaterial}
        position={[1.124, 1.306, -1.774]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        name="Clock"
        geometry={nodes.Clock.geometry}
        material={textureMaterial}
        position={[-5.456, 0.916, -1.366]}
        rotation={[0, -0.279, 0]}
      />
      <mesh
        name="Frame004"
        geometry={nodes.Frame004.geometry}
        material={textureMaterial}
        position={[-2.043, 1.658, -3.342]}
        rotation={[1.314, 0, 0]}
      />
      <mesh
        name="Frame005"
        geometry={nodes.Frame005.geometry}
        material={textureMaterial}
        position={[-2.514, 1.176, -3.297]}
        rotation={[1.314, 0, 0]}
      />
      <mesh
        name="Bed"
        geometry={nodes.Bed.geometry}
        material={textureMaterial}
        position={[0.127, 0.437, 1.615]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="WallsB"
        geometry={nodes.WallsB.geometry}
        material={textureMaterial}
        position={[-3.397, 1.59, -1.468]}
      />
      <mesh
        name="Sil"
        geometry={nodes.Sil.geometry}
        material={textureMaterial}
        position={[-2.288, 1.493, 2.243]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
      />
      <mesh
        name="Ceiling_Main"
        geometry={nodes.Ceiling_Main.geometry}
        material={textureMaterial}
        position={[-4.197, 3.155, -0.736]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="Lapp"
        geometry={nodes.Lapp.geometry}
        material={textureMaterial}
        position={[-4.304, 0.968, -3.44]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        name="SideDesk"
        geometry={nodes.SideDesk.geometry}
        material={textureMaterial}
        position={[-5.045, 0.44, -1.378]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        name="Bookshelf2"
        geometry={nodes.Bookshelf2.geometry}
        material={textureMaterial}
        position={[-1.074, 1.712, -3.375]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        name="Floor"
        geometry={nodes.Floor.geometry}
        material={textureMaterial}
        position={[-5.258, 0.033, -2.982]}
      />
      <mesh
        name="LappyStand"
        geometry={nodes.LappyStand.geometry}
        material={textureMaterial}
        position={[-4.173, 0.829, -3.342]}
      />
      <mesh
        name="Piggy"
        geometry={nodes.Piggy.geometry}
        material={textureMaterial}
        position={[-5.567, 0.579, 0.03]}
        rotation={[Math.PI / 2, 0, -2.224]}
      />
      <mesh
        name="Succulent_plant"
        geometry={nodes.Succulent_plant.geometry}
        material={textureMaterial}
        position={[-3.855, 0.813, -3.434]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="tablet"
        geometry={nodes.tablet.geometry}
        material={textureMaterial}
        position={[-5.343, 1.045, -2.199]}
        rotation={[-Math.PI / 2, 0.751, Math.PI / 2]}
      />
      <mesh
        name="Trophy"
        geometry={nodes.Trophy.geometry}
        material={textureMaterial}
        position={[-2.49, 1.856, -3.424]}
        rotation={[0, 1.285, 0]}
      />
      <mesh
        name="KeyBoard"
        geometry={nodes.KeyBoard.geometry}
        material={textureMaterial}
        position={[-4.026, 0.85, -3.148]}
        rotation={[0.046, 0, 0]}
      />
      <mesh
        name="Vase"
        geometry={nodes.Vase.geometry}
        material={textureMaterial}
        position={[-5.545, 0.941, -3.362]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="Stylus"
        geometry={nodes.Stylus.geometry}
        material={textureMaterial}
        position={[-5.174, 0.987, -2.938]}
        rotation={[0, 0.959, Math.PI]}
      />
      <mesh
        name="soccer_ball"
        geometry={nodes.soccer_ball.geometry}
        material={textureMaterial}
        position={[-1.461, 0.248, -3.465]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="Merch2"
        geometry={nodes.Merch2.geometry}
        material={textureMaterial}
        position={[-5.553, 1.811, -0.103]}
        rotation={[Math.PI / 2, 0, -0.464]}
      />
      <mesh
        name="Merch"
        geometry={nodes.Merch.geometry}
        material={textureMaterial}
        position={[-5.553, 1.811, 0.212]}
        rotation={[Math.PI / 2, 0, -0.399]}
      />
      <mesh
        name="Plane"
        geometry={nodes.Plane.geometry}
        material={textureMaterial}
        position={[-3.703, 1.607, -3.734]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="IDHook"
        geometry={nodes.IDHook.geometry}
        material={textureMaterial}
        position={[-3.696, 2.017, -3.74]}
      />
      <mesh
        name="KeyBoardKeys"
        geometry={nodes.KeyBoardKeys.geometry}
        material={textureMaterial}
        position={[-4.026, 0.85, -3.148]}
        rotation={[0.046, 0, 0]}
      />
      <mesh
        name="BOUKS"
        geometry={nodes.BOUKS.geometry}
        material={textureMaterial}
        position={[-3.38, 1.59, -1.468]}
      />
      <group>
        <mesh
          rotation={[-Math.PI / 2, 0.751, Math.PI / 2]}
          position={[-5.328, 1.065, -2.199]}
          scale={[0.3, 0.3, 0.3]}
        >
          <planeGeometry args={[3.2, 1.9]} />
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
            <videoTexture attach="map" args={[video]} />
            <videoTexture attach="emissiveMap" args={[video]} />
          </meshStandardMaterial>
        </mesh>
        <mesh
          name="TabScreen"
          geometry={nodes.TabScreen.geometry}
          material={textureMaterial}
          position={[-5.328, 1.061, -2.199]}
          rotation={[-Math.PI / 2, 0.751, Math.PI / 2]}
        />
      </group>
      <group>
        <mesh
          name="LappyScreen"
          geometry={nodes.LappyScreen.geometry}
          material={textureMaterial}
          position={[-4.31, 1.194, -3.564]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          position={[-4.31, 1.194, -3.557]}
          rotation={[-0.05, 0.02, 0]}
          scale={[0.178, 0.178, 0.178]}
        >
          <planeGeometry args={[3.2, 1.9]} />
          <meshStandardMaterial side={THREE.DoubleSide} map={laptopScreen} />
        </mesh>
      </group>
      <group>
        <mesh
          name="PhoneScreen"
          geometry={nodes.PhoneScreen.geometry}
          material={textureMaterial}
          position={[-4.755, 1.008, -3.208]}
          rotation={[0, -0.903, -1.295]}
        />
        <mesh
          position={[-4.755, 1.008, -3.197]}
          rotation={[-0.3, 0.53, 0.17]}
          scale={[0.03, 0.12, 0.1]}
        >
          <planeGeometry args={[3.2, 1.9]} />
          <meshStandardMaterial
            side={THREE.DoubleSide}
            map={mobileScreen}
            color={"white"}
          />
        </mesh>
      </group>
      <group>
        <mesh
          name="ClockScreen"
          geometry={nodes.ClockScreen.geometry}
          material={materials["AlarmScreen.001"]}
          position={[-5.402, 0.916, -1.313]}
          rotation={[0, -0.279, 0]}
        />

        <mesh
          position={[-5.4, 0.916, -1.312]}
          rotation={[0, 1.2925, 0]}
          scale={[0.101, 0.1, 0.1]}
        >
          <planeGeometry args={[3.588, 1.82]} />
          <meshStandardMaterial side={THREE.DoubleSide} color={"black"} />
        </mesh>
        <Html
          position={[-5.49, 0.95, -1.35]}
          className="clock_div"
          rotation={[0,1.3,0]}
          transform
          // style={{ position: "relative" }}
          anchorX="center"
        >
          <div className="clock_font" rotation={[0,0.4,0]}>
           <div id='days_to_go'><p id="s1"><span id='time'>{daysRemaining}</span> Days </p></div> 
            <p id="s2">to go</p>
          </div>
        </Html>
      </group>
    </group>
  );
}

useGLTF.preload("/RoomScene.gltf");
