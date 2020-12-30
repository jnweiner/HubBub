import React from 'react';
import styled from 'styled-components';


const ThreadPreview = ({ thread }) => (
  <tr>
    <td>{thread.title}</td>
    <td>{thread.username}</td>
    <td>{thread.replyCount}</td>
    <td>{thread.date}</td>
  </tr>

);

export default ThreadPreview;