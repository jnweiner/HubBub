import React, { useEffect } from 'react';
import styled from 'styled-components';
import Post from './Post.jsx';

const ThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThreadHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #2d4059;
  border-bottom: 1px solid #2d4059;
  padding: 10px;
  font-size: 20px;
  margin: 20px 0;
  width: 80vw;
`;

const InterestName = styled.span`
  cursor: pointer;
  font-weight: 600;
  font-size: 25px;
`;

const ReplyIcon = styled.span`
  cursor: pointer;
  background-color: #2d4059;
  color: #e1ad01;
  padding: 5px;
  border-radius: 5px;
`;

const Thread = ({ thread, changeView }) => {

  // useEffect to retrieve all replies for thread

  return (
    <ThreadContainer>
      <ThreadHeader>
        <span>
          <InterestName onClick={() => changeView({type: 'interestHub', name: thread.interest, id: thread.interest_id})}>{thread.interest} </InterestName>
          <i className="fas fa-long-arrow-alt-right"></i>
          <em> {thread.title}</em>
        </span>
        <ReplyIcon><i className="fas fa-reply"></i></ReplyIcon>
      </ThreadHeader>
      <Post post={thread} firstPost={true} />
    </ThreadContainer>
  );
};

export default Thread;