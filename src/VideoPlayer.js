import React from 'react';
import './ElectionCard.css';

const ElectionCard2 = ({ name, imageSrc, quote ,designation}) => {
  return (
    <div className="election-card">
      <img className="image" src={imageSrc} alt={name} />
      <div className="name">{name}</div>
      <div className='designation'>{designation}</div>
    </div>
  );
};

export default ElectionCard2;
