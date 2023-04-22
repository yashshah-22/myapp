import React from 'react';
import ElectionCard from './ElectionCard';
import NM from './components/narendramodi.jpg';
import RK from './components/rk.jpg';
import JD from './components/jd.jpg';
import DM from './components/dm.jpg';
import './Card.css';
const Card = () => {
  return (
    <div className="container">
      <ElectionCard
        name="Narendra Modi"
        designation="Prime Minister of India"
        imageSrc={NM}
        quote="Elections belong to the people It's their decision. If they decide to turn their back on the fire and burn their behinds, then they will just have to sit on their blisters."
      />,
      <ElectionCard
        name="Droupadi Murmu"
        designation="President of India"
        imageSrc={DM}
        quote="Talk is cheap, voting is free; take it to the polls."
      />,
      
     
    </div>
  );
};

export default Card;
