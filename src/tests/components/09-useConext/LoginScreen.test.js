import { act } from "@testing-library/react";
import { mount } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Tests on <LoginScreen />", () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider
      value={{
        setUser
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );

  test("should show correctly", () => {

    expect(wrapper).toMatchSnapshot();
    
  });

  test("should execute setUser with expected args", () => {

    wrapper.find('button').simulate('click');

    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: "Patts",
    });

  });
});
