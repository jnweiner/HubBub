import React from 'react';
import styled from 'styled-components';
import HoverText from '../HoverText.jsx';

const StyledButton = styled.button`
  background-color: #294059;
  border: 1px solid #294059;
  border-radius: 5px;
  font-weight: 600;
  font-size: 15px;
  margin-left: 5px;
`;

const ForumButton = ({ onClickFunction, content }) => (
  <StyledButton onClick={onClickFunction}>
    <HoverText
      text={content}
      regColor="#f5f5f5"
      hoveredColor="#e1ad01"
    />
  </StyledButton>
);

export default ForumButton;
