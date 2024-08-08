import React, { useState } from "react";
import "./Players.css";
let arrName = [];
const numOfPlayers = (selected) => {
  for (let i = 1; i <= selected; i++) {
    arrName.push(
      <div key={i} className="player-input">
        <h4>שחקן {i }</h4>
        <input type="text" placeholder="הכנס שם שחקן" required />
      </div>
    );
  }
  return arrName;
};
const upDate=() => {
console.log(arrName);
const json = JSON.stringify(arrName);
  const local = localStorage.setItem(json);
}

const Players = () => {
  const [selected, setSelected] = useState(null);
  const [playerNames, setPlayerNames] = useState("");
  const handleStart = () => {
    setPlayerNames(numOfPlayers(selected));
  };
  return (
    <div className="container" dir="rtl">
      {playerNames === "" ? (
        <>
          <h1 id="ask">כמה שחקנים?</h1>
          <div className="players">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`p ${selected === num ? "selected" : ""}`}
                onClick={() => setSelected(num)}
              >
                {num}
              </div>
            ))}
          </div>
          <button type="submit" className="start-button" onClick={handleStart}>
            בחר
          </button>
        </>
      ) : (
      <>
        <div className="player-inputs-container">{playerNames}</div>
        <div className="start-button" onClick = {upDate}>התחל</div>
      </>)}
    </div>
  );
};

export default Players;
