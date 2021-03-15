import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LandingPage from '../components/LandingPage.jsx';

describe('<LandingPage />', () => {
  const clickMock = jest.fn();
  const wrapper = shallow(
    <LandingPage
      validateUser={clickMock}
    />
  );
  it('invokes validateUser when login button clicked', () => {
    wrapper.find('LoginButton').simulate('click', { preventDefault: jest.fn() });
    expect(clickMock).toHaveBeenCalled();
  });
});