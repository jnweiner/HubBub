import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Modal from '../components/Modal/Modal.jsx';
import ModalNewThreadForm from '../components/Modal/ModalNewThreadForm.jsx';
import ModalNewReplyForm from '../components/Modal/ModalNewReplyForm.jsx';
import ModalDeleteCheck from '../components/Modal/ModalDeleteCheck.jsx';

describe('<Modal />', () => {
  const wrapperNewThread = shallow(
    <Modal
      modalStatus="newThread"
      toggleModal={jest.fn()}
      postToForum={jest.fn()}
      deleteThread={jest.fn()}
    />
  );
  it('renders ModalNewThreadForm if modalStatus is set to newThread', () => {
    expect(wrapperNewThread.find(ModalNewThreadForm)).toHaveLength(1);
  });
  const wrapperNewReply = shallow(
    <Modal
      modalStatus="newReply"
      toggleModal={jest.fn()}
      postToForum={jest.fn()}
      deleteThread={jest.fn()}
    />
  );
  it('renders ModalNewReplyForm if modalStatus is set to newReply', () => {
    expect(wrapperNewReply.find(ModalNewReplyForm)).toHaveLength(1);
  });
  const wrapperDeleteCheck = shallow(
    <Modal
      modalStatus="deleteCheck"
      toggleModal={jest.fn()}
      postToForum={jest.fn()}
      deleteThread={jest.fn()}
    />
  );
  it('renders ModalDeleteCheck if modalStatus is set to deleteCheck', () => {
    expect(wrapperDeleteCheck.find(ModalDeleteCheck)).toHaveLength(1);
  });
});