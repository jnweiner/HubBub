import React from 'react';
import styled from 'styled-components';
import HoverText from '../HoverText.jsx';

const SubmitContainer = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  background-color: #e1ad01;
  border: 1px solid #e1ad01;
  border-radius: 5px;
  padding: 5px;
  font-weight: 600;
  font-size: 15px;
`;

SubmitButton.displayName = 'SubmitButton';

const ModalButton = ({ content, onClickFunction }) => (
  <SubmitContainer>
    <SubmitButton onClick={onClickFunction}>
      <HoverText
        text={content}
        regColor="#294059"
        hoveredColor="#f5f5f5"
      />
    </SubmitButton>
  </SubmitContainer>
);

export default ModalButton;

// getting error 'Form submission canceled because the form is not connected' - investigate

