import React from 'react';
import styled from 'styled-components';
import HoverText from '../HoverText.jsx';

const StyledModalHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1ad01;
`;

const CloseArrow = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ModalHeader = ({ headerText, toggleModal }) => (
  <StyledModalHeader>
    <span>{headerText}</span>
    <CloseArrow onClick={() => toggleModal(null)}>
      <HoverText
        text={(<i className="fas fa-chevron-down"></i>)}
        regColor="#f5f5f5"
        hoveredColor="#e1ad01"
      />
    </CloseArrow>
  </StyledModalHeader>
);

export default ModalHeader;