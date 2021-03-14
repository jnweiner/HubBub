import React from 'react';
import styled from 'styled-components';
import HoverText from '../HoverText.jsx';

const ToggleInterestContainer = styled.div`
  padding: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const ToggleIcon = styled.span`
  font-size: 18px;
`;

ToggleIcon.displayName = 'ToggleIcon';

const ToggleInterestIcon = ({ id, isUserInterest, addUserInterest, deleteUserInterest }) => (
  <ToggleInterestContainer>
    <ToggleIcon onClick={isUserInterest ? () => deleteUserInterest(id) : () => addUserInterest(id)}>
      <HoverText
        text={(<i className={isUserInterest ? "fas fa-minus-circle" : "fas fa-plus-circle"}></i>)}
        regColor={isUserInterest ? "#f5f5f5" : "#294059"}
        hoveredColor="#e1ad01"
      />
    </ToggleIcon>
  </ToggleInterestContainer>
);


export default ToggleInterestIcon;