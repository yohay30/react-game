import { useState } from "react";
import "./App.css";
import Players from "./components/Players";
import AppAllGames from "./components/AppAllGames";

function App() {
const [start,setStart ] = useState(true);
const [numOfPlayers, setNumOfPlayers] = useState([]);
const [arrPerson ,setArrPerson] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
    {start ? <Players setStart={setStart} numOfPlayers={numOfPlayers} setNumOfPlayers={setNumOfPlayers}  arrPerson={arrPerson} setArrPerson={setArrPerson}/>
    : <AppAllGames numOfPlayers = {numOfPlayers} arrPerson = {arrPerson}  setStart={setStart}/>}
      </header>
    </div>
  );
}
export default App;