import React, { useState } from 'react';
import styled from 'styled-components';

const ThreadRow = styled.tr`
  background-color: ${props => props.isHoveredThread ? 'rgba(225, 173, 1, .2)' : '#f5f5f5'};
  vertical-align: top;
`;

const TitleCell = styled.td`
  width: 65%;
  cursor: pointer;
`;

const StartedByCell = styled.td`
  width: 20%;
`;

const ThreadPreview = ({ thread, changeView }) => {

  const [hoveredThread, setHoveredThread] = useState(false);

  return (
    <ThreadRow isHoveredThread={hoveredThread}>
      <TitleCell
        onClick={() => changeView({ ...thread, type: 'thread'})}
        onMouseOver={() => setHoveredThread(true)}
        onMouseLeave={() => setHoveredThread(false)}
      >
      {thread.title}
      </TitleCell>
      <StartedByCell>{thread.username}</StartedByCell>
      <td>{thread.replyCount}</td>
      <td>{thread.date.slice(0, 10)}</td>
    </ThreadRow>
  )
};

export default ThreadPreview;