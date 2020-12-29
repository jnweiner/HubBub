import React from 'react';
import styled from 'styled-components';

const ToggleInterestContainer = styled.div`
  text-align: right;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  height: 100px;
  position: absolute;
`;

const ToggleInterest = ({ id, isUserInterest, addUserInterest, deleteUserInterest }) => (
  <ToggleInterestContainer>
    <i
      onClick={isUserInterest ? () => deleteUserInterest(id) : () => addUserInterest(id)}
      className={isUserInterest ? "fas fa-minus-circle" : "fas fa-plus-circle"}
    ></i>
  </ToggleInterestContainer>
);


export default ToggleInterest;