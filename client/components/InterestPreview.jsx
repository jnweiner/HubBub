import React, { useState } from 'react';
import styled from 'styled-components';

import ToggleInterest from './ToggleInterest.jsx';

const StyledInterestPreview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.isUserInterest ? '#2d4059' : '#f5f5f5'};
  height: 100px;
  width: 200px;
  justify-content: center;
  align-items: center;
  color: ${props => props.isUserInterest ? '#f5f5f5' : '#2d4059'};
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border: 1px solid #2d4059;
  border-radius: 5px;
`;

const Icon = styled.span`
  color: #e1ad01;
  font-weight: 600;
  font-size: 30px;
`;

const InterestPreview = ({ interest, isUserInterest, setHoveredInterest, isHoveredInterest, addUserInterest, deleteUserInterest }) => (
  <div>
    <StyledInterestPreview
      isUserInterest={isUserInterest}
      onMouseOver={() => setHoveredInterest(interest.id)}
      onMouseLeave={() => setHoveredInterest(null)}
    >
      {isHoveredInterest ?
        <ToggleInterest
          id={interest.id}
          isUserInterest={isUserInterest}
          addUserInterest={addUserInterest}
          deleteUserInterest={deleteUserInterest}
        />
        : null}
      <Icon><i className={interest.icon}></i></Icon>
      <strong>{interest.name}</strong>
      <span><em>{interest.userCount} following</em></span>
    </StyledInterestPreview>
  </div>
);

export default InterestPreview;