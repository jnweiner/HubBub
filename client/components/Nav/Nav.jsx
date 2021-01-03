import React from 'react';
import styled from 'styled-components';

import NavOption from './NavOption.jsx';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #2d4059;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 18px;
  min-height: 100vh;
  width: 15%;
  padding: 5px;
`;

const Nav = ({ city, userInterests, changeView, currentView }) => (
  <NavContainer>
    <NavOption
      isCurrentView={currentView.type === 'cityHub'}
      onClickFunction={() => changeView({type: 'cityHub'})}
      text={`${city.name} Hub`}
    />
    <span>My Interests</span>
    {userInterests.map((interest, i) =>
      <NavOption 
        key={i}
        isInterest={true}
        isCurrentView={currentView.name === interest.name}
        onClickFunction={() => changeView({ ...interest, type: 'interestHub'})}
        text={interest.name} 
      />)}
    <NavOption 
      isCurrentView={currentView.type === 'accountSettings'}
      onClickFunction={() => changeView({type: 'accountSettings'})}
      text='Account Settings'
    />
  </NavContainer>
);

export default Nav;