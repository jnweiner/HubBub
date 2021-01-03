import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageTitle } from '../CommonStyles.js';
import InterestPreview from './InterestPreview.jsx';

const CityHubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const InterestPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 99%;
  height: 25%;
`;

const CityHub = ({ city, cityUsers, cityInterests, userInterests, addUserInterest, deleteUserInterest, changeView }) => {

  const [hoveredInterest, setHoveredInterest] = useState(null);

  const isUserInterest = (interestId) => {
    const userInterestIds = userInterests.map(interest => interest.id);
    return userInterestIds.includes(interestId);
  };

  return (
    <CityHubContainer>
      <PageTitle>Connect with {cityUsers} neighbors in the {city.name} area</PageTitle>
      <InterestPreviewContainer>{cityInterests.map(interest =>
        <InterestPreview
          key={interest.id}
          interest={interest}
          isUserInterest={isUserInterest(interest.id)}
          setHoveredInterest={setHoveredInterest}
          isHoveredInterest={hoveredInterest === interest.id}
          addUserInterest={addUserInterest}
          deleteUserInterest={deleteUserInterest}
          changeView={changeView}
        />)}
      </InterestPreviewContainer>
    </CityHubContainer>
  )
};

export default CityHub;