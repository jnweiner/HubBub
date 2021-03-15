import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CityHub from '../components/CityHub/CityHub.jsx';
import InterestPreview from '../components/CityHub/InterestPreview.jsx';
import { mockCityInterests, mockUserInterests } from './sampleData.js'

describe('<CityHub />', () => {
  const wrapper = shallow(
    <CityHub
      cityName="Seattle"
      cityUsers="100"
      cityInterests={mockCityInterests}
      userInterests={mockUserInterests}
      addUserInterest={jest.fn()}
      deleteUserInterest={jest.fn()}
      changeView={jest.fn()}
    />
  );
  it('displays appropriate number of city interests', () => {
    expect(wrapper.find(InterestPreview)).toHaveLength(mockCityInterests.length);
  });
});