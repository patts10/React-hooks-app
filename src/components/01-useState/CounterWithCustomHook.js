import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with hook: { state }</h1>
      <hr />

      <button className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white'
        onClick={ () => increment(2) }
      >
        +1
      </button>
      <button className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white ml-1'
        onClick={ reset }
      >
        Reset
      </button>
      <button className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white ml-1'
        onClick={ () => decrement(2) }
      >
        -1
      </button>
    </>
  )
}
