import React from 'react';
import './ElectionCard.css';
import { Link} from 'react-router-dom';
const ElectionCard2 = ({ name, imageSrc, quote ,designation}) => {
  return (
    <div className="election-card">
      <img className="image" src={imageSrc} alt={name} />
      <div className="name">{name}</div>
      <div className='designation'>{designation}</div>
      <Link to="/registerform"><button>Register Now</button></Link>
    
    </div>
  );
};

export default ElectionCard2;
