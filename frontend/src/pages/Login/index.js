import React from 'react';

import {
  Container,
  LoginContainer,
  TwitterLogo,
  InputContainer,
  Input,
  UserIcon,
  AtIcon,
  LoginButton
} from './styles';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Login({ history }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const nameLabel = 'Name';
  const usernameLabel = 'Username';

  useEffect(() => {
    document.title = 'Twitter';
  }, []);

  function handleButtonClick() {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('name', name);
    if (sessionStorage.getItem('username') && sessionStorage.getItem('name')) {
      history.push('/');
    }
  }

  return (
    <Container>
      <LoginContainer>
        <TwitterLogo />
        <InputContainer>
          <UserIcon />
          <Input
            value={name}
            placeholder={nameLabel}
            onChange={e => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <AtIcon />
          <Input
            value={username}
            placeholder={usernameLabel}
            onChange={e => setUsername(e.target.value)}
          />
        </InputContainer>
        <LoginButton onClick={() => handleButtonClick()}>Sign in</LoginButton>
      </LoginContainer>
    </Container>
  );
}
