import React, { useState } from 'react';
import './AppStyle.css';

const AppGame = (props) => {
  const [randomNumber, setRandomNumber] = useState(props.randomNumber);
  const [steps, setSteps] = useState(0); // הגדרת משתנה steps כמצב (state)
  const [message, setMessage] = useState('');
  const [restart, setRestart] = useState("");
  const [replay, setReplay] = useState("");
  const initialScores = JSON.parse(localStorage.getItem(props.name))?.score || [];
  const [looking, setLooking] = useState(initialScores.join(', '));

  const handleReplay = () => {
    props.resetGame();
    setRandomNumber(Math.floor(Math.random() * 99) + 1);
    setSteps(0);
    setMessage('');
    setReplay('');
    setRestart('');
  }

  const updateNumber = (newNumber) => {
    if (props.Turn === props.index) {
      props.setTurn(props.Turn + 1);
      setRandomNumber(newNumber);
      setSteps(steps + 1);

      if (newNumber === 100) {
        setMessage(`ניצחת! 🏆 ב-${steps + 1} צעדים`);
        setRestart(<button onClick={() => window.location.reload()}>צא מהמשחק</button>);
         setReplay(<button onClick={handleReplay}>שחקו שוב</button>);

        let p = JSON.parse(localStorage.getItem(`${props.name}`));
        p.score.push(steps + 1);
        localStorage.setItem(`${props.name}`, JSON.stringify(p));
        const initialScores = JSON.parse(localStorage.getItem(props.name))?.score || [];
        setLooking(initialScores.join(', '));
      }
    }
  };

  return (
    <div className='personGame'>
      <h2 dir='rtl'>{props.name}</h2>
      <p> הספרה :  {randomNumber}</p>
      <p>צעדים: {steps}</p>
      <div className='button-container'>
        <button onClick={() => updateNumber(randomNumber + 1)} disabled={props.Turn !== props.index}>+1</button>
        <button onClick={() => updateNumber(randomNumber - 1)} disabled={props.Turn !== props.index}>-1</button>
        <button onClick={() => updateNumber(randomNumber * 2)} disabled={props.Turn !== props.index}>*2</button>
        <button onClick={() => updateNumber(Math.floor(randomNumber / 2))} disabled={props.Turn !== props.index}>/2</button>
      </div>
      <p>{message}</p>
      <div>{restart}</div>
      <div>{replay}</div>
      <div style={{color:"black"}}> תוצאות הניצחונות  שלי {looking}</div>
       
    </div>
  );
}

export default AppGame;
