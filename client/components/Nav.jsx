import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #2d4059;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 18px;
  min-height: 100vh;
  width: 15%;
`;

const NavOption = styled.span`
  margin: 5px;
  font-weight: ${props => props.isCurrentView ? '700' : '400'};
  border-radius: 5px;
  background-color: ${props => props.isHovered ? 'rgba(41, 64, 89, .2)' : '#f5f5f5'};
  cursor: ${props => props.isHovered ? 'pointer' : 'default'};
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

const Nav = ({ city, userInterests, changeView, currentView }) => {

  const [hoveredOption, setHoveredOption] = useState(null);

  return (
    <NavContainer>
      <NavOption
        isCurrentView={currentView.type === 'cityHub'}
        onClick={() => changeView({type: 'cityHub'})}
        isHovered={hoveredOption === 'cityHub'}
        onMouseOver={() => setHoveredOption('cityHub')}
        onMouseLeave={() => setHoveredOption(null)}
      >
      {city.name} Hub
      </NavOption>
      <NavOption>
        <span>My Interests</span>
        <StyledList>
          {userInterests.map((interest, i) =>
          <Interest key={i}>
            <NavOption
              isCurrentView={currentView.name === interest.name}
              onClick={() => changeView({ ...interest, type: 'interestHub'})}
              isHovered={hoveredOption === interest.name}
              onMouseOver={() => setHoveredOption(interest.name)}
              onMouseLeave={() => setHoveredOption(null)}
            >
            {interest.name}
            </NavOption>
          </Interest>)}
        </StyledList>
      </NavOption>
      <NavOption 
        isCurrentView={currentView.type === 'accountSettings'}
        onClick={() => changeView({type: 'accountSettings'})}
        isHovered={hoveredOption === 'accountSettings'}
        onMouseOver={() => setHoveredOption('accountSettings')}
        onMouseLeave={() => setHoveredOption(null)}
      >
      My Account
      </NavOption>
    </NavContainer>
  );
};

export default Nav;