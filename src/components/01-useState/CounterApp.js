import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

  const [ state, setState ] = useState({
    counter1: 10,
    counter2: 20
  });

  const { counter1, counter2 } = state;
  
  return (
    <>
      <h1>Counter { counter1 }</h1>
      <h1>Counter { counter2 }</h1>
      <hr />

      <button className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white'
        onClick={ () => {
          setState( { 
            ...state,
            counter1: counter1 + 1 
          }
        )} 
      }
      >
        +1
      </button>
    </>
  )
}
