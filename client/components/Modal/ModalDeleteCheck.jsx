import React from 'react';
import ModalButton from './ModalButton.jsx';
import styled from 'styled-components';

const DeleteCheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const ModalDeleteCheck = ({ toggleModal, deleteThread }) => {
  const deleteBehavior = () => {
    toggleModal(null);
    deleteThread();
  };
  
  return (<DeleteCheckContainer>
    <span>Are you sure you want to delete this thread, including all replies?</span>
    <br />
    <span>
      <ModalButton
        content="Yes, delete thread"
        onClickFunction={deleteBehavior}
      />
      <br />
      <ModalButton
        content="No, do not delete"
        onClickFunction={() => toggleModal(null)}
      />
    </span>
  </DeleteCheckContainer>);
};

export default ModalDeleteCheck;