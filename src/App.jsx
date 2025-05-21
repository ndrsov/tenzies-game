import { useState } from 'react';
import './index.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill().map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  function rollDice() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} />
  ));

  return (
    <main className='app'>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice-container'>{diceElements}</div>

      <button className='roll-dice' onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
