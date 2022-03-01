import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demosTodos";

describe("test on <TodoListItem />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call handleDelete function", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should call handleToggle function", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should show text correctly", () => {
    expect(wrapper.find("p").text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test('should have line-through class if TODO.done = true', () => { 
    
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow( <TodoListItem todo={ todo } />)

    expect(wrapper.find('p').hasClass('line-through'));
   })
});
