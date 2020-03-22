import React from 'react';

import {
  Container,
  ProfileContainer,
  ProfileIcon,
  TextArea,
  RightContainer
} from './styles';
import ActionBar from './ActionBar';
import { useState } from 'react';
import { useMutation } from 'react-apollo';

import { CREATE_TWEET } from '../../../repository';

export default function WhatsHappening() {
  const [inputValue, setInputValue] = useState('');
  const [createTweet] = useMutation(CREATE_TWEET);

  function handleTweetButton() {
    const tweet = {
      author: sessionStorage.getItem('name'),
      user: sessionStorage.getItem('username'),
      message: inputValue
    };
    const { author, user, message } = tweet;
    createTweet({ variables: { author, user, message } });
  }
  return (
    <Container>
      <ProfileContainer>
        <ProfileIcon />
      </ProfileContainer>
      <RightContainer>
        <TextArea onBlur={e => setInputValue(e.target.value)} />
        <ActionBar handleTweetButton={() => handleTweetButton()}></ActionBar>
      </RightContainer>
    </Container>
  );
}
