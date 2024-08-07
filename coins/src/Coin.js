import React from 'react';
import photos from './photos';

function Coin({ side }) {
  return (
    <div>
      {side && photos[side] ? (
        <img src={photos[side]} alt={side} />
      ) : (
        <p>Flip the coin!</p>
      )}
    </div>
  );
}

export default Coin;