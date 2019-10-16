import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


describe('<App />',() => {
  it('renders 1 <App /> component',() => {
    const component = shallow(<App  name="app"/>);
    console.log(component.props());
    expect(component).toHaveLength(1);
  });

  it('it renders props correctly', ()=> {
      const component = shallow(<App name="app" />);
      console.log(component.instance().props);
      expect(component.instance.props.name).toBe('app');
  });

  it('it updates the counter on bittin click', () => {
      const component = mount(<App />);
      const button = component.find('button');
      //console.log(button.props())
      button.simulate('click');
      button.simulate('click');
      button.simulate('click');
     // console.log(component.state());
     //expect(component.state().counter.toEqual(5);
     // button.props().onclick();
      expect(component.state().counter.toEqual(3);
  });

})
