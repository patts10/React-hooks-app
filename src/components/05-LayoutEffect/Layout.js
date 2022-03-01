import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../05-LayoutEffect/layout.css';

export const Layout = () => {

  const { counter, increment } = useCounter(1);
  
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});
  
  useLayoutEffect( () => {

    setBoxSize(pTag.current.getBoundingClientRect() );

  }, [quote]);

  return (
    <>
      <h1 className='font-semibold mb-3'>Layout Effect</h1>
      <hr />

      <blockquote className='blockquote text-right my-3'>
        <p 
          className='mb-0 font-bold'
          ref={ pTag } 
        >
          { quote }
          </p>
      </blockquote>

      <pre>
        { JSON.stringify(boxSize, null, 3 ) }
      </pre>
      
      <button className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white'
        onClick={ increment }
      >
        Next quote
      </button>


    </>
  )
}
