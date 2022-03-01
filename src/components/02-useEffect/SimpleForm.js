import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  
  useEffect( () => {
    console.log('hey!');
  }, []);

  useEffect( () => {

  }, [formState]);

  useEffect( () => {

  }, [ email]);
  
  const handleInputChange = ({ target }) => {
    setFormState( {
      ...formState, [ target.name ]: target.value
    })
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div>
        <input
          name='name'
          type='text'
          placeholder='name'
          autoComplete='off'
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div>
        <input
          name='email'
          type='email'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { (name === '123') && <Message /> }



      
    </>
  )
}
