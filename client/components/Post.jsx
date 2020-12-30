import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  border: 1px solid #2d4059;
  background-color: ${props => props.firstPost ? 'rgba(41, 64, 89, .1)' : '#f5f5f5'};
  width: 80vw;
`;

const UserCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #2d4059;
  width: 15%;
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
  justify-content: space-around;
  padding: 5px;
  width: 85%;
`;

const Timestamp = styled.div`
  text-align: right;
  font-weight: 600;
`;

const Post = ({ post, firstPost }) => (
  <PostContainer firstPost={firstPost}>
    <UserCell>
      <UserAvatar src={post.avatar} alt="User Avatar"/>
      <strong>{post.username}</strong>
      <span><i className="fas fa-map-pin"></i> {post.neighborhood}</span>
      <span>Local Since: {post.month_moved}/{post.year_moved}</span>
    </UserCell>
    <TextCell>
      <Timestamp><em>{post.date}</em></Timestamp>
      <span>{post.text}</span>
    </TextCell>
  </PostContainer>
);

export default Post;