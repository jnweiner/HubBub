import React, { useEffect } from 'react';
import styled from 'styled-components';

const ThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThreadTable = styled.table`
  width: 80vw;
  border-collapse: collapse;
  border: 1px solid black;
`;

const ThreadTitle = styled.span`
  background-color: rgba(41, 64, 89, .3);
  padding: 10px;
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
  width: 80vw;
`;

// abstract out post styling 
// add background color for just the first post
// change away from table to just flexbox for greater flexibility (pun intended)

const UserCell = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #2d4059;
  width: 180px;
  padding: 5px;
  background-color: rgba(41, 64, 89, .1);
`;

const UserAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const TextCell = styled.td`
  padding: 5px;
  background-color: rgba(41, 64, 89, .1);
`;

const Timestamp = styled.div`
  text-align: right;
`;

const Thread = ({ thread }) => {

  // useEffect to retrieve all replies for thread

  return (
    <ThreadContainer>
      <ThreadTitle>{thread.title}</ThreadTitle>
    <ThreadTable>
      <tbody>
        <tr>
          <UserCell>
            <UserAvatar src={thread.avatar} alt="User Avatar"/>
            <strong>{thread.username}</strong>
            <span><i className="fas fa-map-pin"></i> {thread.neighborhood}</span>
            <span>Local Since: {thread.month_moved}/{thread.year_moved}</span>
          </UserCell>
          <TextCell>
            <Timestamp><em>{thread.date}</em></Timestamp>
            <br />
            <span>{thread.text}</span>
          </TextCell>
        </tr>
      </tbody>
    </ThreadTable>
    </ThreadContainer>

  );
};

export default Thread;