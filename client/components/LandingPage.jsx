import React, { useState } from 'react';
import styled from 'styled-components';
import HoverText from './HoverText.jsx';
import ModalButton from './Modal/ModalButton.jsx';

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 35%;
  height: 45%;
  background-color: #294059;
  color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px gray;
  overflow: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  height: 50%;
  width: 50%;
  padding: 10px 0;
`;

const InvalidSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #ea5455;
  padding: 10px;
  align-self: center;
`;

const StyledInput = styled.input`
  font-family: 'Krub', sans-serif;
  margin-left: 5px;
  border: ${props => props.showRequired ? '1px solid #ea5455' : null}
`;

const LoginButton = styled.button`
  background-color: #e1ad01;
  border: 1px solid #e1ad01;
  border-radius: 5px;
  font-weight: 600;
  font-size: 15px;
  width: 100%;
`;

const NewAccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  border-top: 1px solid #f5f5f5;
`;

const NewAccountButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  font-weight: 600;
  font-size: 15px;
  width: 50%;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  margin-bottom: 10px;
`;

const LargeLogo = styled.span`
  font-size: 50px;
  color: #e1ad01;
`;

const LandingPage = ({ validateUser }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);

  const handleUsernameChange = ({ target }) => {
    setUsername(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      validateUser(username, () => {
        setInvalid(true);
      });
      setUsername('');
      setPassword('');
  };

  return (
    <LoginFormContainer>
      <LogoContainer>
        <LargeLogo><i className="fas fa-city"></i>HubBub</LargeLogo>
        {invalid ? <InvalidSpan>Invalid Username</InvalidSpan> : null}
      </LogoContainer>
      <StyledForm>
        <span>Username:
          <StyledInput
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </span>
        <span>Password:
        <StyledInput
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
         </span>
         <LoginButton onClick={handleSubmit}>
          <HoverText 
            text="Log In"
            regColor="#294059"
            hoveredColor="#f5f5f5"
          />
        </LoginButton>
      </StyledForm>
      <NewAccountContainer>
        <NewAccountButton>
          <HoverText 
            text="Create New Account"
            regColor="#294059"
            hoveredColor="#e1ad01"
          />
        </NewAccountButton>
      </NewAccountContainer>
    </LoginFormContainer>
  )

};


export default LandingPage;