import React ,{useState} from 'react';
const AppGame = (props) => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 99) + 1);
  const [steps, setSteps] = useState(0);
  const [message, setMessage] = useState('');
  const updateNumber = (newNumber) => {
    setRandomNumber(newNumber);
    setSteps(steps + 1);
    if (newNumber === 100) {
      setMessage('You won!');
    }
  };
  return (
    <div className='personGame'>
       <h2 dir='rtl' >שם: ely</h2>
       <p>{randomNumber}</p>
        <p>Steps: {steps}</p>
        <div>
        <button onClick={() => updateNumber(randomNumber + 1)}>+1</button>
        <button onClick={() => updateNumber(randomNumber - 1)}>-1</button>
        <button onClick={() => updateNumber(randomNumber * 2)}>*2</button>
        <button onClick={() => updateNumber(randomNumber / 2)}>/2</button>
      </div>
        <p>{message}</p>
    </div>
  )
}
export default AppGame;