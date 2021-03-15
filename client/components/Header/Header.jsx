import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HoverText from '../HoverText.jsx';
import HeaderDropdown from './HeaderDropdown.jsx';
import UserMenuIcon from './UserMenuIcon.jsx';

const HeaderContainer = styled.div`
  display: flex;
  background-color: #294059;
  color: #f5f5f5;
  font-size: 18px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  position: relative;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const UserSection = styled.div`
  font-size: 15px;
  text-align: right;
  position: relative;
  width: 10%;
`;

const Logo = styled.span`
  color: #e1ad01;
  font-size: 30px;
`;

const City = styled.span`
  font-size: 30px;
`;

City.displayName = 'City';

const Header = ({ cityName, userAvatar, userInterests, changeView, logout }) => {

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const dropdownHandler = () => {
      setDropdown(false);
    };

    if (dropdown) {
      document.body.addEventListener('click', dropdownHandler);
    }

    return function cleanup() {
      if (dropdown) {
        document.body.removeEventListener('click', dropdownHandler);
      }
    }

  }, [dropdown])

  return (
    <HeaderContainer>
      <TitleSection>
        <Logo><i className="fas fa-city"></i>HubBub</Logo>
        <City onClick={() => changeView({type: 'cityHub'})}>
          <HoverText
            text={cityName}
            regColor="#f5f5f5"
            hoveredColor="gray"
          />
        </City>
      </TitleSection>
      <UserSection>
        <UserMenuIcon
          userAvatar={userAvatar}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
        {dropdown ?
          <HeaderDropdown
            changeView={changeView}
            logout={logout}
          />
        : null}
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;