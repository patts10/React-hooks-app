import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {

  return JSON.parse(localStorage.getItem('todo')) || [];
};

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect( () => {

    localStorage.setItem('todo', JSON.stringify(todos));

  }, [ todos ]);

  const handleDelete = ( id ) => {
    const action = {
      type: 'delete',
      payload: id
    }

    dispatch(action);
  };

  const handleToggle = ( todoId ) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    });
  };

  const handleAddTodo = ( newTodo ) => {

    dispatch( {
      type: 'add',
      payload: newTodo
    } );
  }


  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />

      <div className="flex justify-center">
        <div className="w-7/12">
          
          <TodoList 
            todos={ todos } 
            handleDelete={ handleDelete } 
            handleToggle={ handleToggle }
          />
        </div>

        <div className="w-5/12">
          <TodoAdd handleAddTodo={ handleAddTodo } />
        </div>
      </div>
    </div>
  );
};
