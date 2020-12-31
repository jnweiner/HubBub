import React, { useState } from 'react';
import styled from 'styled-components';

import ToggleInterest from './ToggleInterest.jsx';

const StyledInterestPreview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.isUserInterest ? '#2d4059' : '#f5f5f5'};
  height: 100px;
  width: 180px;
  justify-content: center;
  align-items: center;
  color: ${props => props.isUserInterest ? '#f5f5f5' : '#2d4059'};
  padding: 10px;
  margin: 10px;
  border: 1px solid #2d4059;
  border-radius: 5px;
  position: relative;
  box-shadow: ${props => props.isHoveredInterest ? '0 0 10px gray': 'none'};
`;

const Icon = styled.span`
  color: #e1ad01;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
`;

const InterestName = styled.span`
  cursor: pointer;
  font-weight: 600;
`;

const InterestPreview = ({ interest, isUserInterest, setHoveredInterest, isHoveredInterest, addUserInterest, deleteUserInterest, changeView }) => (
  <div>
    <StyledInterestPreview
      isUserInterest={isUserInterest}
      isHoveredInterest={isHoveredInterest}
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
      <Icon onClick={() => changeView({ ...interest, type: 'interestHub'})}><i className={interest.icon}></i></Icon>
      <InterestName onClick={() => changeView({ ...interest, type: 'interestHub'})}>{interest.name}</InterestName>
      <span><em>{interest.userCount} following</em></span>
    </StyledInterestPreview>
  </div>
);

export default InterestPreview;