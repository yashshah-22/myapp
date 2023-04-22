import React, { useState } from 'react';
import './LeaderBoard.css';

const Leaderboard = () => {
  const [users, setUsers] = useState([
    { name: 'John', referrals: 36 },
    { name: 'Jane', referrals: 32 },
    { name: 'Bob', referrals: 30 },
    { name: 'Samantha', referrals: 28 },
    { name: 'Yash', referrals: 28 },
    { name: 'Vidhan', referrals: 26 },
    { name: 'Jigyasa', referrals: 25 },
    { name: 'Triyar', referrals: 24 },
    { name: 'Virat', referrals: 23 },
    { name: 'Rohit', referrals: 17 },
    { name: 'Manish', referrals: 14 },
    { name: 'Rahul', referrals: 13 },
  ]);

  return (
    <div className="bada">
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table className='tab'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Referral Points</th>
          </tr>
        </thead>
        <tbody>
          {users.sort((a, b) => b.referrals - a.referrals).map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.referrals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Leaderboard;
