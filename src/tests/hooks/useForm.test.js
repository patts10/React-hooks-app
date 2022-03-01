import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Tests on useForm", () => {
  const initialForm = {
    name: "Patts",
    email: "patts@gmail.com",
  };

  test("should return a default form", () => {

    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should change form values (change name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Jona",
        },
      });
    });

    const [values] = result.current;

    expect(values).toEqual({ ...initialForm, name: "Jona" });
  });

  test("should reset form to initialForm", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Jona",
        },
      });

      reset();
    });

    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
});
