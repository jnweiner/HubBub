import React from 'react';
import { shallow, mount, render } from 'enzyme';
import InterestPreview from '../components/CityHub/InterestPreview.jsx';
import { mockCityInterests } from './sampleData.js'

describe('<InterestPreview />', () => {
  const mockChangeView = jest.fn();
  const wrapper = shallow(
    <InterestPreview
      interest={mockCityInterests[0]}
      isUserInterest={true}
      addUserInterest={jest.fn()}
      deleteUserInterest={jest.fn()}
      changeView={mockChangeView}
    />
  );
  it('invokes changeView when clicked', () => {
    wrapper.find('InterestInfo').simulate('click');
    expect(mockChangeView).toHaveBeenCalled();
  });
});