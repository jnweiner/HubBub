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

const CloseX = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ModalHeader = ({ headerText, toggleModal }) => (
  <StyledModalHeader>
    <span>{headerText}</span>
    <CloseX onClick={() => toggleModal(null)}>
      <HoverText
        text={(<i className="fas fa-times"></i>)}
        regColor="#f5f5f5"
        hoveredColor="#e1ad01"
      />
    </CloseX>
  </StyledModalHeader>
);

export default ModalHeader;