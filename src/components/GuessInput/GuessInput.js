import React, { useState } from 'react';

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [tentativeGuess, setTentativeGuess] = useState('');
  function submitHandler(){
    event.preventDefault();
    if(tentativeGuess.length !== 5){
      window.alert('Please enter exactly 5 characters. ');
      return;
    }
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('')
  }
  return (
    <form onSubmit={submitHandler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
      required
      disabled={gameStatus !== 'running'}
      minLength={5}
      maxLength={5}
      value={tentativeGuess} 
      onChange={(event)=>{
        const nextGuess = event.target.value.toUpperCase()
        setTentativeGuess(nextGuess)
      }} 
      id="guess-input" type="text" />
    </form>
    );
}

export default GuessInput;
