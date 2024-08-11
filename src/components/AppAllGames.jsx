import React, { useState } from 'react';
import AppGame from './AppGame.jsx';
import './AppStyle.css';

const AppAllGames = ({ numOfPlayers }) => {

    const [Turn, setTurn] = useState(0);

    const playerTurn = { backgroundColor: 'rgb(113, 95, 73)' };

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


// const AppAllGames = (props) => {
//     let [Turn, setTurn] = useState(0);
//     const playerTurn = {backgroundColor: 'rgb(113, 95, 73)'};
//     return (
//         <div className='dispels'>
//             <div className="top-left" style={playerTurn}>
//                 <AppGame  />
//             </div>
//             <div className="top-right">
//                 <AppGame  />
//             </div>
//             <div className="bottom-left">
//                 <AppGame  />
//             </div>
//             <div className="bottom-right">
//                 <AppGame  />
//             </div>
//         </div>
//     );
// }
// export default AppAllGames;
