import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';

describe('<App />', () => {
  const wrapper = shallow(<App />, { disableLifecycleMethods: true });
  it('displays LoggedOutContainer when currentUser is set to null', () => {
    expect(wrapper.find('LoggedOutContainer')).toBeTruthy();
  });
});