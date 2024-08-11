import React, { useState } from "react";
import "./Players.css";

const Players = (props) => {
  const [playerName, setPlayerName] = useState("");
  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleAdd = () => {
    if(localStorage.getItem(`${playerName}`)){
     alert("ברוך שובך")
      props.setNumOfPlayers((prevPlayers) => [...prevPlayers, playerName]);
    } else {
    props.setNumOfPlayers((prevPlayers) => [...prevPlayers, playerName]);
    setPlayerName("");   
    }
   
  };

const handleStart =() => {
    props.setStart(false);
  props.numOfPlayers.map((event,ind)=>{
    let p = {
      score:[]
    }
    if(localStorage.getItem(`${playerName}`)){
        
     }else{
      props.setArrPerson((prevArrPerson)=>[...prevArrPerson,p]);
     localStorage.setItem( `${event}`, JSON.stringify(p));   
     }
  });
 
   }


  return (
    <div className="container">
      <div>
        <h3>שם השחקן</h3>
        <input className="player-input" type="text" value={playerName} onChange={handleNameChange}placeholder="הכנס שם שחקן"/>
        <button className="button" onClick={handleAdd}>הוסף שחקן</button>
        <br />
      </div>
      <div>
        <h4 >שחקנים שהוזנו</h4>
        <ol dir="rtl">
          {props.numOfPlayers.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ol>
      </div>
      <br />
      <button className="button" onClick={handleStart}>התחל</button>
    </div>
  );
};
export default Players;