
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Tests on <MultipleCustomHooks />', () => { 

  beforeEach( () => {
    useCounter.mockReturnValue( {
      counter: 10,
      increment: () => {}
    });
  });
  
  test('should show component correctly', () => { 

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })
    
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
   });

   test('should show info', () => { 
     
    useFetch.mockReturnValue( {
      data: [{
        author: 'Jona',
        quote: 'Progress is never linear'
      }],
      loading: false,
      error: null
    });

    const wrapper = shallow( <MultipleCustomHooks /> );

    expect(wrapper.find('bg-sky-200').exists()).toBe( false );
    expect(wrapper.find('.mb-0').text().trim()).toBe('Progress is never linear');
    expect(wrapper.find('footer').text().trim()).toBe('Jona');

    });
 });