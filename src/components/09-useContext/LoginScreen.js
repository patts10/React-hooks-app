import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  const user = {
    id: 123,
    name: "Patts"
  }

  return (
    <>
     <h1>LoginScreen</h1> 
     <hr />

     <button
      className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white'
      onClick={ () => setUser(user) }
     >
       Login
     </button>
     
    </>
  )
}
