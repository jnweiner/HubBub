import React from 'react';
import styled from 'styled-components';
import ToggleInterestIcon from './ToggleInterestIcon.jsx';

const InterestPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 15%;
  background-color: ${props => props.isUserInterest ? '#2d4059' : '#f5f5f5'};
  color: ${props => props.isUserInterest ? '#f5f5f5' : '#2d4059'};
  padding: 10px;
  margin: 10px;
  border: 1px solid #2d4059;
  border-radius: 5px;
  position: relative;
  box-shadow: ${props => props.isHoveredInterest ? '0 0 10px gray': 'none'};
`;

const InterestName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;

const Icon = styled.span`
  color: #e1ad01;
  font-size: 30px;
`;

const InterestPreview = ({ interest, isUserInterest, setHoveredInterest, isHoveredInterest, addUserInterest, deleteUserInterest, changeView }) => (
    <InterestPreviewContainer
      isUserInterest={isUserInterest}
      isHoveredInterest={isHoveredInterest}
      onMouseOver={() => setHoveredInterest(interest.id)}
      onMouseLeave={() => setHoveredInterest(null)}
    >
      {isHoveredInterest ?
        <ToggleInterestIcon
          id={interest.id}
          isUserInterest={isUserInterest}
          addUserInterest={addUserInterest}
          deleteUserInterest={deleteUserInterest}
        />
        : null}
      <InterestName onClick={() => changeView({ ...interest, type: 'interestHub'})}>
        <Icon><i className={interest.icon}></i></Icon>
        <span>{interest.name}</span>
      </InterestName>
      <span><em>{interest.userCount} following</em></span>
    </InterestPreviewContainer>
);

export default InterestPreview;