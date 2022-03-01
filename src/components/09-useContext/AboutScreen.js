import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  }

  return (
    <>
     <h1>AboutScreen</h1> 
     <hr />

     <pre>
       {JSON.stringify(user, null, 3)}
     </pre>
     
     <button
      className='bg-yellow-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white'
      onClick={ handleClick }
     >
       Logout
     </button>
    </>
  )
}
