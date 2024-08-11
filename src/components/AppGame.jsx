import React ,{useState} from 'react';
const AppGame = (props) => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 99) + 1);
  const [steps, setSteps] = useState(0);
  const [message, setMessage] = useState('');


  const updateNumber = (newNumber) => {
    if(props.Turn === props.index){

     props.setTurn(props.Turn + 1);

    setRandomNumber(newNumber);
    setSteps(steps + 1);

    if (newNumber === 100) {
      props.setTurn("win");
      setMessage(`You won! 🏆 in Steps ${steps+1}`);
    }
    }
  
  };
  return (
    <div className='personGame'>
       <h2 dir='rtl' >{props.name}</h2>
       <p>{randomNumber}</p>
        <p>צעדים : {steps}</p>
        <div >
        <button onClick={() => updateNumber(randomNumber + 1)} disabled= {props.Turn !== props.index}>+1</button>
        <button onClick={() => updateNumber(randomNumber - 1)} disabled= {props.Turn !== props.index}>-1</button>
        <button onClick={() => updateNumber(randomNumber * 2)} disabled= {props.Turn !== props.index}>*2</button>
        <button onClick={() => updateNumber(Math.floor(randomNumber / 2))} disabled= {props.Turn !== props.index}>/2</button>
      </div>
        <p>{message}</p>
    </div>
  )
}
export default AppGame;