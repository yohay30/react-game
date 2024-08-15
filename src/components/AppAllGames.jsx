import React, { useState } from 'react';
import AppGame from './AppGame.jsx';
import './AppStyle.css';

const AppAllGames = ({ numOfPlayers}) => {
    const [playerNumbers, setPlayerNumbers] = useState(numOfPlayers.map(() => Math.floor(Math.random() * 99) + 1));
    const [Turn, setTurn] = useState(0);
const playerTurn = { background: "linear-gradient(135deg, #f5d742f0, #2944cd87)" };

    const TurnPlush = (Turn) => {
        if (Turn === "win") {
            setTurn("");
        } else {
            setTurn((Turn) => (Turn + 1) % numOfPlayers.length);
        }
    };
    const resetGame = () => {
        setTurn(0);
        setPlayerNumbers(numOfPlayers.map(() => Math.floor(Math.random() * 99) + 1));
    };

    return (
        <div className='dispels' dir='rtl'>
            {numOfPlayers.map((player, index) => (
                <div key={index}  
                    style={ Turn === index ? playerTurn : {} }//צבע רקע 
                    className={`player-${index}` }//מיקום שחקן 
                >
                  <AppGame Turn={Turn} randomNumber={playerNumbers[index]}  setTurn={TurnPlush} index={index} name={player} resetGame={resetGame} />
                </div>
            ))}

            {Turn === "win" ? <h1>יש לנו מנצח 🏆 </h1> : null } 
        </div>
    );
}

export default AppAllGames;
