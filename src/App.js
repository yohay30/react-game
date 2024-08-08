import logo from './logo.svg';
import './App.css';
import Players from './components/Players';
import AppAllGames from './components/AppAllGames';
function App() {


  return (
    <div className="App">
      <header className="App-header">
       <Players/>
       <AppAllGames />
      </header>
    </div>
  );
}

export default App;
