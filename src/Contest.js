import React, { useState } from "react";
import "./App.css";
import './Contest.css';

function App() {
  const [player1Amount, setPlayer1Amount] = useState("");
  const [player2Amount, setPlayer2Amount] = useState("");
  const [winner, setWinner] = useState("");

  const handlePlayer1AmountChange = (event) => {
    setPlayer1Amount(event.target.value);
  };

  const handlePlayer2AmountChange = (event) => {
    setPlayer2Amount(event.target.value);
  };

  const handleJoinGame = () => {
    if (player1Amount === "" || player2Amount === "") {
      alert("Please enter the amount for both players.");
      return;
    }
    setWinner("");
    const totalAmount = parseInt(player1Amount) + parseInt(player2Amount);
    const randomNumber = Math.floor(Math.random() * 2);
    const winningAmount = totalAmount ;
    if (randomNumber === 0) {
      setWinner("Player 1 wins " + winningAmount + "!");
    } else {
      setWinner("Player 2 wins " + winningAmount + "!");
    }
  };

  return (
    <div className="App">
      <h1>Welcome to the Political game!</h1>
      <div className="input-container">
      <center><h1>POSTER MAKING</h1></center>
        <div className="player-input">
          <label htmlFor="player1Amount">Player 1 Amount:</label>
          <input
            type="number"
            id="player1Amount"
            value={player1Amount}
            onChange={handlePlayer1AmountChange}
          />
        </div>
        <div className="player-input">
          <label htmlFor="player2Amount">Player 2 Amount:</label>
          <input
            type="number"
            id="player2Amount"
            value={player2Amount}
            onChange={handlePlayer2AmountChange}
          />
        </div>
        <button className="join-game-button" onClick={handleJoinGame}>
          Join Game
        </button>
      </div>
      <div className="winner-container">
        {winner !== "" && <h2>{winner}</h2>}
      </div>
      
    </div>
  );
}

export default App;
