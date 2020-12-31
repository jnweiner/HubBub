import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import Header from './Header.jsx';
import CityHub from './CityHub.jsx';
import Nav from './Nav.jsx';
import AccountSettings from './AccountSettings.jsx';
import InterestHub from './InterestHub.jsx';
import Thread from './Thread.jsx';
import NewTopicModal from './NewTopicModal.jsx';
import NewReplyModal from './NewReplyModal.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Krub', sans-serif;
    font-weight: 400;
    color: #294059;
    background-color: #f5f5f5;
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

const ContentContainer = styled.div`
  width: 85%;
  diplay: flex;
  flex-direction: column;
`;

const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(220, 220, 220, .3);
  z-index: 5;
`;

const ModalFooter = styled.div`
  height: 50vh;
`;

const App = () => {
  const [username, setUsername] = useState('Julie78');
  const [userInfo, setUserInfo] = useState({});
  const [city, setCity] = useState({});
  const [cityInterests, setCityInterests] = useState([]);
  const [userInterests, setUserInterests] = useState([]);
  const [view, setView] = useState({type: 'cityHub'});
  const [loaded, setLoaded] = useState(false);
  const [threads, setThreads] = useState([]);
  const [replies, setReplies] = useState([]);
  const [modalStatus, setModalStatus] = useState(null);

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

  const fetchCityInterests = (cityId) => {
    return axios.get(`api/cities/${cityId}/interests`)
    .then(({ data }) => {
      setCityInterests(data);
    })
    .catch(err => console.log(err));
  };

  const fetchThreads = (cityId, interestId) => {
    return axios.get(`/api/cities/${cityId}/interests/${interestId}/threads`)
      .then(({ data }) => {
        setThreads(data);
      })
      .catch(err => console.log(err));
  };

  const fetchReplies = (cityId, interestId, threadId) => {
    return axios.get(`/api/cities/${cityId}/interests/${interestId}/threads/${threadId}`)
      .then(({ data }) => {
        setReplies(data);
      })
      .catch(err => console.log(err));
  };

  const changeView = (newView) => {
    setView(newView);
  };

  const toggleModal = (modalName) => {
    setModalStatus(modalName || null);
  };

  const postNewThread = (title, text) => {
    axios.post(`/api/cities/${city.id}/interests/${view.id}/threads`, {
      title: title,
      text: text,
      userId: userInfo.id
    })
    .then(() => {
      fetchThreads(city.id, view.id)
    })
    .catch(err => console.log(err));
  };

  const postNewReply = (text) => {
    axios.post(`/api/cities/${city.id}/interests/${view.interest_id}/threads/${view.id}`, {
      text: text,
      userId: userInfo.id
    })
    .then(() => {
      fetchReplies(city.id, view.interest_id, view.id)
    })
    .catch(err => console.log(err));
  };

  const renderModal = () => {
    if (modalStatus === 'newTopic') {
      return (
        <NewTopicModal
          toggleModal={toggleModal}
          postNewThread={postNewThread}
        />
      )
    } else if (modalStatus === 'newReply') {
      return (
        <NewReplyModal
          toggleModal={toggleModal}
          postNewReply={postNewReply}
        />
      )
    }
  };

  const renderView = () => {
    if (view.type === 'cityHub') {
      return (
        <CityHub
        city={city}
        userInterests={userInterests}
        cityInterests={cityInterests}
        fetchCityInterests={fetchCityInterests}
        addUserInterest={addUserInterest}
        deleteUserInterest={deleteUserInterest}
        changeView={changeView}
      />
      )
    } else if (view.type === 'accountSettings') {
      return (
        <AccountSettings
          userInfo={userInfo}
        />
      )
    } else if (view.type === 'interestHub') {
      return (
        <InterestHub
          interest={view}
          city={city}
          fetchThreads={fetchThreads}
          threads={threads}
          changeView={changeView}
          toggleModal={toggleModal}
        />
      )
    } else if (view.type === 'thread') {
      return (
        <Thread
          changeView={changeView}
          thread={view}
          fetchReplies={fetchReplies}
          replies={replies}
          toggleModal={toggleModal}
        />
      )
    }
  };

  const addUserInterest = (interestId) => {
    axios.post(`/api/users/${username}/interests`, {
      userId: userInfo.id,
      interestId: interestId
    })
      .then(() => {
        fetchUserInterests(username);
        fetchCityInterests(city.id);
      })
      .catch(err => console.log(err));
  };

  const deleteUserInterest = (interestId) => {
    axios.delete(`/api/users/${username}/interests`, {
      data: {
        userId: userInfo.id,
        interestId: interestId
      }
    })
      .then(() => {
        fetchUserInterests(username);
        fetchCityInterests(city.id);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchUserInfo(username)
      .then(() => {
        fetchUserInterests(username);
      })
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
        <ContentContainer>
          {modalStatus ? renderModal() : null}
          {modalStatus ? <ModalOverlay onClick={() => toggleModal(null)}/> : null}
          {loaded === true ? renderView() : null}
          {modalStatus ? <ModalFooter /> : null}
        </ContentContainer>
      </DisplayContainer>
    </AppContainer>
  )
}

export default App;