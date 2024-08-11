import { useState } from "react";
import "./App.css";
import Players from "./components/Players";
import AppAllGames from "./components/AppAllGames";

function App() {
const [start,setStart ] = useState(true);
const [numOfPlayers, setNumOfPlayers] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        {start ?  <Players setStart={setStart} numOfPlayers={numOfPlayers} setNumOfPlayers={setNumOfPlayers}/>
         : <AppAllGames numOfPlayers={numOfPlayers} /> }
      </header>
    </div>
  );
}
export default App;