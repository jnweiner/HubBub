import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../CommonStyles.js';

const AccountSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid black;
`;

const AccountSettings = ({ userInfo }) => (
  <AccountSettingsContainer>
    <PageTitle>Account Settings</PageTitle>
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