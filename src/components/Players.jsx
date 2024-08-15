import React, { useState } from "react";
import "./Players.css";

const Players = (props) => {
  const [tableData, setTableData] = useState([]);
  const [showTable, setShowTable] = useState(false);
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

   const showTableData = () => {
    const data = Object.keys(localStorage).map((key) => {
      const playerData = JSON.parse(localStorage.getItem(key));
      const time = playerData.score.length;
      let sum = 0;
      if (time > 0) {
        sum = playerData.score.reduce((acc, curr) => acc + curr, 0);
      }
      const averageScore = time > 0 ? sum / time : 0;
      return { name: key, scores: averageScore };
    });
    const filteredData = data.filter((player) => player.scores > 0);
    const sortedData = filteredData.sort((a, b) => a.scores - b.scores);
    setShowTable(true);
    setTableData(sortedData);
  };

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
            <li key={index}> {name}</li>
          ))}
        </ol>
      </div>

      <br/>
      <button className="button" onClick={handleStart} >התחל </button>
      <br />
    <button className="button" onClick={showTableData}>הצג טבלת אליפות</button>
    
    <div>
        {showTable && (
          <ol>
            {tableData.map((data, index) => (
            <li key={index}> {data.name} - {data.scores}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
    
   
  );
};
export default Players;