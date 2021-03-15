import React from 'react';
import { shallow, mount, render } from 'enzyme';
import InterestPreview from '../components/CityHub/ToggleInterestIcon.jsx';
import { mockCityInterests } from './sampleData.js'

describe('<ToggleInterestIcon />', () => {
  const mockDeleteInterest = jest.fn();
  const mockAddInterest = jest.fn();
  const wrapperTrue = shallow(
    <InterestPreview
      id="1"
      isUserInterest={true}
      addUserInterest={mockAddInterest}
      deleteUserInterest={mockDeleteInterest}
    />
  );
  it('when clicked, invokes deleteUserInterest is isUserInterest is true', () => {
    wrapperTrue.find('ToggleIcon').simulate('click');
    expect(mockDeleteInterest).toHaveBeenCalled();
  });
  const wrapperFalse = shallow(
    <InterestPreview
      id="1"
      isUserInterest={false}
      addUserInterest={mockAddInterest}
      deleteUserInterest={mockDeleteInterest}
    />
  );
  it('when clicked, invokes addUserInterest is isUserInterest is false', () => {
    wrapperFalse.find('ToggleIcon').simulate('click');
    expect(mockAddInterest).toHaveBeenCalled();
  });
});