import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

import LandingPage from './LandingPage.jsx';

// constant assets
import Header from './Header/Header.jsx';
import Nav from './Nav/Nav.jsx';

// view options
import AccountSettings from './AccountSettings/AccountSettings.jsx';
import CityHub from './CityHub/CityHub.jsx';
import InterestHub from './InterestHub/InterestHub.jsx';
import Thread from './Forum/Thread.jsx';

// modal assets
import Modal from './Modal/Modal.jsx';
import { ModalActivatedOverlay, ModalActivatedFooter } from './Modal/ModalStyles.js';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Krub', sans-serif;
    font-weight: 400;
    color: #294059;
    background-color: #f5f5f5;
  }
  button {
    font-family: 'Krub', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoggedInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LoggedOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vw;
  height: 95vh;
`;

// Display refers to the Nav + View areas 
const DisplayContainer = styled.div`
  display: flex;
`;

const ViewContainer = styled.div`
  width: 85%;
  diplay: flex;
  flex-direction: column;
`;

const App = () => {

  // state for which content is being displayed to user
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState({type: 'cityHub'});
  const [modalStatus, setModalStatus] = useState(null);

  // state related to current user
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [userInterests, setUserInterests] = useState([]);

  // state related to current city
  const [city, setCity] = useState({});
  const [cityUsers, setCityUsers] = useState(null);
  const [cityInterests, setCityInterests] = useState([]);

  // state related to forum
  const [threads, setThreads] = useState([]);
  const [paginatedThreads, setPaginatedThreads] = useState([]);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    if (currentUser) {
      fetchUserInfo(currentUser)
        .then(cityId => {
          fetchCityUsers(cityId);
          fetchCityInterests(cityId);
          fetchUserInterests(currentUser);
        })
        .then(() => setLoaded(true))
        .catch(err => console.log(err));
    }
  }, [currentUser]);

    // content being displayed to user

    const changeView = (newView) => {
      setView(newView);
    };
  
    const renderView = () => {
      if (view.type === 'cityHub') {
        return (
          <CityHub
            cityName={city.name}
            cityUsers={cityUsers}
            cityInterests={cityInterests}
            userInterests={userInterests}
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
            cityId={city.id}
            fetchThreads={fetchThreads}
            threads={threads}
            paginatedThreads={paginatedThreads}
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
            editReply={editReply}
            deleteReply={deleteReply}
            replies={replies}
            toggleModal={toggleModal}
            userId={userInfo.id}
          />
        )
      }
    };
  
    const toggleModal = (modalName) => {
      setModalStatus(modalName || null);
    };

  // user-related

  const validateUser = (userInfo, callback) => {
    return axios.get(`/api/login`, { params: userInfo })
      .then(() => setCurrentUser(userInfo.username))
      .catch(err => {
        console.log(err);
        callback();
      });
  };

  const fetchUserInfo = (currentUser) => {
    return axios.get(`/api/users/${currentUser}`)
      .then(({ data }) => {
        setUserInfo(data);
        setCity({name: data.city, id: data.city_id});
        return data.city_id;
      })
      .catch(err => console.log(err));
  };

  const fetchUserInterests = (currentUser) => {
    return axios.get(`api/users/${currentUser}/interests`)
      .then(({ data }) => {
        setUserInterests(data)
      })
      .catch(err => console.log(err));
  };

  const addUserInterest = (interestId) => {
    axios.post(`/api/users/${currentUser}/interests`, {
      userId: userInfo.id,
      interestId: interestId
    })
      .then(() => {
        fetchUserInterests(currentUser);
        fetchCityInterests(city.id);
      })
      .catch(err => console.log(err));
  };

  const deleteUserInterest = (interestId) => {
    axios.delete(`/api/users/${currentUser}/interests`, {
      data: {
        userId: userInfo.id,
        interestId: interestId
      }
    })
      .then(() => {
        fetchUserInterests(currentUser);
        fetchCityInterests(city.id);
      })
      .catch(err => console.log(err));
  };

  // city-related

  const fetchCityUsers = (cityId) => {
    return axios.get(`/api/cities/${cityId}/users`)
      .then(({ data }) => {
        setCityUsers(data.count);
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

  // forum-related

  const fetchThreads = (cityId, interestId) => {
    return axios.get(`/api/cities/${cityId}/interests/${interestId}/threads`)
      .then(({ data }) => {
        setThreads(data);
        return data;
      })
      .then(data => {
        const paginated = paginateThreads(data, 10);
        setPaginatedThreads(paginated);
      })
      .catch(err => console.log(err));
  };

  const paginateThreads = (threads, numAtATime) => {
    const paginated = [];
    let start = 0;
    let end = numAtATime;
  
    while (threads[start]) {
      let sliced = threads.slice(start, end);
      paginated.push(sliced);
  
      start += numAtATime;
      end += numAtATime;
    }
  
    return paginated;
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

  const fetchReplies = (cityId, interestId, threadId) => {
    return axios.get(`/api/cities/${cityId}/interests/${interestId}/threads/${threadId}`)
      .then(({ data }) => {
        setReplies(data);
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

  const editReply = (replyId, text) => {
    axios.patch(`/api/replies/${replyId}`, { text })
      .then(() => {
        fetchReplies(city.id, view.interest_id, view.id)
      })
      .catch(err => console.log(err));
  };

  const deleteReply = (replyId) => {
    axios.delete(`/api/replies/${replyId}`)
      .then(() => {
        fetchReplies(city.id, view.interest_id, view.id)
      })
      .catch(err => console.log(err));
  }

  return (
    <AppContainer>
      <GlobalStyle />
      { currentUser ? 
      <LoggedInContainer>
        <Header
          city={city}
          userAvatar={userInfo.avatar}
          userInterests={userInterests}
          view={view}
          changeView={changeView}
          setCurrentUser={setCurrentUser}
        />
        <DisplayContainer>
          <Nav
            city={city}
            userInterests={userInterests}
            changeView={changeView}
            currentView={view}
          />
          <ViewContainer>
            {modalStatus ? 
              <Modal
                modalStatus={modalStatus}
                toggleModal={toggleModal}
                postToForum={modalStatus === 'newThread' ? postNewThread : postNewReply}
              />
            : null}
            {modalStatus ? <ModalActivatedOverlay onClick={() => toggleModal(null)}/> : null}
            {loaded === true ? renderView() : null}
            {modalStatus ? <ModalActivatedFooter /> : null}
          </ViewContainer>
        </DisplayContainer>
      </LoggedInContainer>
      : 
      <LoggedOutContainer>
        <LandingPage
          validateUser={validateUser}
        />
      </LoggedOutContainer>
      }
    </AppContainer>
  )
}

export default App;