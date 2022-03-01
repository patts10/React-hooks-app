import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { shallow, mount } from 'enzyme'
import { act } from "@testing-library/react";
import { demoTodos } from "../../fixtures/demosTodos";


describe('Tests on <TodoApp />', () => { 
  
  const wrapper = shallow( <TodoApp /> );

  Storage.prototype.setItem = jest.fn( () => {} );

  test('should show correctly', () => { 
    
    expect(wrapper).toMatchSnapshot();
  });

  test('should add a TODO', () => { 
    
    const wrapper = mount( <TodoApp /> );

    act( () => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');
    expect( localStorage.setItem ).toHaveBeenCalledTimes( 2 );

   });

   test('should delete a TODO', () => { 
     
    wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
    wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id);
    expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 0 )');

    });

 });