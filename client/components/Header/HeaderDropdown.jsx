import React from 'react';
import styled from 'styled-components';
import HoverText from '../HoverText.jsx';

const DropdownContainer = styled.div`
  position: absolute;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  width: 80%;
  z-index: 5;
  padding: 10px;
  background-color: #294059;
  border-radius: 5px;
  border: 2px solid #e1ad01;
  font-weight: 600;
`;

const HeaderDropdown = ({ changeView, logout }) => (
  <DropdownContainer>
    <span>
      <HoverText
        text={(<span><i className="fas fa-user"></i> My Profile</span>)}
        regColor="#f5f5f5"
        hoveredColor="#e1ad01"
      />
    </span>
    <span onClick={() => changeView({type: 'accountSettings'})}>
      <HoverText
        text={(<span><i className="fas fa-cog"></i> Settings</span>)}
        regColor="#f5f5f5"
        hoveredColor="#e1ad01"
      />
    </span>
    <span onClick={logout}>
      <HoverText
        text={(<span><i className="fas fa-sign-out-alt"></i> Log Out</span>)}
        regColor="#f5f5f5"
        hoveredColor="#e1ad01"
      />
    </span>
  </DropdownContainer>
);


export default HeaderDropdown;