import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContent = styled.span`
  color: ${props => props.isHovered ? props.hoveredColor : props.regColor };
  cursor: pointer;
`;

const StyledBackground = styled.span`
  background-color: ${props => props.isHovered ? props.hoveredColor : props.regColor };
  border-radius: 5px;
  padding: 2px;
  cursor: pointer;
`;

const HoverText = ({ effect = 'content', text, hoveredColor, regColor }) => {

  const [hoveredText, setHoveredText] = useState(false);

  const renderHoverText = (effect) => {
    if (effect === 'content') {
      return (
        <StyledContent
          isHovered={hoveredText}
          onMouseOver={() => setHoveredText(true)}
          onMouseLeave={() => setHoveredText(false)}
          hoveredColor={hoveredColor}
          regColor={regColor}
        >
        {text}
        </StyledContent>
      );
    } else if (effect === 'background') {
      return (
        <StyledBackground
          isHovered={hoveredText}
          onMouseOver={() => setHoveredText(true)}
          onMouseLeave={() => setHoveredText(false)}
          hoveredColor={hoveredColor}
          regColor={regColor}
        >
        {text}
        </StyledBackground>
      );
    }
  }

  return renderHoverText(effect);

};

export default HoverText;