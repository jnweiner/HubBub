import React from 'react';
import InterestDropdown from './InterestDropdown.jsx';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  background-color: #294059;
  color: #f5f5f5;
  font-size: 18px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.span`
  color: #e1ad01;
  font-size: 30px;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderOption = styled.span`
  margin: 10px;
  cursor: pointer;
`;

const City = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

const Header = ({ city, userInterests, changeView }) => {

  return (
    <HeaderContainer>
      <HeaderSection>
        <Logo><i className="fas fa-city"></i>HubBub</Logo>
        <City onClick={() => changeView('cityHub')}>{city.name}</City>
      </HeaderSection>
      <HeaderSection>
        <HeaderOption><InterestDropdown userInterests={userInterests} changeView={changeView}/></HeaderOption>
        <HeaderOption onClick={() => changeView('accountSettings')}>My Account</HeaderOption>
      </HeaderSection>
    </HeaderContainer>
  )

};

export default Header;