import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

  const inputRef = useRef();
  console.log(inputRef);

  const handleClick = () => {
    inputRef.current.select();
  }


  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        className="block mr-4 mb-5"
        ref={ inputRef }
        type="text" 
        placeholder="Su nombre" />

      <button
        className="px-6 py-2.5 bg-white text-blue-600 hover:text-white font-medium text-xs border border-blue-600 leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={ handleClick }
      >
        Focus
      </button>
    </>
  );
}
