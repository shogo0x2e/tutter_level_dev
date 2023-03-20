import React, { useState } from 'react';

export default function Count() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>カウント: { count }</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}