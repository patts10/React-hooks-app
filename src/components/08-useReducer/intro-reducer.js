
const initialState = [{
  id:1,
  todo: 'Buy bread',
  done: false
}];

const todoReducer = ( state = initialState, action ) => {

  if (action?.type === 'add') {
    return [...state, action.payload]
  }

  
  return state;
}

let todos = todoReducer();

const newTodo = {
  id:2,
  todo: 'Buy milk',
  done: false
};


const agregarTodoAction = {
  type: 'add',
  payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction );






console.log(todos);