import React from 'react';
import styled from 'styled-components';

import ForumPreview from './ForumPreview.jsx';

const InterestHubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InterestTitle = styled.div`
  border-top: 1px solid #2d4059;
  border-bottom: 1px solid #2d4059;
  padding: 10px;
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
  width: 80vw;
`;

const InterestHub = ({ interest, city, threads, fetchThreads, changeView }) => {

  return (
    <InterestHubContainer>
      <InterestTitle>{interest.name}</InterestTitle>
      <ForumPreview
        interest={interest}
        city={city}
        threads={threads}
        fetchThreads={fetchThreads}
        changeView={changeView}
      />
    </InterestHubContainer>
  );
};

export default InterestHub;