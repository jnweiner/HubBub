import React, { useState } from 'react';
import styled from 'styled-components';
import HoverText from '../HoverText.jsx';
import ModalHeader from './ModalHeader.jsx';
import ModalNewThreadForm from './ModalNewThreadForm.jsx';
import ModalNewReplyForm from './ModalNewReplyForm.jsx';
import ModalDeleteCheck from './ModalDeleteCheck.jsx';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #294059;
  color: #f5f5f5;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 10;
  position: fixed;
  padding: 10px;
  height: ${props => props.deleteCheck ? "25vh" : "45vh" };
  width: ${props => props.deleteCheck ? "35%" : "75%" };
  bottom: ${props => props.deleteCheck ? "50%" : "0" };
  left: ${props => props.deleteCheck ? "55%" : "65%" };
  transform: translate(-60%);
  box-shadow: 0 0 10px gray;
`;

const Modal = ({ modalStatus, toggleModal, postToForum, deleteThread }) => {

  const setHeaderText = () => {
    if (modalStatus === 'newThread') {
      return "Start a new topic";
    }
    if (modalStatus === 'newReply') {
      return "Post a new reply";
    }
    if (modalStatus === 'deleteCheck') {
      return "Just to confirm..."
    }
  }
  
  const setModalBody = () => {
    if (modalStatus === 'newThread') {
      return (
        <ModalNewThreadForm
          toggleModal={toggleModal}
          postNewThread={postToForum}
        />
      );
    }
    if (modalStatus === 'newReply') {
      return (
        <ModalNewReplyForm
          toggleModal={toggleModal}
          postNewReply={postToForum}
        />
      );
    }
    if (modalStatus === 'deleteCheck') {
      return (
        <ModalDeleteCheck
          toggleModal={toggleModal}
          deleteThread={deleteThread}
        />
      );
    }
  }

  return (<ModalContainer deleteCheck={modalStatus === 'deleteCheck'}>
    <ModalHeader
      headerText={setHeaderText()}
      toggleModal={toggleModal}
    />
    {setModalBody()}
  </ModalContainer>)
};

export default Modal;