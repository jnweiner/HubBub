import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #2d4059;
  margin-top: 20px;
  margin-right: 20px;
  padding: 10px;
  font-size: 18px;
  width: 200px;
  height: 100vh;
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
      isCurrentView={currentView === 'cityHub'}
      onClick={() => changeView('cityHub')}>{city.name} Hub
    </NavOption>
    <NavOption>
      <span>My Interests</span>
      <StyledList>
        {userInterests.map((interest, i) =>
          <Interest key={i} onClick={() => changeView(interest.interest_id)}>
          <NavOption isCurrentView={currentView === interest.interest_id}>{interest.name}</NavOption>
          </Interest>)}
      </StyledList>
    </NavOption>
  </NavContainer>
);

export default Nav;