import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from './NavBar.jsx';

const App = () => {
  const [username, setUsername] = useState('Julie78');
  const [userInfo, setUserInfo] = useState({});
  const [city, setCity] = useState({});
  const [userInterests, setUserInterests] = useState([]);
  const [view, setView] = useState('cityHub');

  const fetchUserInfo = (username) => {
    axios.get(`/api/users/${username}`)
      .then(({ data }) => {
        setUserInfo(data);
        setCity({name: data.city, id: data.city_id});
      })
      .catch(err => console.log(err));
  };

  const fetchUserInterests = (username) => {
    axios.get(`api/users/${username}/interests`)
      .then(({ data }) => {
        setUserInterests(data)
      })
      .catch(err => console.log(err));
  };

  const changeView = (newView) => {
    setView(newView);
  };

  useEffect(() => {
    fetchUserInfo(username);
    fetchUserInterests(username);
  }, []);

  return (
    <div>
      <NavBar city={city} userInterests={userInterests} changeView={changeView}/>
    </div>
  )
}

export default App;