import React from 'react';
import styled from 'styled-components';

const TitleCell = styled.td`
  cursor: pointer;
`;

const ThreadPreview = ({ thread, changeView }) => (
  <tr>
    <TitleCell onClick={() => changeView({ ...thread, type: 'thread'})}>{thread.title}</TitleCell>
    <td>{thread.username}</td>
    <td>{thread.replyCount}</td>
    <td>{thread.date.slice(0, 10)}</td>
  </tr>

);

export default ThreadPreview;