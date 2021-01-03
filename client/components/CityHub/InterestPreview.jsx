import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleInterestIcon from './ToggleInterestIcon.jsx';

const InterestPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65%;
  width: 17%;
  overflow: auto;
  background-color: ${props => props.isUserInterest ? '#2d4059' : '#f5f5f5'};
  color: ${props => props.isUserInterest ? '#f5f5f5' : '#2d4059'};
  margin: 10px;
  border: 1px solid #2d4059;
  border-radius: 5px;
  position: relative;
  box-shadow: ${props => props.isHoveredInterest ? '0 0 10px gray': 'none'};
`;

const InterestInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const Followers = styled.span`
  font-style: italic;
  font-weight: 400;
`;

const Icon = styled.span`
  color: #e1ad01;
  font-size: 30px;
`;

const InterestPreview = ({ interest, isUserInterest, addUserInterest, deleteUserInterest, changeView }) => {

  const [hoveredInterest, setHoveredInterest] = useState(false);

  return (
    <InterestPreviewContainer
      isUserInterest={isUserInterest}
      isHoveredInterest={hoveredInterest}
      onMouseOver={() => setHoveredInterest(true)}
      onMouseLeave={() => setHoveredInterest(false)}
    >
      {hoveredInterest ?
        <ToggleInterestIcon
          id={interest.id}
          isUserInterest={isUserInterest}
          addUserInterest={addUserInterest}
          deleteUserInterest={deleteUserInterest}
        />
        : null}
      <InterestInfo onClick={() => changeView({ ...interest, type: 'interestHub'})}>
        <Icon><i className={interest.icon}></i></Icon>
        <span>{interest.name}</span>
        <Followers>{interest.userCount} following</Followers>
      </InterestInfo>
    </InterestPreviewContainer>
  )
};

export default InterestPreview;