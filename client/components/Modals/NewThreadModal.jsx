import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ModalContainer,
  ModalHeader,
  CloseArrow,
  StyledForm,
  SubmitContainer,
  SubmitButton,
  StyledTextarea,
  StyledInput,
} from './ModalStyles.js';
import HoverText from '../HoverText.jsx';

const NewThreadModal = ({ toggleModal, postNewThread }) => {

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
        <StyledInput type="text" value={title} onChange={handleTitleChange} />
        <span>Text:</span>
        <StyledTextarea value={text} onChange={handleTextChange} />
        <SubmitContainer>
        <SubmitButton onClick={handleSubmit}>
            <HoverText
              text="Submit"
              regColor="#294059"
              hoveredColor="#f5f5f5"
            />
          </SubmitButton>
        </SubmitContainer>
      </StyledForm>
    </ModalContainer>
  );
};

export default NewThreadModal;