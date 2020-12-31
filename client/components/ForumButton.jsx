import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Krub', sans-serif;
  cursor: pointer;
  background-color: #294059;
  color: ${props => props.isHovered ? '#e1ad01' : '#f5f5f5'};
  border: 1px solid #294059;
  border-radius: 5px;
  font-weight: 600;
  font-size: 15px;
  margin-left: 5px;
`;

const ForumButton = ({ onClickFunction, content }) => {

  const [hovered, setHovered] = useState(false);

  return (
    <StyledButton
      onClick={onClickFunction}
      isHovered={hovered}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </StyledButton>
  )
};

export default ForumButton;
