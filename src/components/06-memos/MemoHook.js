import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])


  return (
    <>
      <h1>MemoHook</h1>
      <h3>Counter: <small> { counter } </small></h3>
      <hr />

      <p> { memoProcesoPesado } </p>

      <button
        className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white'
        onClick={ increment }
      >
        +1
      </button>

      <button
        className='px-6 py-2.5 bg-white text-blue-600 hover:text-white font-medium text-xs border border-blue-600 leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-3'
        onClick={() => setShow(!show)}
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  )
}
