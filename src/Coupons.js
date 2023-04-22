import React, { useState } from 'react';
import './Coupons.css';

function App() {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: 'Zomato',
      description: 'Get 20% off on your first order',
      code: 'ZOMATO20',
    },
    {
      id: 2,
      title: 'Book My Show',
      description: 'Buy one get one free on any movie',
      code: 'MTBOGO',
    },
    {
      id: 3,
      title: 'Amazon',
      description: 'Get 10% cashback on all purchases',
      code: 'AMAZON10',
    },
    {
        id: 4,
        title: 'DREAM 11',
        description: 'Get 20% cashback on your first deposit',
        code: 'DREAM11',
      },
      {
        id: 5,
        title: 'MAKE MY TRIP',
        description: 'Get 20% off on your next booking',
        code: 'MMTOFF',
      },
      {
        id: 6,
        title: 'FLIPKART',
        description: 'Get 10% cashback on all purchases',
        code: 'FLIPKART10',
      },
  ]);

  return (
    <div className="App">
      <h1>My Coupons</h1>
      <div className="coupons">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="coupon">
            <p className="ct">{coupon.title}</p>
            <p className='cd'>{coupon.description}</p>
            <p className="code">{coupon.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
