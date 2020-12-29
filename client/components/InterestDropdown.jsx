import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const InterestDropdown = ({ userInterests, changeView }) => {

  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(prevSelected => !prevSelected);
  };

  return (
    <DropdownContainer>
      <div onClick={toggleSelected}>My Interests</div>
      { selected ? 
        userInterests.map((interest, i) => <div key={i} onClick={() => changeView(interest.name)}>{interest.name}</div>)
      : null }
    </DropdownContainer>
  )
}

export default InterestDropdown;