import React from 'react';
import styled from 'styled-components';

const InterestTitle = styled.div`
  border-top: 1px solid #2d4059;
  border-bottom: 1px solid #2d4059;
  padding: 10px;
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
  width: 80vw;
`;

const InterestHub = ({ interest }) => {

  return (
    <div>
      <InterestTitle>{interest.name}</InterestTitle>
    </div>
  );
};

export default InterestHub;