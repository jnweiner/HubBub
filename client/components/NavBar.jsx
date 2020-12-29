import React from 'react';
import InterestDropdown from './InterestDropdown.jsx';

const NavBar = ({ city, userInterests, changeView }) => {

  return (
    <div>
      <span>HubBub</span>
      <span onClick={() => changeView('cityHub')}>{city.name}</span>
      <InterestDropdown userInterests={userInterests} changeView={changeView}/>
      <span onClick={() => changeView('accountSettings')}>My Account</span>
    </div>
  )

};

export default NavBar;