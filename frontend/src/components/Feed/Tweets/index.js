import React, { useState } from 'react';

import {
  Container,
  Tweet,
  ProfileContainer,
  ProfileIcon,
  RightContainer,
  Header,
  UserData,
  TweetData,
  TweetAuthor,
  ArrowDown,
  Content,
  Actions,
  Answer,
  Retweet,
  Like,
  Export,
  Stats
} from './styles';

export default function Tweets() {
  const [tweets, setTweets] = useState([
    { id: 1, author: 'teste', user: '@teste', time: '3h', message: 'teste' },
    { id: 2, author: 'teste', user: '@teste', time: '3h', message: 'teste' },
    { id: 3, author: 'teste', user: '@teste', time: '3h', message: 'teste' },
    { id: 4, author: 'teste', user: '@teste', time: '3h', message: 'teste' },
    { id: 5, author: 'teste', user: '@teste', time: '3h', message: 'teste' },
    { id: 6, author: 'teste', user: '@teste', time: '3h', message: 'teste' },
    { id: 7, author: 'teste', user: '@teste', time: '3h', message: 'teste' },
    { id: 8, author: 'teste', user: '@teste', time: '3h', message: 'teste' },
    { id: 9, author: 'teste', user: '@teste', time: '3h', message: 'teste' },
    { id: 10, author: 'teste', user: '@teste', time: '3h', message: 'teste' }
  ]);
  return (
    <Container>
      {tweets.map(t => (
        <Tweet key={t.id}>
          <ProfileContainer>
            <ProfileIcon />
          </ProfileContainer>
          <RightContainer>
            <Header>
              <UserData>
                <TweetAuthor>{t.author}</TweetAuthor>
                <TweetData>{t.user}</TweetData>
                <TweetData>· {t.time}</TweetData>
              </UserData>
              <ArrowDown />
            </Header>
            <Content>
              <span>{t.message}</span>
            </Content>
            <Actions>
              <Answer />
              <Retweet />
              <Like />
              <Export />
              <Stats />
            </Actions>
          </RightContainer>
        </Tweet>
      ))}
    </Container>
  );
}
