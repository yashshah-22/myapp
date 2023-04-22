import React, { useState } from 'react';
import './ReferralSystem.css';
import { Link } from 'react-router-dom';
function ReferralSystem() {
  const [referralCode, setReferralCode] = useState('');
  const [referralPoints, setReferralPoints] = useState(0);

  const handleReferralCodeChange = (event) => {
    setReferralCode(event.target.value);
  };

  const handleReferralSubmit = (event) => {
    event.preventDefault();
    // TODO: Validate the referral code and assign points to the referrer and referred person
    setReferralPoints(2);
  };

  return (
    <>
    <div className='page'>
    <div className='box'>
      <center><h1>Referral System</h1></center>
      <center><p>Enter a referral code to earn points:</p></center>
      <form onSubmit={handleReferralSubmit}>
        <input type="text" placeholder="Referral code" value={referralCode} onChange={handleReferralCodeChange} />
        <button className='buts' type="submit">Submit</button>
      </form>
      {referralPoints > 0 && (
        <div className='congo'>
          <center><p>CONGRATULATIONS,YOU HAVE EARNED {referralPoints} POINTS!</p>
          <p>THE PERSON WHOM YOU REFERRED HAS BEEN AWARDED 1 POINT.</p></center>
        </div>
      )}
    </div>
    </div>
    <div>
    <Link to="/leaderboard">
<button className='leaderboard__button'>CHECK LEADERBOARD</button>
</Link>
    </div>
    </>
  );
}

export default ReferralSystem;
