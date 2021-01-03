import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PageTitle } from '../CommonStyles.js';

import InterestPreview from './InterestPreview.jsx';

const CityHubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 99%;
`;

const CityHub = ({ city, cityUsers, cityInterests, fetchCityUsers, fetchCityInterests, userInterests, addUserInterest, deleteUserInterest, changeView }) => {

  const [hoveredInterest, setHoveredInterest] = useState(null);

  const isUserInterest = (interestId) => {
    const userInterestIds = userInterests.map(interest => interest.id);
    return userInterestIds.includes(interestId);
  };

  useEffect(() => {
    fetchCityUsers(city.id)
      .then(() => fetchCityInterests(city.id))
      .catch(err => console.log(err));
  }, []);

  return (
    <CityHubContainer>
      <PageTitle>Connect with {cityUsers} neighbors in the {city.name} area</PageTitle>
      <Row>{cityInterests.slice(0, 5).map(interest =>
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
      </Row>
      <Row>{cityInterests.slice(5).map(interest =>
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
      </Row>
    </CityHubContainer>
  )
};

export default CityHub;