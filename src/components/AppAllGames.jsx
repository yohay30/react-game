import React, { useState } from 'react';
import AppGame from './AppGame.jsx';
import './AppStyle.css';
const AppAllGames = ({ numOfPlayers,arrPerson}) => {
 
    const [Turn, setTurn] = useState(0);

    const playerTurn = { backgroundColor: 'rgb(113, 95, 73)'};

    const TurnPlush = (Turn) => {
        if (Turn === "win") {
            setTurn("");
        } else {
            setTurn((Turn) => (Turn + 1) % numOfPlayers.length);
        }
    };

    return (
        <div className='dispels' dir='rtl'>
            {numOfPlayers.map((player, index) => (
                <div key={index}  
                    style={Turn === index ? playerTurn : {}}
                    className={`player-${index}`}
                >
                  <AppGame Turn={Turn} setTurn={TurnPlush} index={index} name={player} />
                </div>
            ))}

            {Turn === "win" ? <h1>יש לנו מנצח 🏆</h1> : null} 
        </div>
    );
}

export default AppAllGames;
