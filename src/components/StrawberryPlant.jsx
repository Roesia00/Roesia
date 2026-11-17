import React from 'react';
function Leaf({position,rotation=[0,0,0],scale=[1,1,1]}){return <mesh position={position} rotation={rotation} scale={scale} castShadow><sphereGeometry args={[1,16,10]}/><meshStandardMaterial color="#39864b" roughness={.8}/></mesh>}
function Berry({position,scale=1,color="#d92e48"}){return <group position={position} scale={scale}>
  <mesh position={[0,0,0]} scale={[.27,.36,.25]} castShadow><sphereGeometry args={[1,24,18]}/><meshStandardMaterial color={color} roughness={.34}/></mesh>
  {Array.from({length:6},(_,i)=><mesh key={i} position={[Math.cos(i*Math.PI/3)*.105,.31,Math.sin(i*Math.PI/3)*.105]} rotation={[.25,i*Math.PI/3,.35]} scale={[.13,.035,.065]}><sphereGeometry args={[1,10,8]}/><meshStandardMaterial color="#438c45"/></mesh>)}
  <mesh position={[0,.39,0]}><cylinderGeometry args={[.012,.018,.15,8]}/><meshStandardMaterial color="#5b9148"/></mesh>
</group>}
export default function StrawberryPlant({position=[0,0,0],picked=false}){return <group position={position}>
  <mesh position={[0,.02,0]} rotation={[0,0,.18]}><cylinderGeometry args={[.018,.028,.55,8]}/><meshStandardMaterial color="#568f4d"/></mesh>
  <Leaf position={[-.2,.2,.03]} rotation={[.2,.4,.45]} scale={[.23,.045,.13]}/>
  <Leaf position={[.18,.28,0]} rotation={[.2,1,-.4]} scale={[.24,.045,.14]}/>
  <Leaf position={[0,.34,-.17]} rotation={[.5,.3,.2]} scale={[.2,.04,.12]}/>
  {!picked&&<Berry position={[.02,.04,.2]} scale={.9}/>}<Berry position={[-.18,-.08,-.12]} scale={.7} color="#e8a344"/>
</group>}