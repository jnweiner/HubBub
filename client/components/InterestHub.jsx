import React from 'react';
import styled from 'styled-components';

import ForumPreview from './ForumPreview.jsx';

const InterestHubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InterestTitle = styled.div`
  border-top: 1px solid #2d4059;
  border-bottom: 1px solid #2d4059;
  padding: 10px 0;
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
  width: 99%;
`;

const InterestHub = ({ interest, city, threads, fetchThreads, changeView, toggleModal }) => {

  return (
    <InterestHubContainer>
      <InterestTitle>{interest.name}</InterestTitle>
      <ForumPreview
        interest={interest}
        city={city}
        threads={threads}
        fetchThreads={fetchThreads}
        changeView={changeView}
        toggleModal={toggleModal}
      />
    </InterestHubContainer>
  );
};

export default InterestHub;