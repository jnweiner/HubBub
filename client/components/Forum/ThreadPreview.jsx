import React, { useState } from 'react';
import styled from 'styled-components';

const ThreadRow = styled.tr`
  background-color: ${props => props.isHoveredThread ? 'rgba(225, 173, 1, .2)' : '#f5f5f5'};
  vertical-align: top;
`;

const TitleCell = styled.td`
  width: 65%;
  cursor: pointer;
  padding: 2px 0;
`;

const StartedByCell = styled.td`
  width: 20%;
  padding: 2px 0;
`;

const UserAvatar = styled.img`
  vertical-align: top;
  height: 20px;
  width: 20px;
  border: 1px solid black;
  border-radius: 50%;
`;

const InfoCell = styled.td`
  padding: 2px 0;
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
      <StartedByCell>
        <UserAvatar src={thread.avatar} alt="User Avatar"/> {thread.username}
      </StartedByCell>
      <InfoCell>{thread.replyCount}</InfoCell>
      <InfoCell>{thread.date.slice(0, 10)}</InfoCell>
    </ThreadRow>
  )
};

export default ThreadPreview;