import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ThreadPreview from './ThreadPreview.jsx';
import ForumButton from './ForumButton.jsx';

const ForumPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
`;

const ForumTable = styled.table`
  border: 1px solid #294059;
`;

const LabelRow = styled.tr`
  border: 1px solid #294059;
  background-color: rgba(41, 64, 89, .3);
  font-weight: 600;
`;

const NewTopicContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

const ArrowContainer = styled.span`
  text-align: right;
  margin: 5px 0;
  font-weight: 600;
`;

const Arrow = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

const ForumPreview = ({ city, interest, threads, fetchThreads, changeView, toggleModal }) => {

  const [hoveredThread, setHoveredThread] = useState(null);

  useEffect(() => {
    fetchThreads(city.id, interest.id)
  }, [interest.id]);

  return (
    <ForumPreviewContainer>
      <NewTopicContainer>
        <ForumButton
          onClickFunction={() => toggleModal('newTopic')}
          content={(<span>New Topic <i className="fas fa-plus"></i></span>)}
        />
      </NewTopicContainer>
      <ForumTable>
        <tbody>
          <LabelRow>
            <td>Topic</td>
            <td>Started By</td>
            <td>Replies</td>
            <td>Created On</td>
          </LabelRow>
          {threads.map(thread =>
            <ThreadPreview
              key={thread.id}
              thread={thread}
              changeView={changeView}
              isHoveredThread={thread.id === hoveredThread}
              setHoveredThread={setHoveredThread}
            />)}
        </tbody>
      </ForumTable>
      <ArrowContainer>
        <Arrow><i className="fas fa-arrow-left"></i></Arrow> {threads.length} / {threads.length} topics <Arrow><i className="fas fa-arrow-right"></i></Arrow>
      </ArrowContainer>
    </ForumPreviewContainer>
  );
};

export default ForumPreview;