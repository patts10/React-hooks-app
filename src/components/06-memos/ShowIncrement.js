import React from 'react'

export const ShowIncrement = ( {increment }) => {

  console.log('again');

  return (
    <button 
      className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white'
      onClick={ () => increment(5) }
      > increment </button>
  )
}
