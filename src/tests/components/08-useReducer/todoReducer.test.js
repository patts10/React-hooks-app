import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demosTodos";



describe('Tests on todoReducer', () => { 
  
  test('should return default state', () => { 
    
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
   });

   test('should add Todo', () => { 

    const todo = {
      id: 3,
      desc: 'Learn React Native',
      done: false
    }

    const action = {
      type: 'add',
      payload: todo
    }
     
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, todo]);

    });

    test('should delete todo', () => { 

      const action = {
        type: 'delete',
        payload: 2
      }

      const state = todoReducer( demoTodos, action );
      expect(state.length).toBe(1);
      expect(state).toEqual([demoTodos[0]]);      

     });

    test('should do todo toggle', () => { 
      
      const action = {
        type: 'toggle',
        payload: 2
      };

      const state = todoReducer( demoTodos, action );
      expect(state[1].done).toBe(true);
      expect(state[0]).toEqual(demoTodos[0]);

     });
 })