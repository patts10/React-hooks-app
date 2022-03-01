import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

  const {author, quote } = (!loading && data.length>0) && data[0];

  return (
    <>
      <h1 className='font-semibold mb-3'>Breaking Quotes</h1>
      <hr />

      {
        loading
        ?
          (
      <div className='bg-sky-200 bg-opacity-75 py-3 my-3 text-center'>
        Loading...
      </div>

          )
        :
            (
      <blockquote className='text-right my-3'>
        <p className='mb-0 font-bold'>{ quote }</p>
        <footer className='blockquote-footer'>{ author }</footer>
      </blockquote>

            )
      }

      <button className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white'
        onClick={ increment }
      >
        Next quote
      </button>


    </>
  )
}
