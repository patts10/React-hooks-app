import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Real Ref</h1>
      <hr />

      { show && <MultipleCustomHooks />}

      <button
        className='px-6 py-2.5 ml-3 bg-white text-blue-600 hover:text-white font-medium text-xs border border-blue-600 leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        onClick={ () => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </>
  )
}
