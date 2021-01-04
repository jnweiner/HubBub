import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThreadPreview from './ThreadPreview.jsx';
import ForumButton from './ForumButton.jsx';
import HoverText from '../HoverText.jsx';

const ForumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
`;

const ForumTableHeader = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

const ForumTable = styled.table`
  border: 1px solid #294059;
`;

const LabelRow = styled.tr`
  border: 1px solid #294059;
  background-color: rgba(41, 64, 89, .3);
  font-weight: 600;
`;

const ArrowContainer = styled.span`
  margin-top: 5px;
  text-align: right;
  font-weight: 600;
`;

const Forum = ({ cityId, interestId, threads, paginatedThreads, fetchThreads, changeView, toggleModal }) => {

  const [loaded, setLoaded] = useState(false);
  const [threadsPage, setThreadsPage] = useState(0);

  useEffect(() => {
    fetchThreads(cityId, interestId)
      .then(() => setLoaded(true))
  }, [interestId]);

  return (
    <ForumContainer>
      <ForumTableHeader>
        <ForumButton
          onClickFunction={() => toggleModal('newThread')}
          content={(<span>New Topic <i className="fas fa-plus"></i></span>)}
        />
      </ForumTableHeader>
      <ForumTable>
        <tbody>
          <LabelRow>
            <td>Topic</td>
            <td>Started By</td>
            <td>Replies</td>
            <td>Created On</td>
          </LabelRow>
          {loaded ? paginatedThreads[threadsPage].map(thread =>
            <ThreadPreview
              key={thread.id}
              thread={thread}
              changeView={changeView}
            />) : null}
        </tbody>
      </ForumTable>
      <ArrowContainer>
        {threadsPage > 0 ?
          <span onClick={() => setThreadsPage(prevPage => prevPage - 1)}>
            <HoverText
              text={(<i className="fas fa-arrow-left"></i>)}
              regColor="#294059"
              hoveredColor="#e1ad01"
            />
          </span>
        : null}
        {loaded ? <span>{` ${paginatedThreads[threadsPage].length + (threadsPage * 10)} / ${threads.length} topics `}</span> : null}
        {threadsPage + 1 < paginatedThreads.length ?
          <span onClick={() => setThreadsPage(prevPage => prevPage + 1)}>
            <HoverText
              text={(<i className="fas fa-arrow-right"></i>)}
              regColor="#294059"
              hoveredColor="#e1ad01"
            />
          </span>
        : null}
      </ArrowContainer>
    </ForumContainer>
  );
};

export default Forum;