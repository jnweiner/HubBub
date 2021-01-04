import React, { useState } from 'react';
import ModalButton from './ModalButton.jsx';
import {
  StyledForm,
  RequiredSpan,
  StyledInput,
  StyledTextarea
} from './ModalStyles.js';

const ModalNewThreadForm = ({ toggleModal, postNewThread }) => {

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
      e.preventDefault();
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
    <StyledForm>
      <span>Title: {showRequired && !title.length ? <RequiredSpan>(Required)</RequiredSpan> : null}</span>
      <StyledInput
        type="text"
        value={title}
        onChange={handleTitleChange}
        showRequired={showRequired && !title.length}
      />
      <span>Text: {showRequired && !text.length ? <RequiredSpan>(Required)</RequiredSpan> : null}</span>
      <StyledTextarea
        value={text}
        onChange={handleTextChange}
        showRequired={showRequired && !text.length}
      />
      <ModalButton
        content="Submit"
        onClickFunction={handleSubmit}
      />
    </StyledForm>
  );
};

export default ModalNewThreadForm;