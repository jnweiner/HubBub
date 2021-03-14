import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ModalButton from '../components/Modal/ModalButton.jsx';

describe('<ModalButton />', () => {
  const clickMock = jest.fn();
  const wrapper = shallow(
    <ModalButton
      content="test"
      onClickFunction={clickMock}
    />
  );
  it('invokes onClickFunction when clicked', () => {
    wrapper.find('SubmitButton').simulate('click');
    expect(clickMock).toHaveBeenCalled();
  });
});