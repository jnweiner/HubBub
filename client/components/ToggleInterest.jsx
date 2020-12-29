import React from 'react';
import styled from 'styled-components';

const ToggleInterestContainer = styled.div`
  padding: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const ToggleIcon = styled.span`
  cursor: pointer;
  font-size: 18px;
`;

const ToggleInterest = ({ id, isUserInterest, addUserInterest, deleteUserInterest }) => (
  <ToggleInterestContainer>
    <ToggleIcon onClick={isUserInterest ? () => deleteUserInterest(id) : () => addUserInterest(id)}>
      <i className={isUserInterest ? "fas fa-minus-circle" : "fas fa-plus-circle"}></i>
    </ToggleIcon>
  </ToggleInterestContainer>
);


export default ToggleInterest;