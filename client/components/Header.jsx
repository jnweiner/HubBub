import React from 'react';
import styled from 'styled-components';

import HoverText from './HoverText.jsx';

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
  font-size: 20px;
`;

const City = styled.div`
  font-size: 30px;
`;

const Header = ({ city, userInterests, changeView }) => {

  return (
    <HeaderContainer>
      <HeaderSection>
        <Logo><i className="fas fa-city"></i>HubBub</Logo>
        <City onClick={() => changeView({type: 'cityHub'})}>
        <HoverText
          text={city.name}
          regColor="#f5f5f5"
          hoveredColor="gray"
        />
        </City>
      </HeaderSection>
      <HeaderSection>
        <HeaderOption onClick={() => changeView({type: 'accountSettings'})}>
          <HoverText
            text={(<i className="fas fa-cog"></i>)}
            regColor="#f5f5f5"
            hoveredColor="#e1ad01"
          />
        </HeaderOption>
      </HeaderSection>
    </HeaderContainer>
  )

};

export default Header;