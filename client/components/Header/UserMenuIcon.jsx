import React, { useState } from 'react';
import styled from 'styled-components';

const UserIcon = styled.img`
  height: 35px;
  width: 35px;
  border: ${props => props.hovered || props.dropdown ? '2px solid #e1ad01' : '2px solid #f5f5f5'};
  border-radius: 50%;
  cursor: pointer;
`;

const UserMenuIcon = ({ userAvatar, dropdown, setDropdown }) => {

  const [hovered, setHovered] = useState(false);

  return (
    <UserIcon
      src={userAvatar}
      alt="User Avatar"
      hovered={hovered}
      dropdown={dropdown}
      onClick={() => setDropdown(prevStatus => !prevStatus)}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default UserMenuIcon;