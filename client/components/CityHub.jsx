import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import InterestPreview from './InterestPreview.jsx';

const CityHubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CityTitle = styled.div`
  border-top: 1px solid #2d4059;
  border-bottom: 1px solid #2d4059;
  padding: 10px;
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CityHub = ({ city, userInterests, cityInterests, fetchCityInterests, addUserInterest, deleteUserInterest, changeView }) => {

  const [cityUsers, setCityUsers] = useState(null);
  // const [cityInterests, setCityInterests] = useState([]);
  const [hoveredInterest, setHoveredInterest] = useState(null);

  const fetchCityUsers = (cityId) => {
    return axios.get(`/api/cities/${cityId}/users`)
      .then(({ data }) => {
        setCityUsers(data.count);
      })
      .catch(err => console.log(err));
  };

  const isUserInterest = (interestId) => {
    const userInterestIds = userInterests.map(interest => interest.interest_id);
    return userInterestIds.includes(interestId);
  };

  useEffect(() => {
    fetchCityUsers(city.id)
      .then(() => fetchCityInterests(city.id))
      .catch(err => console.log(err));
  }, []);

  return (
    <CityHubContainer>
      <CityTitle><i className="fas fa-map-pin"></i> Connect with {cityUsers} neighbors in the {city.name} area</CityTitle>
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