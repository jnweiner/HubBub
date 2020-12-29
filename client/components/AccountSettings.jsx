import React from 'react';
import styled from 'styled-components';

const AccountSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccountSettingsTitle = styled.div`
  border-top: 1px solid #2d4059;
  border-bottom: 1px solid #2d4059;
  padding: 10px;
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
  width: 80vw;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid black;
`;

const AccountSettings = ({ userInfo }) => (
  <AccountSettingsContainer>
    <AccountSettingsTitle>Account Settings</AccountSettingsTitle>
    <Avatar src={userInfo.avatar} alt="User Avatar"/>
    <br />
    <span><strong>Username: </strong>{userInfo.username}</span>
    <br />
    <span><strong>First Name: </strong>{userInfo.first_name}</span>
    <span><strong>Last Name: </strong>{userInfo.last_name}</span>
    <span><strong>Email Address: </strong>{userInfo.email}</span>
    <br />
    <span><strong>{userInfo.city} Resident Since: </strong>{userInfo.month_moved}/{userInfo.year_moved}</span>
    <span><strong>Neighborhood: </strong>{userInfo.neighborhood}</span>
    <span><strong>Age Group: </strong>{userInfo.age_group}</span>
  </AccountSettingsContainer>
);

export default AccountSettings;