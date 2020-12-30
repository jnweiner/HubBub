import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #2d4059;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 18px;
  min-height: 100vh;
  width: 16%;
`;

const NavOption = styled.span`
  margin: 5px;
  cursor: pointer;
  font-weight: ${props => props.isCurrentView ? '700' : '400'};
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

const Interest = styled.li`
  list-style-type: none;
  margin-left: 10px;
  font-size: 15px;
`;

const Nav = ({ city, userInterests, changeView, currentView }) => (
  <NavContainer>
    <NavOption 
      isCurrentView={currentView.type === 'cityHub'}
      onClick={() => changeView({type: 'cityHub'})}
    >
    {city.name} Hub
    </NavOption>
    <NavOption>
      <span>My Interests</span>
      <StyledList>
        {userInterests.map((interest, i) =>
          <Interest key={i} onClick={() => changeView({ ...interest, type: 'interestHub'})}>
          <NavOption isCurrentView={currentView.name === interest.name}>{interest.name}</NavOption>
          </Interest>)}
      </StyledList>
    </NavOption>
    <NavOption 
      isCurrentView={currentView.type === 'accountSettings'}
      onClick={() => changeView({type: 'accountSettings'})}
    >
    My Account
    </NavOption>
  </NavContainer>
);

export default Nav;