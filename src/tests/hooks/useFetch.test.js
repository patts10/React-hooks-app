import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"

describe('Tests on useFecth', () => { 
  
  test('should return default information', () => { 
    
    const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);

   });

   test('should have correct info, loading = false, error = false', async() => { 
     
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate({timeout: 5000});
        
    const { data, loading, error } = result.current;

    expect( data.length ).toBe(1);
    expect( loading ).toBe( false );
    expect( error ).toBe( null );

    });

   test('should handle error', async() => { 
     
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2'));
    await waitForNextUpdate({timeout: 5000});
        
    const { data, loading, error } = result.current;

    expect( data ).toBe(null);
    expect( loading ).toBe( false );
    expect( error ).toBe( "Error: Info can't be loaded" );

    });
 });