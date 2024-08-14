import React ,{useState} from 'react';
const AppGame = (props) => {
  const [randomNumber, setRandomNumber] = useState(props.randomNumber);
  
 
  const [message, setMessage] = useState('');
  const [restart , setrestaet] = useState("");
  const [replay , setreplay] = useState("");
  const [name, setname] = useState(localStorage.getItem(`${props.name}`));

  const handlereplay = () => {
    props.resetGame();
    setRandomNumber(Math.floor(Math.random() * 99) + 1);
    props.setSteps(0);
    setMessage('');
    setreplay('');
    setrestaet('');
}

  const updateNumber = (newNumber) => {
    if(props.Turn === props.index){

     props.setTurn(props.Turn + 1);

    setRandomNumber(newNumber);
    setSteps(steps + 1);

    if (newNumber === 100) {
    
      props.setTurn("win");

      setMessage(`You won! 🏆 in Steps ${steps+1}`);
    setreplay(<button onClick={handlereplay}>שחקו שוב</button>);
     setrestaet(<button onClick={() => window.location.reload()}>צא מהמשחק</button>);
     
                                
    let p = JSON.parse(localStorage.getItem(`${props.name}`));
      p.score.push(props.steps);
      localStorage.setItem(`${props.name}`,JSON.stringify(p));
      setname(localStorage.getItem(`${props.name}`));
    }
    }
  };
  return (
    <div className='personGame'>
    
       <h2 dir='rtl' >{props.name}</h2>
       <p>{randomNumber}</p>
        <p>צעדים : {props.steps}</p>
        <div >
        <button onClick={() => updateNumber(randomNumber + 1)} disabled= {props.Turn !== props.index}>+1</button>
        <button onClick={() => updateNumber(randomNumber - 1)} disabled= {props.Turn !== props.index}>-1</button>
        <button onClick={() => updateNumber(randomNumber * 2)} disabled= {props.Turn !== props.index}>*2</button>
        <button onClick={() => updateNumber(Math.floor(randomNumber / 2))} disabled= {props.Turn !== props.index}>/2</button>
      </div>
      <p>{name}</p>
        <p>{message}</p>
          <div >{restart}</div>
        <div>{replay}</div>
     

    </div>
  )
}
export default AppGame;