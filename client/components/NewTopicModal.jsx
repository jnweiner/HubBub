import React, { useState } from 'react';
import styled from 'styled-components';

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
  height: 35vh;
  width: 75%;
  bottom: 0;
  left: 65%;
  transform: translate(-60%);
`;

const ModalHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1ad01;
`;

const CloseArrow = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 10px 0;
`;

const SubmitContainer = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  background-color: #e1ad01;
  border: 1px solid #e1ad01;
  border-radius: 5px;
  padding: 5px;
  font-weight: 600;
`;

const NewTopicModal = ({ toggleModal, postNewThread }) => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = () => {
    postNewThread(title, text);
    setTitle('');
    setText('');
    toggleModal(null);
  };

  return (
    <ModalContainer>
      <ModalHeader>
        <span>Start a new topic</span>
        <CloseArrow onClick={() => toggleModal(null)}><i className="fas fa-chevron-down"></i></CloseArrow>
      </ModalHeader>
      <StyledForm>
        <span>Title:</span>
        <input type="text" value={title} onChange={handleTitleChange} />
        <span>Text:</span>
        <textarea value={text} onChange={handleTextChange} />
        <SubmitContainer>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </SubmitContainer>
      </StyledForm>
    </ModalContainer>
  );
};

export default NewTopicModal;