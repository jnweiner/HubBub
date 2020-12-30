import React, { useEffect } from 'react';
import styled from 'styled-components';

import ThreadPreview from './ThreadPreview.jsx';

const ForumPreviewContainer = styled.table`
  border: 1px solid #294059;
`;

const LabelRow = styled.tr`
  border: 1px solid #294059;
  background-color: rgba(41, 64, 89, .3);
  font-weight: 600;
`;

const ForumPreview = ({ city, interest, threads, fetchThreads }) => {

  useEffect(() => {
    fetchThreads(city.id, interest.id)
  }, [interest.id]);

  return (
    <ForumPreviewContainer>
      <tbody>
        <LabelRow>
          <td>Topic</td>
          <td>Created By</td>
          <td>Replies</td>
          <td>Last Updated</td>
        </LabelRow>
        {threads.map(thread => <ThreadPreview key={thread.id} thread={thread}/>)}
      </tbody>
    </ForumPreviewContainer>
  );
};

export default ForumPreview;