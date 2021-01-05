import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../CommonStyles.js';
import InterestPreview from './InterestPreview.jsx';

const CityHubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 25%;
`;

const CityHub = ({ cityName, cityUsers, cityInterests, userInterests, addUserInterest, deleteUserInterest, changeView }) => {

  const isUserInterest = (interestId) => {
    const userInterestIds = userInterests.map(interest => interest.id);
    return userInterestIds.includes(interestId);
  };

  return (
    <CityHubContainer>
      <PageTitle>Connect with {cityUsers} neighbors in the {cityName} area</PageTitle>
      <InterestsContainer>{cityInterests.map(interest =>
        <InterestPreview
          key={interest.id}
          interest={interest}
          isUserInterest={isUserInterest(interest.id)}
          addUserInterest={addUserInterest}
          deleteUserInterest={deleteUserInterest}
          changeView={changeView}
        />)}
      </InterestsContainer>
    </CityHubContainer>
  )
};

export default CityHub;