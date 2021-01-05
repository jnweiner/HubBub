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

const City = styled.div`
  font-size: 30px;
`;

const DropdownActivatedOverlay = styled.div`
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
`;

const Header = ({ city, userAvatar, userInterests, view, changeView }) => {

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    setDropdown(false)
  }, [view.type, view.id])

  return (
    <HeaderContainer>
      {dropdown ? <DropdownActivatedOverlay onClick={() => setDropdown(false)}/> : null}
      <TitleSection>
        <Logo><i className="fas fa-city"></i>HubBub</Logo>
        <City onClick={() => changeView({type: 'cityHub'})}>
          <HoverText
            text={city.name}
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
            setDropdown={setDropdown}
          />
        : null}
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;