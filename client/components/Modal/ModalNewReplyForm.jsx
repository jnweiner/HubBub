import React, { useState } from 'react';
import ModalButton from './ModalButton.jsx';
import {
  StyledForm,
  RequiredSpan,
  StyledTextarea
} from './ModalStyles.js';

const ModalNewReplyForm = ({ toggleModal, postNewReply }) => {

  const [text, setText] = useState('');
  const [showRequired, setShowRequired] = useState(false);

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    if (text.length) {
      e.preventDefault();
      postNewReply(text);
      setText('');
      toggleModal(null);
    } else {
      e.preventDefault();
      setShowRequired(true);
    }
  };

  return (
    <StyledForm>
      <span>Text: {showRequired && !text.length ? <RequiredSpan>(Required)</RequiredSpan> : null}</span>
      <StyledTextarea
        value={text}
        onChange={handleTextChange}
        showRequired={showRequired && !text.length}
      />
      <ModalButton
        content={(<span>Reply <i className="fas fa-reply"></i></span>)}
        onClickFunction={handleSubmit}
      />
    </StyledForm>
  );
};

export default ModalNewReplyForm;