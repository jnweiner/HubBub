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

const ToggleInterest = ({ isUserInterest }) => (
  <ToggleInterestContainer>
    {isUserInterest ? <i className="fas fa-minus-circle"></i>: <i className="fas fa-plus-circle"></i>}
  </ToggleInterestContainer>
);


export default ToggleInterest;