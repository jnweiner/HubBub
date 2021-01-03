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
} from './ModalStyles.js';
import HoverText from '../HoverText.jsx';

const NewReplyModal = ({ toggleModal, postNewReply }) => {

  const [text, setText] = useState('');

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = () => {
    postNewReply(text);
    setText('');
    toggleModal(null);
  };

  return (
    <ModalContainer>
      <ModalHeader>
        <span>Post a reply</span>
        <CloseArrow onClick={() => toggleModal(null)}>
          <HoverText
            text={(<i className="fas fa-chevron-down"></i>)}
            regColor="#f5f5f5"
            hoveredColor="#e1ad01"
          />
        </CloseArrow>
      </ModalHeader>
      <StyledForm>
          <span>Text:</span>
          <StyledTextarea value={text} onChange={handleTextChange} />
        <SubmitContainer>
          <SubmitButton onClick={handleSubmit}>
            <HoverText
              text={(<span>Reply <i className="fas fa-reply"></i></span>)}
              regColor="#294059"
              hoveredColor="#f5f5f5"
            />
          </SubmitButton>
        </SubmitContainer>
      </StyledForm>
    </ModalContainer>
  );
};

export default NewReplyModal;