import React from 'react';
import styled from 'styled-components';

const StyledInterestPreview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.isUserInterest ? 'rgba(255, 212, 96, .3)' : '#f5f5f5'};
  height: 100px;
  width: 200px;
  justify-content: center;
  align-items: center;
  color: #294059;
  border: 1px solid #2d4059;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;

const Icon = styled.span`
  color: #f07b3f;
  font-weight: 600;
  font-size: 30px;
`;

const InterestName = styled.span`
  font-weight: 600;
  color: #ea5455;
`;

const InterestPreview = ({ interest, isUserInterest }) => (
  <StyledInterestPreview isUserInterest={isUserInterest}>
    <Icon><i className={interest.icon}></i></Icon>
    <InterestName>{interest.name}</InterestName>
    <span><em>{interest.userCount} following</em></span>
  </StyledInterestPreview>
);

export default InterestPreview;