import { useState } from 'react';
import './index.css';
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill().map(() => Math.ceil(Math.random() * 6));
  }

  const diceElements = dice.map((num) => <Die value={num} />);

  return (
    <main className='app'>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice-container'>{diceElements}</div>
    </main>
  );
}

export default App;
