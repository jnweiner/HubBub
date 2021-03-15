import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../components/Header/Header.jsx';
import { mockUserInterests } from './sampleData.js';

describe('<Header />', () => {
  const changeViewMock = jest.fn();
  const wrapper = shallow(
    <Header
      cityName="Seattle"
      userAvatar=''
      userInterests={mockUserInterests}
      changeView={changeViewMock}
      logout={jest.fn()}
    />
  );
  it('invokes changeView when city name is clicked', () => {
    wrapper.find('City').simulate('click');
    expect(changeViewMock).toHaveBeenCalled();
  });
});