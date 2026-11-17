import React from 'react';
import PlantBed from './PlantBed.jsx';
import RobotArm from './RobotArm.jsx';
export default function Greenhouse({progress,running,picked}){return <group>
 <mesh position={[0,-.55,0]} receiveShadow><boxGeometry args={[9,.18,5.7]}/><meshStandardMaterial color="#586a5e"/></mesh>
 {[-4,4].map(x=><mesh key={x} position={[x,1.5,0]}><boxGeometry args={[.08,4.1,.08]}/><meshStandardMaterial color="#a9bdb2" metalness={.65}/></mesh>)}
 {[-2.4,0,2.4].map(z=><mesh key={z} position={[0,3.55,z]} rotation={[0,0,Math.PI/2]}><cylinderGeometry args={[.035,.035,8,8]}/><meshStandardMaterial color="#a9bdb2" metalness={.65}/></mesh>)}
 <mesh position={[0,3.5,0]} rotation={[Math.PI/2,0,0]}><planeGeometry args={[8,5]}/><meshStandardMaterial color="#b9e5d0" transparent opacity={.09} side={2}/></mesh>
 <PlantBed picked={picked}/><RobotArm progress={progress} running={running}/>
 <group position={[2.8,-.12,1.25]}><mesh position={[0,.18,0]}><boxGeometry args={[1.1,.36,.8]}/><meshStandardMaterial color="#d9e5dc"/></mesh>{Array.from({length:4},(_,i)=><mesh key={i} position={[-.34+i*.22,.48,0]}><sphereGeometry args={[.09,14,12]}/><meshStandardMaterial color="#d92e48"/></mesh>)}</group>
</group>}