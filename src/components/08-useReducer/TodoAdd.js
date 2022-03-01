import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };


    handleAddTodo( newTodo );

    reset();
  }

  return (
    <>
      <h4>Add TODO</h4>
          <hr />

          <form onSubmit={ handleSubmit }>
            <input 
              type="text"
              name="description"
              placeholder="Learn..."
              autoComplete="off"
              value={ description }
              onChange={ handleInputChange }
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />

            <button
              className="w-full mt-1 px-6 py-2.5 bg-white text-blue-600 hover:text-white font-medium text-xs border border-blue-600 leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
            >
              Add
            </button>
          </form>
    </>
  )
}
