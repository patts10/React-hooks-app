const { renderHook, act } = require("@testing-library/react-hooks")
const { useCounter } = require("../../hooks/useCounter")

describe('Tests on useCounter', () => { 
  
  test('should return default values', () => { 
    
    const { result } = renderHook( () => useCounter() );

    expect(result.current.counter).toBe(10);
    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.decrement ).toBe('function');
    expect( typeof result.current.reset ).toBe('function');
   });
  
  test('should return counter value equal to 100', () => { 
    
    const { result } = renderHook( () => useCounter(100) );
    
    expect(result.current.counter).toBe(100);
    
  });
  
  test('should increment counter (+1)', () => { 
    
    const { result } = renderHook( () => useCounter(100) );
    const { increment } = result.current;

    act( () => {

      increment();
    });

    expect(result.current.counter).toBe(101);

    });
    
    test('should reset counter', () => { 
      
      const { result } = renderHook( () => useCounter(100) );
      const { increment, reset } = result.current;
  
      act( () => {
  
        increment()
        reset();
      });
  
      expect(result.current.counter).toBe(100);
  
      });
  
  test('should decrement counter (-1)', () => { 
    
    const { result } = renderHook( () => useCounter(100) );
    const { decrement } = result.current;

    act( () => {

      decrement();
    });

    expect(result.current.counter).toBe(99);

    });
 });