import React from 'react'
import QR from './components/qr.png';
import './VoterStatus.css';
const VoterStatus = () => {
  return (
    <div className='voterstatus'>
    <center><h1>VOTER STATUS</h1></center>
        <center><img src={QR} ></img></center>
        <center><p className='status'>Voter Status : Voted✅</p></center>
    </div>
  )
}

export default VoterStatus