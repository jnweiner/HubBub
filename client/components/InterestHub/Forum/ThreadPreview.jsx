import React from 'react';
import styled from 'styled-components';

const ThreadRow = styled.tr`
  background-color: ${props => props.isHoveredThread ? 'rgba(225, 173, 1, .2)' : '#f5f5f5'};
`;

const TitleCell = styled.td`
  cursor: pointer;
`;

const ThreadPreview = ({ thread, changeView, isHoveredThread, setHoveredThread }) => (
  <ThreadRow isHoveredThread={isHoveredThread}>
    <TitleCell
      onClick={() => changeView({ ...thread, type: 'thread'})}
      onMouseOver={() => setHoveredThread(thread.id)}
      onMouseLeave={() => setHoveredThread(null)}
    >
    {thread.title}
    </TitleCell>
    <td>{thread.username}</td>
    <td>{thread.replyCount}</td>
    <td>{thread.date.slice(0, 10)}</td>
  </ThreadRow>
);

export default ThreadPreview;