import React, { useState } from 'react';
import AppGame from './AppGame.jsx';
import './AppStyle.css';
const AppAllGames = (props) => {
    
    let [Turn, setTurn] = useState(Math.floor(Math.random() * 4) + 0);
    const playerTurn = {backgroundColor: 'rgb(113, 95, 73)'};
    return (
        <div className='dispels'>
            <div className="top-left" style={playerTurn}>
                <AppGame  />
            </div>
            <div className="top-right">
                <AppGame  />
            </div>
            <div className="bottom-left">
                <AppGame  />
            </div>
            <div className="bottom-right">
                <AppGame  />
            </div>
        </div>
    );
}
export default AppAllGames;