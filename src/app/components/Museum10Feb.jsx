/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Museum10Feb.gltf 
*/

"use client"

import React, { Suspense, useRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import proshowsurl from '../../../public/Proshows.mp4';
import proshowsReverseurl from '../../../public/Proshowsreverse.mp4';



export function Museumfinal(props) {
      const texture = useTexture('BakedTexture_Events.webp');
      texture.flipY = false;
      texture.colorSpace = THREE.SRGBColorSpace;
      const textureMaterial = new THREE.MeshStandardMaterial({
            map: texture,
      })
      const { nodes, materials } = useGLTF('models/Museum10Feb.gltf')

      // const [video] = useState(() => {
      //   const vid = document.createElement("video");
      //   vid.src = url;
      //   vid.crossOrigin = "Anonymous";
      //   vid.loop = true;
      //   vid.muted = true;
      //   vid.type = "video/mp4" / vid.play();
      //   console.log(vid);
      //   return vid;
      // });

      const proshowsLeft = useTexture("proshows-Left.jpg");
      proshowsLeft.flipX = true;

      const proshowsRight = useTexture("proshows-Right.jpg");
      proshowsRight.flipX = true;

      //video for proshows

      /*   const [Proshows] = useState(() => {
               const vid = document.createElement("video");
               vid.src = proshowsurl;
               vid.crossOrigin = "Anonymous";
               vid.loop = true;
               vid.muted = true;
               vid.type = "Proshows/mp4" / vid.play();
               console.log(vid);
               return vid;
         });
   
         const [ProshowsReverse] = useState(() => {
               const vid = document.createElement("video");
               vid.src = proshowsReverseurl;
               vid.crossOrigin = "Anonymous";
               vid.loop = true;
               vid.muted = true;
               vid.type = "Proshows/mp4" / vid.play();
               console.log(vid);
               return vid;
         });*/

      const pronitesScreen = useTexture("Frame 15617-min.jpg");
      pronitesScreen.flipX = true;

      const proniteContent = useTexture("Frame 15621-min.jpg");
      proniteContent.flipX = true;

      const creatorsScreen = useTexture("Frame 15612-min.jpg");
      creatorsScreen.flipX = true;

      const creatorsContent = useTexture("Frame 15613-min.jpg");
      creatorsContent.flipX = true;

      const CriticalScreen = useTexture("Frame 15619-min.jpg")
      CriticalScreen.flipX = true;

      const criticalContent = useTexture("Frame 15623-min.jpg");
      criticalContent.flipX = true;

      const Informals = useTexture("Frame 15618-min.jpg");
      Informals.flipX = true;

      const informalContent = useTexture("Frame 15622-min.jpg");
      informalContent.flipX = true;

      const lastImageLeft = useTexture("Frame 6356192-min.jpg")
      lastImageLeft.flipX = true;

      const lastImageRight = useTexture("Frame 6356191-min.jpg")
      lastImageRight.flipX = true;

      return (
            <group {...props} dispose={null}>
                  <mesh geometry={nodes.Corridoor.geometry} material={textureMaterial} position={[0, 2.061, 69.472]} />
                  <mesh geometry={nodes.Celings.geometry} material={textureMaterial} position={[0, 2.081, 34.518]} />
                  <mesh geometry={nodes.Entrance.geometry} material={textureMaterial} position={[0, 2.061, 0]} />
                  <mesh geometry={nodes.Ground.geometry} material={textureMaterial} position={[0, 2.061, 51.853]} />
                  <mesh geometry={nodes.Khidki.geometry} material={textureMaterial} position={[0, 2.061, 69.472]} />
                  <mesh geometry={nodes.Easels.geometry} material={textureMaterial} position={[0.128, 1.129, 40.618]} rotation={[-1.453, 0.066, 0.506]} />
                  <mesh geometry={nodes['2'].geometry} material={textureMaterial} position={[4.957, 2.755, -10.135]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['1'].geometry} material={textureMaterial} position={[4.957, 2.755, -1.343]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['3'].geometry} material={textureMaterial} position={[-4.962, 2.755, -10.135]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['4'].geometry} material={textureMaterial} position={[-4.962, 2.755, -1.343]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['2001'].geometry} material={textureMaterial} position={[4.957, 2.755, 6.89]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['1001'].geometry} material={textureMaterial} position={[4.957, 2.755, 15.682]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['3001'].geometry} material={textureMaterial} position={[-4.962, 2.755, 6.89]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['4001'].geometry} material={textureMaterial} position={[-4.962, 2.755, 15.682]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['2002'].geometry} material={textureMaterial} position={[4.957, 2.755, 24.755]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['1002'].geometry} material={textureMaterial} position={[4.957, 2.755, 33.547]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['3002'].geometry} material={textureMaterial} position={[-4.962, 2.755, 24.755]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['4002'].geometry} material={textureMaterial} position={[-4.962, 2.755, 33.547]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['2003'].geometry} material={textureMaterial} position={[4.957, 2.755, 41.78]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['1003'].geometry} material={textureMaterial} position={[4.957, 2.755, 50.572]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['3003'].geometry} material={textureMaterial} position={[-4.962, 2.755, 41.78]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['4003'].geometry} material={textureMaterial} position={[-4.962, 2.755, 50.572]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['2004'].geometry} material={textureMaterial} position={[4.957, 2.755, 59.532]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['1004'].geometry} material={textureMaterial} position={[4.957, 2.755, 68.324]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['3004'].geometry} material={textureMaterial} position={[-4.962, 2.755, 59.532]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['4004'].geometry} material={textureMaterial} position={[-4.962, 2.755, 68.324]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['2005'].geometry} material={textureMaterial} position={[4.957, 2.755, 76.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['1005'].geometry} material={textureMaterial} position={[4.957, 2.755, 85.349]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['3005'].geometry} material={textureMaterial} position={[-4.962, 2.755, 76.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                  <mesh geometry={nodes['4005'].geometry} material={textureMaterial} position={[-4.962, 2.755, 85.349]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />


                  <group>
                        <mesh position={[-1.80, 1.58, -2.74]} scale={[0.638, 1.67, 1]} rotation={[0.15, -0.33, 0.04]}>                              <planeGeometry args={[3.2, 1.9]} />
                              <meshStandardMaterial side={THREE.DoubleSide} map={proshowsRight}>
                                    {/*  <videoTexture attach="map" args={[ProshowsReverse]} colorSpace='srgb'/>*/}
                                    {/* <videoTexture attach="emissiveMap" args={[ProshowsReverse]} /> */}
                              </meshStandardMaterial>
                        </mesh>
                        {/* <mesh geometry={nodes.Plane036.geometry} material={materials.Canvas} position={[-1.735, 0.081, -2.886]} rotation={[-1.442, -0.042, -0.313]} /> */}
                  </group>



                  <group>
                        <mesh position={[1.982, 1.6, -2.869]} scale={[0.65, 1.68, 1]} rotation={[0.15, 0.52, -0.075]}>                              <planeGeometry args={[3.2, 1.9]} />
                              <meshStandardMaterial side={THREE.DoubleSide} map={proshowsLeft}>
                                    {/*   <videoTexture attach="map" args={[Proshows]} colorSpace="srgb"></videoTexture> */}
                                    {/* <videoTexture attach="emissiveMap" args={[Proshows]} /> */}
                              </meshStandardMaterial>
                        </mesh>
                        <mesh geometry={nodes.Plane037.geometry} material={materials.Canvas} position={[1.921, 0.081, -3.037]} rotation={[-1.453, 0.066, 0.506]} />
                  </group>


                        <group>
                              <mesh position={[-1.80, 1.58, 15.71]} scale={[0.638, 1.6, 1]} rotation={[0.15, -0.33, 0.04]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial side={THREE.DoubleSide} map={proniteContent}>
                                          {/*<videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} />*/}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane038.geometry} material={materials.Canvas} position={[-1.735, 0.081, 15.553]} rotation={[-1.442, -0.042, -0.313]} />
                        </group>


                        <group>
                              <mesh position={[1.96, 1.6, 15.5]} scale={[0.68, 1.62, 1]} rotation={[0.15, 0.52, -0.075]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial side={THREE.DoubleSide} map={pronitesScreen}>
                                          {/*  <videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} />*/}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane039.geometry} material={materials.Canvas} position={[1.921, 0.081, 15.403]} rotation={[-1.453, 0.066, 0.506]} />
                        </group>



                        <group>
                              <mesh position={[-1.80, 1.58, 31.13]} scale={[0.638, 1.6, 1]} rotation={[0.15, -0.33, 0.04]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial side={THREE.DoubleSide} map={creatorsContent}>
                                          {/*<videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} />*/}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane040.geometry} material={materials.Canvas} position={[-1.735, 0.081, 31.017]} rotation={[-1.442, -0.042, -0.313]} />
                        </group>

                        <group>
                              <mesh position={[1.982, 1.6, 30.98]} scale={[0.65, 1.62, 1]} rotation={[0.15, 0.52, -0.075]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial side={THREE.DoubleSide} map={creatorsScreen}>
                                          {/* <videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} />*/}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane041.geometry} material={materials.Canvas} position={[1.921, 0.081, 30.867]} rotation={[-1.453, 0.066, 0.506]} />
                        </group>



                        <group>
                              <mesh position={[-1.80, 1.58, 49.6]} scale={[0.638, 1.6, 1]} rotation={[0.15, -0.33, 0.04]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial side={THREE.DoubleSide} map={criticalContent}>
                                          {/*<videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} />*/}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane042.geometry} material={materials.Canvas} position={[-1.735, 0.081, 49.456]} rotation={[-1.442, -0.042, -0.313]} />

                        </group>

                        <group>
                              <mesh position={[1.982, 1.6, 49.45]} scale={[0.65, 1.62, 1]} rotation={[0.15, 0.52, -0.075]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial map={CriticalScreen} side={THREE.DoubleSide}>
                                          {/* <videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} />*/}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane043.geometry} material={materials.Canvas} position={[1.921, 0.081, 49.306]} rotation={[-1.453, 0.066, 0.506]} />
                        </group>

                        <group>
                              <mesh position={[-1.80, 1.58, 65.25]} scale={[0.638, 1.6, 1]} rotation={[0.15, -0.33, 0.04]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial side={THREE.DoubleSide} map={informalContent}>
                                          {/*<videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} />*/}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane044.geometry} material={materials.Canvas} position={[-1.735, 0.081, 65.117]} rotation={[-1.442, -0.042, -0.313]} />

                        </group>

                        <group>
                              <mesh position={[1.982, 1.6, 65.14]} scale={[0.65, 1.62, 1]} rotation={[0.15, 0.52, -0.075]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial map={Informals} side={THREE.DoubleSide}>
                                          {/* <videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} /> */}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane045.geometry} material={materials.Canvas} position={[1.921, 0.081, 64.967]} rotation={[-1.453, 0.066, 0.506]} />
                        </group>

                        <group>
                              <mesh position={[-1.80, 1.58, 83.68]} scale={[0.638, 1.6, 1]} rotation={[0.15, -0.33, 0.04]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial map={lastImageLeft} side={THREE.DoubleSide}>
                                          {/* <videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} /> */}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane046.geometry} material={materials.Canvas} position={[-1.735, 0.081, 83.557]} rotation={[-1.442, -0.042, -0.313]} />

                        </group>
                        <group>
                              <mesh position={[1.982, 1.6, 83.2]} scale={[0.65, 1.62, 1]} rotation={[0.15, 0.52, -0.075]}>
                                    <planeGeometry args={[3.2, 1.9]} />
                                    <meshStandardMaterial map={lastImageRight} side={THREE.DoubleSide}>
                                          {/* <videoTexture attach="map" args={[video]} />
<videoTexture attach="emissiveMap" args={[video]} /> */}
                                    </meshStandardMaterial>
                              </mesh>
                              <mesh geometry={nodes.Plane047.geometry} material={materials.Canvas} position={[1.921, 0.081, 83.406]} rotation={[-1.453, 0.066, 0.506]} />
                        </group>
                  </>
                  </Suspense >
            </group >

      )
}

useGLTF.preload('models/Museum10Feb.gltf')
