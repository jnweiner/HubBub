import React, { useState } from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  color: ${props => props.isHovered ? props.hoveredColor : props.regColor };
  cursor: pointer;
`;

const HoverText = ({ text, hoveredColor, regColor }) => {

  const [hoveredText, setHoveredText] = useState(false);

  return (
    <StyledText
      isHovered={hoveredText}
      onMouseOver={() => setHoveredText(true)}
      onMouseLeave={() => setHoveredText(false)}
      hoveredColor={hoveredColor}
      regColor={regColor}
    >
    {text}
    </StyledText>
  );
};

export default HoverText;