import React,{useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import * as THREE from 'three';
export default function RobotArm({progress=0,running=false}){const arm=useRef(),grip=useRef();
useFrame((_,dt)=>{if(arm.current){const target=progress<.25?-.15:progress<.55?-.62:progress<.82?-.3:.15;arm.current.rotation.z=THREE.MathUtils.damp(arm.current.rotation.z,target,3,dt)}if(grip.current){const close=progress>.38&&progress<.9?.07:.16;grip.current.children.forEach((f,i)=>{f.position.x=THREE.MathUtils.damp(f.position.x,i===0?-close:close,7,dt)})}});
return <group position={[0,.65,-1.65]}>
 <mesh position={[0,-.22,0]}><cylinderGeometry args={[.42,.48,.3,28]}/><meshStandardMaterial color="#cbd7d0" metalness={.75} roughness={.25}/></mesh>
 <mesh position={[0,-.02,0]}><cylinderGeometry args={[.24,.24,.14,24]}/><meshStandardMaterial color="#e97850" metalness={.45}/></mesh>
 <group ref={arm} position={[.9,.12,0]}>
  <mesh position={[0,.36,0]} castShadow><boxGeometry args={[.27,.72,.28]}/><meshStandardMaterial color="#e2e9e4" metalness={.68} roughness={.25}/></mesh>
  <mesh position={[0,.73,0]}><sphereGeometry args={[.17,20,16]}/><meshStandardMaterial color="#ed8058" metalness={.5}/></mesh>
  <group position={[0,.78,0]} rotation={[0,0,.45]}>
   <mesh position={[0,.4,0]} castShadow><boxGeometry args={[.18,.82,.2]}/><meshStandardMaterial color="#dce6df" metalness={.7}/></mesh>
   <mesh position={[0,.82,0]}><sphereGeometry args={[.14,18,14]}/><meshStandardMaterial color="#ed8058"/></mesh>
   <group position={[0,.94,0]} ref={grip}>
    {[-1,1].map(s=><mesh key={s} position={[s*.16,0,0]} rotation={[0,0,-s*.18]} castShadow><capsuleGeometry args={[.045,.3,5,10]}/><meshStandardMaterial color="#9eb6aa" metalness={.45}/></mesh>)}
    <mesh position={[0,-.17,0]}><torusGeometry args={[.15,.025,8,24]}/><meshStandardMaterial color="#e8a15d" metalness={.5}/></mesh>
    <mesh position={[0,.16,0]}><torusGeometry args={[.18,.018,8,24]}/><meshStandardMaterial color="#8b9d93" metalness={.7}/></mesh>
   </group>
  </group>
 </group>
</group>}