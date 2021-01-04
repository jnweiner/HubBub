import React from 'react';
import styled from 'styled-components';
import ForumButton from './ForumButton.jsx';

const PostContainer = styled.div`
  display: flex;
  border: 1px solid #2d4059;
  background-color: ${props => props.firstPost ? 'rgba(41, 64, 89, .1)' : '#f5f5f5'};
  width: 99%;
`;

const UserCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-right: 1px solid #2d4059;
  width: 15%;
  overflow: auto;
  padding: 5px;
`;

const UserAvatar = styled.img`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  border-radius: 50%;
`;

const TextCell = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 85%;
  overflow: auto;
`;

const Timestamp = styled.span`
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Text = styled.span`
  height: 80%;
`;

const OptionsContainer = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const Post = ({ post, firstPost, userId }) => (
  <PostContainer firstPost={firstPost}>
    <UserCell>
      <UserAvatar src={post.avatar} alt="User Avatar"/>
      <strong>{post.username}</strong>
      <span><i className="fas fa-map-pin"></i> {post.neighborhood}</span>
      <span>Local Since: {post.month_moved}/{post.year_moved}</span>
    </UserCell>
    <TextCell>
      <Timestamp><em>{post.date.slice(0, 10)}</em></Timestamp>
      <Text>{post.text}</Text>
      {post.user_id === userId ?
        <OptionsContainer>
          <ForumButton content={(<i className="fas fa-pencil-alt"></i>)}/>
          <ForumButton content={( <i className="fas fa-trash-alt"></i>)}/>
        </OptionsContainer>
      : null}
    </TextCell>
  </PostContainer>
);

export default Post;