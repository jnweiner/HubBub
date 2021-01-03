import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../CommonStyles.js';
import Forum from '../Forum/Forum.jsx';

const InterestHubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InterestHub = ({ interest, cityId, threads, fetchThreads, changeView, toggleModal }) => (
  <InterestHubContainer>
    <PageTitle>{interest.name}</PageTitle>
    <Forum
      interestId={interest.id}
      cityId={cityId}
      threads={threads}
      fetchThreads={fetchThreads}
      changeView={changeView}
      toggleModal={toggleModal}
    />
  </InterestHubContainer>
);
export default InterestHub;