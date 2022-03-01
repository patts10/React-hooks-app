import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import { shallow } from 'enzyme';

describe('Tests on <RealExampleRef />', () => { 
  
  const wrapper = shallow( <RealExampleRef /> );
  
  test('should show correctly', () => { 
    
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should show <MultipleCustomHooks /> component', () => { 
    
    wrapper.find('button').simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });
 })