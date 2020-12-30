import React, { useEffect } from 'react';
import styled from 'styled-components';

import ThreadPreview from './ThreadPreview.jsx';

const ForumPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ForumTable = styled.table`
  border: 1px solid #294059;
`;

const LabelRow = styled.tr`
  border: 1px solid #294059;
  background-color: rgba(41, 64, 89, .3);
  font-weight: 600;
`;

const TopicCell = styled.td`
  display: flex;
  justify-content: space-between;
`;

const NewThreadIcon = styled.span`
  margin-right: 5px;
  cursor: pointer;
`;

const ArrowContainer = styled.span`
  text-align: right;
  margin: 5px;
`;

const Arrow = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

const ForumPreview = ({ city, interest, threads, fetchThreads }) => {

  useEffect(() => {
    fetchThreads(city.id, interest.id)
  }, [interest.id]);

  return (
    <ForumPreviewContainer>
      <ForumTable>
        <tbody>
          <LabelRow>
            <TopicCell>
              Topic
              <NewThreadIcon><i className="fas fa-pencil-alt"></i></NewThreadIcon>
            </TopicCell>
            <td>Started By</td>
            <td>Replies</td>
            <td>Last Updated</td>
          </LabelRow>
          {threads.map(thread => <ThreadPreview key={thread.id} thread={thread}/>)}
        </tbody>
      </ForumTable>
      <ArrowContainer>
        <Arrow><i className="fas fa-arrow-left"></i></Arrow> <Arrow><i className="fas fa-arrow-right"></i></Arrow>
      </ArrowContainer>
    </ForumPreviewContainer>
  );
};

export default ForumPreview;