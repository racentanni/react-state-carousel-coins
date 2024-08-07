import React, { useState } from 'react';
import Coin from './Coin';

function CoinFlipper() {
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [currentSide, setCurrentSide] = useState(null);

  function flipCoin() {
    const isHeads = Math.random() < 0.5;
    if (isHeads) {
      setHeadsCount(prevHeadsCount => prevHeadsCount + 1);
      setCurrentSide('heads');
    } else {
      setTailsCount(prevTailsCount => prevTailsCount + 1);
      setCurrentSide('tails');
    }
  }

  return (
    <div>
      <h1>Coin Flipper</h1>
      <Coin side={currentSide} />
      <button onClick={flipCoin}>Flip Coin</button>
      <p>Heads: {headsCount}</p>
      <p>Tails: {tailsCount}</p>
    </div>
  );
}

export default CoinFlipper;