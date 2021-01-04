import React from 'react';
import styled from 'styled-components';
import HoverText from '../HoverText.jsx';

const StyledNavOption = styled.div`
  margin: ${props => props.isInterest ? '0 0 2px 10px' : '5px 0 5px 0'};
  font-weight: ${props => props.isCurrentView ? '700' : '400'};
  font-size: ${props => props.isInterest ? '15px' : '18px'};
`;

const NavOption = ({ isCurrentView, isInterest = false, onClickFunction, text }) => (
  <StyledNavOption
      isCurrentView={isCurrentView}
      onClick={onClickFunction}
      isInterest={isInterest}
  >
    <HoverText
      effect="background"
      text={text}
      regColor="#f5f5f5"
      hoveredColor="rgba(41, 64, 89, .2)"
    />
  </StyledNavOption>
);

export default NavOption;