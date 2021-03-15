import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ModalHeader from '../components/Modal/ModalHeader.jsx';

describe('<ModalHeader />', () => {
  const toggleMock = jest.fn();
  const wrapper = shallow(
    <ModalHeader
      headerText="test"
      toggleModal={toggleMock}
    />
  );
  it('invokes toggleModal when x is clicked', () => {
    wrapper.find('CloseX').simulate('click');
    expect(toggleMock).toHaveBeenCalled();
  });
});