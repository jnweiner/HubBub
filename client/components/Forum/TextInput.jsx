import React, { useState } from 'react';
import styled from 'styled-components';
import ForumButton from './ForumButton.jsx';

const TextBox = styled.textarea`
  width: 60%;
  font-family: 'Krub', sans-serif;
`;

const TextInput = ({ postId, edit, initialValue, toggleEditMode }) => {
  const [value, setValue] = useState('');
  const [hasBeenUpdated, setHasBeenUpdated] = useState(false);

  const handleChange = (e) => {
    setHasBeenUpdated(true);
    setValue(e.target.value);
  }

  const handleSave = () => {
    if (hasBeenUpdated) {
      edit(postId, value);
    }
    toggleEditMode();
  }

  return (
    <div>
      <TextBox value={hasBeenUpdated ? value : initialValue} onChange={handleChange}/>
      <ForumButton content="Save" onClickFunction={handleSave}/>
    </div>
  )

}

export default TextInput;