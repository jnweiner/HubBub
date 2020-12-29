import React from 'react';
import InterestDropdown from './InterestDropdown.jsx';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  color: #364f6b;
  font-size: 18px;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-family: 'Mitr', sans-serif;
  color: #ea5455;
  font-size: 30px;
  font-weight: 600px;
`;

const HubNav = styled.div`
  display: flex;
  align-items: center;
`;

const UserNav = styled.div`
  display: flex;
`;

const NavOption = styled.span`
  margin: 10px;
  cursor: pointer;
`;

const NavBar = ({ city, userInterests, changeView }) => {

  return (
    <NavContainer>
      <HubNav>
        <Logo><i className="fas fa-city"></i>HubBub</Logo>
        <NavOption onClick={() => changeView('cityHub')}><em><strong>{city.name}</strong></em></NavOption>
      </HubNav>
      <UserNav>
        <NavOption><InterestDropdown userInterests={userInterests} changeView={changeView}/></NavOption>
        <NavOption onClick={() => changeView('accountSettings')}>My Account</NavOption>
      </UserNav>
    </NavContainer>
  )

};

export default NavBar;