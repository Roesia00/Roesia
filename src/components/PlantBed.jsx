import React from 'react';
import StrawberryPlant from './StrawberryPlant.jsx';
export default function PlantBed({picked=false}){return <group>
  <mesh position={[0,.18,0]} castShadow receiveShadow><boxGeometry args={[5.8,.34,1.55]}/><meshStandardMaterial color="#34483b" roughness={.85}/></mesh>
  <mesh position={[0,.38,0]}><boxGeometry args={[5.55,.12,1.32]}/><meshStandardMaterial color="#49382c"/></mesh>
  {Array.from({length:9},(_,i)=><StrawberryPlant key={i} position={[-2.45+i*.61,.48,(i%2)*.42-.2]} picked={picked&&i===4}/>)}
  {[-2.55,2.55].map(x=><group key={x} position={[x,-.28,0]}><mesh><cylinderGeometry args={[.055,.07,.68,12]}/><meshStandardMaterial color="#87968e" metalness={.55}/></mesh><mesh position={[0,-.35,0]}><boxGeometry args={[.5,.08,.48]}/><meshStandardMaterial color="#62736a"/></mesh></group>)}
</group>}