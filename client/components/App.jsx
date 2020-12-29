import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import Header from './Header.jsx';
import CityHub from './CityHub.jsx';
import Nav from './Nav.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Krub', sans-serif;
    font-weight: 400;
    color: #294059;
    background-color: #f5f5f5;
  }
  button {
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DisplayContainer = styled.div`
  display: flex;
`;

const App = () => {
  const [username, setUsername] = useState('Julie78');
  const [userInfo, setUserInfo] = useState({});
  const [city, setCity] = useState({});
  const [userInterests, setUserInterests] = useState([]);
  const [view, setView] = useState('cityHub');
  const [loaded, setLoaded] = useState(false);

  const fetchUserInfo = (username) => {
    return axios.get(`/api/users/${username}`)
      .then(({ data }) => {
        setUserInfo(data);
        setCity({name: data.city, id: data.city_id});
      })
      .catch(err => console.log(err));
  };

  const fetchUserInterests = (username) => {
    return axios.get(`api/users/${username}/interests`)
      .then(({ data }) => {
        setUserInterests(data)
      })
      .catch(err => console.log(err));
  };

  const changeView = (newView) => {
    setView(newView);
  };

  useEffect(() => {
    fetchUserInfo(username)
      .then(() => fetchUserInterests(username))
      .then(() => setLoaded(true))
      .catch(err => console.log(err));
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <Header city={city} userInterests={userInterests} changeView={changeView}/>
      <DisplayContainer>
        <Nav
          city={city}
          userInterests={userInterests}
          changeView={changeView}
          currentView={view}
        />
        {view === 'cityHub' && loaded === true ? <CityHub city={city} userInterests={userInterests}/> : null}
      </DisplayContainer>
    </AppContainer>
  )
}

export default App;