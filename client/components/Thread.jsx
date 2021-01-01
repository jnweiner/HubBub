import React, { useEffect } from 'react';
import styled from 'styled-components';
import Post from './Post.jsx';
import ForumButton from './ForumButton.jsx';
import HoverText from './HoverText.jsx';

const ThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ThreadHeader = styled.span`
  border-top: 1px solid #2d4059;
  border-bottom: 1px solid #2d4059;
  padding: 10px 0;
  font-size: 20px;
  margin: 20px 0;
  width: 99%;
`;

const InterestName = styled.span`
  font-weight: 600;
  font-size: 25px;
`;

const OptionsContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  width: 99%;
`;

{/* <InterestName onClick={() => changeView({type: 'interestHub', name: thread.interest, id: thread.interest_id})}>
{thread.interest} </InterestName> */}

const Thread = ({ thread, changeView, fetchReplies, replies, toggleModal, userId }) => {

  useEffect(() => {
    fetchReplies(thread.city_id, thread.interest_id, thread.id);
  }, []);

  return (
    <ThreadContainer>
      <ThreadHeader>
        <InterestName onClick={() => changeView({type: 'interestHub', name: thread.interest, id: thread.interest_id})}>
          <HoverText
            text={`${thread.interest} `}
            regColor="#2d4059"
            hoveredColor="#e1ad01"
          />
        </InterestName>
        <i className="fas fa-long-arrow-alt-right"></i>
        <em> {thread.title}</em>
      </ThreadHeader>
      <OptionsContainer>
        <ForumButton content={<span>Watch <i className="fas fa-eye"></i></span>} />
        <ForumButton
          onClickFunction={() => toggleModal('newReply')}
          content={<span>Reply <i className="fas fa-reply"></i></span>}
        />
      </OptionsContainer>
      <Post key={thread.id} post={thread} firstPost={true} userId={userId} />
      {replies.map(reply => <Post key={reply.id} post={reply} firstPost={false} userId={userId}/>)}
    </ThreadContainer>
  );
};

export default Thread;