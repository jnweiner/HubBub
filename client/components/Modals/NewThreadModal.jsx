import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ModalContainer,
  ModalHeader,
  CloseArrow,
  RequiredSpan,
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
  const [showRequired, setShowRequired] = useState(false);

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    if (title.length && text.length) {
      postNewThread(title, text);
      setTitle('');
      setText('');
      toggleModal(null);
    } else {
      e.preventDefault();
      setShowRequired(true);
    }
  };

  return (
    <ModalContainer>
      <ModalHeader>
        <span>Start a new topic</span>
        <CloseArrow onClick={() => toggleModal(null)}>
          <HoverText
            text={(<i className="fas fa-chevron-down"></i>)}
            regColor="#f5f5f5"
            hoveredColor="#e1ad01"
          />
        </CloseArrow>
      </ModalHeader>
      <StyledForm>
        <span>Title: {showRequired && !title.length ? <RequiredSpan>(Required)</RequiredSpan> : null}</span>
        <StyledInput type="text" value={title} onChange={handleTitleChange} showRequired={showRequired && !title.length}/>
        <span>Text: {showRequired && !text.length ? <RequiredSpan>(Required)</RequiredSpan> : null}</span>
        <StyledTextarea value={text} onChange={handleTextChange} showRequired={showRequired && !text.length}/>
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