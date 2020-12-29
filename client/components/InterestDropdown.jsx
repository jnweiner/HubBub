import React, { useState } from 'react';
import styled from 'styled-components';

const InterestDropdown = ({ userInterests, changeView }) => {

  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(prevSelected => !prevSelected);
  };

  return (
    <table>
      <tbody>
      <tr onClick={toggleSelected}><td>My Interests</td></tr>
      { selected ? 
        userInterests.map((interest, i) => <tr key={i} onClick={() => changeView(interest.name)}><td>{interest.name}</td></tr>)
      : null }
      </tbody>
    </table>
  )
}

export default InterestDropdown;