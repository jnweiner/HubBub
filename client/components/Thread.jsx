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

const Thread = ({ thread, changeView, fetchReplies, replies }) => {

  useEffect(() => {
    fetchReplies(thread.city_id, thread.interest_id, thread.id);
  }, []);

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
      <Post key={thread.id} post={thread} firstPost={true} />
      {replies.map(reply => <Post key={reply.id} post={reply} firstPost={false}/>)}
    </ThreadContainer>
  );
};

export default Thread;