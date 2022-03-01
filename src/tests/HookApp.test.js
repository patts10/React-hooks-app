import { HookApp } from "../HookApp";
import { shallow } from 'enzyme'


describe('Tests for <HookApp />', () => { 
  
  test('should return the component correctly', () => { 
    
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
   });
 });