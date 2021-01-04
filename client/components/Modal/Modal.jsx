import React, { useState } from 'react';
import styled from 'styled-components';
import HoverText from '../HoverText.jsx';
import ModalHeader from './ModalHeader.jsx';
import ModalNewThreadForm from './ModalNewThreadForm.jsx';
import ModalNewReplyForm from './ModalNewReplyForm.jsx';

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
  height: 45vh;
  width: 75%;
  bottom: 0;
  left: 65%;
  transform: translate(-60%);
  box-shadow: 0 0 10px gray;
`;

const Modal = ({ modalStatus, toggleModal, postToForum }) => (
  <ModalContainer>
    <ModalHeader
      headerText={modalStatus === 'newThread' ? "Start a new topic" : "Post a new reply"}
      toggleModal={toggleModal}
    />
    {modalStatus === 'newThread' ? 
      <ModalNewThreadForm
        toggleModal={toggleModal}
        postNewThread={postToForum}
      />
      :
      <ModalNewReplyForm
        toggleModal={toggleModal}
        postNewReply={postToForum}
      />
    }
  </ModalContainer>
);

export default Modal;