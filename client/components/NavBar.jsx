import React from 'react';
import InterestDropdown from './InterestDropdown.jsx';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  background-color: #294059;
  color: #f5f5f5;
  font-size: 18px;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-family: 'Mitr', sans-serif;
  color: #ffd460;
  font-size: 30px;
  font-weight: 600px;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavOption = styled.span`
  margin: 10px;
  cursor: pointer;
`;

const NavBar = ({ city, userInterests, changeView }) => {

  return (
    <NavContainer>
      <NavSection>
        <Logo><i className="fas fa-city"></i>HubBub</Logo>
        <NavOption onClick={() => changeView('cityHub')}><em><strong>{city.name}</strong></em></NavOption>
      </NavSection>
      <NavSection>
        <NavOption><InterestDropdown userInterests={userInterests} changeView={changeView}/></NavOption>
        <NavOption onClick={() => changeView('accountSettings')}>My Account</NavOption>
      </NavSection>
    </NavContainer>
  )

};

export default NavBar;