"use client"

import React, { useRef , useState } from 'react'
import { useGLTF , useTexture , useVideoTexture} from '@react-three/drei';
import * as THREE from 'three';
import url from "../../../public/video.mp4";






export function Museum(props) {
  const texture=useTexture('models/BakedTexture.png');
  texture.flipY=false;
  texture.colorSpace=THREE.SRGBColorSpace;
  const textureMaterial=new THREE.MeshStandardMaterial({
    map:texture,
  })
  const { nodes, materials } = useGLTF('models/Museum_FinalExport1.gltf')
  
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


  return (
    <group {...props} dispose={null}>
    
      <mesh geometry={nodes.Corridoor.geometry} material={textureMaterial} position={[0, 2.061, 69.472]} />
      <mesh geometry={nodes.Celings.geometry} material={textureMaterial} position={[0, 2.081, 34.518]} />
      <mesh geometry={nodes.Entrance.geometry} material={textureMaterial} position={[0, 2.061, 0]} />
      <mesh geometry={nodes.Ground.geometry} material={textureMaterial} position={[0, 2.061, 51.853]} />
      <group position={[0, 2.061, 69.472]}>
        <mesh geometry={nodes.Cube001.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Cube001_1.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Cube001_2.geometry} material={textureMaterial} />
      </group>
      <mesh geometry={nodes.Easels.geometry} material={textureMaterial} position={[0.128, 1.129, 40.618]} rotation={[-1.453, 0.066, 0.506]} />
      <group position={[4.957, 2.755, -10.135]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524006.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524006_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, -1.343]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524001.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524001_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, -10.135]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524002.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524002_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, -1.343]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524003.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524003_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 6.89]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524004.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524004_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 15.682]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524005.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524005_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 6.89]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524007.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524007_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 15.682]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524008.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524008_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 24.755]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524009.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524009_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 33.547]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524010.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524010_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 24.755]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524011.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524011_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 33.547]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524012.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524012_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 41.78]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524013.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524013_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 50.572]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524014.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524014_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 41.78]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524015.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524015_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 50.572]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524016.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524016_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 59.532]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524017.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524017_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 68.324]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524018.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524018_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 59.532]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524019.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524019_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 68.324]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524020.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524020_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 76.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524021.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524021_1.geometry} material={textureMaterial} />
      </group>
      <group position={[4.957, 2.755, 85.349]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524022.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524022_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 76.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524023.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524023_1.geometry} material={textureMaterial} />
      </group>
      <group position={[-4.962, 2.755, 85.349]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524024.geometry} material={textureMaterial} />
        <mesh geometry={nodes.dab3f60e50f26f0116e837d544be3524024_1.geometry} material={textureMaterial} />
      </group>



      <group>
      <mesh position={[-1.80, 1.58, -2.74]} scale={[0.638,1.6,1]} rotation={[0.15,-0.33,0.04]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane036.geometry} material={materials.Canvas} position={[-1.735, 0.081, -2.886]} rotation={[-1.442, -0.042, -0.313]}  />
      </group>



      <group>
      <mesh position={[1.982,1.6,-2.867]} scale={[0.65,1.62,1]} rotation={[0.15,0.52,-0.075]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane037.geometry} material={materials.Canvas} position={[1.921, 0.081, -3.037]} rotation={[-1.453, 0.066, 0.506]} />
      </group>


      <group>
      <mesh position={[-1.80, 1.58, 15.71]} scale={[0.638,1.6,1]} rotation={[0.15,-0.33,0.04]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane038.geometry} material={materials.Canvas} position={[-1.735, 0.081, 15.553]} rotation={[-1.442, -0.042, -0.313]} />
      </group>


      <group>
      <mesh position={[1.982,1.6,14.98]} scale={[0.65,1.62,1]} rotation={[0.15,0.52,-0.075]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane039.geometry} material={materials.Canvas} position={[1.921, 0.081, 15.403]} rotation={[-1.453, 0.066, 0.506]} />
      </group>



      <group>
      <mesh position={[-1.80, 1.58, 31.13]} scale={[0.638,1.6,1]} rotation={[0.15,-0.33,0.04]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane040.geometry} material={materials.Canvas} position={[-1.735, 0.081, 31.017]} rotation={[-1.442, -0.042, -0.313]} />
      </group>

      <group>
      <mesh position={[1.982,1.6,30.98]} scale={[0.65,1.62,1]} rotation={[0.15,0.52,-0.075]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane041.geometry} material={materials.Canvas} position={[1.921, 0.081, 30.867]} rotation={[-1.453, 0.066, 0.506]} />
      </group>

      

      <group>
      <mesh position={[-1.80, 1.58, 49.6]} scale={[0.638,1.6,1]} rotation={[0.15,-0.33,0.04]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane042.geometry} material={materials.Canvas} position={[-1.735, 0.081, 49.456]} rotation={[-1.442, -0.042, -0.313]} />

      </group>

      <group>
      <mesh position={[1.982,1.6,49]} scale={[0.65,1.62,1]} rotation={[0.15,0.52,-0.075]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane043.geometry} material={materials.Canvas} position={[1.921, 0.081, 49.306]} rotation={[-1.453, 0.066, 0.506]} />
      </group>

      <group>
      <mesh position={[-1.80, 1.58, 65.25]} scale={[0.638,1.6,1]} rotation={[0.15,-0.33,0.04]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane044.geometry} material={materials.Canvas} position={[-1.735, 0.081, 65.117]} rotation={[-1.442, -0.042, -0.313]} />

      </group>

      <group>
      <mesh position={[1.982,1.6,65]} scale={[0.65,1.62,1]} rotation={[0.15,0.52,-0.075]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane045.geometry} material={materials.Canvas} position={[1.921, 0.081, 64.967]} rotation={[-1.453, 0.066, 0.506]} />
      </group>

      <group>
      <mesh position={[-1.80, 1.58, 83.68]} scale={[0.638,1.6,1]} rotation={[0.15,-0.33,0.04]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane046.geometry} material={materials.Canvas} position={[-1.735, 0.081, 83.557]} rotation={[-1.442, -0.042, -0.313]} />

      </group>
      <group>
      <mesh position={[1.982,1.6,83.2]} scale={[0.65,1.62,1]} rotation={[0.15,0.52,-0.075]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Plane047.geometry} material={materials.Canvas} position={[1.921, 0.081, 83.406]} rotation={[-1.453, 0.066, 0.506]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Museum_FinalExport1.gltf')
