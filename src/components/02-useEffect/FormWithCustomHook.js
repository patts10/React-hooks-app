import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues;

  useEffect( () => {
    console.log('email');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log('ho');
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div>
        <input
          className='my-2'
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
          className='my-2'
          name='email'
          type='email'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      <div>
        <input
          className='my-2'
          name='password'
          type='password'
          placeholder='******'
          value={ password }
          onChange={ handleInputChange }
        />
      </div>

      <button className='bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white' type='submit'>Guardar</button>
      
    </form>
  )
}
