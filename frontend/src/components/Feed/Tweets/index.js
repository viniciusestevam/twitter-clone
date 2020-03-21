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

import ReactTimeAgo from 'react-time-ago';

export default function Tweets() {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      author: 'julinho mequetrefe',
      user: '@teste',
      time: new Date(Date.now()),
      message: 'teste'
    }
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
                <TweetData>
                  · <ReactTimeAgo date={t.time} locale="en" />
                </TweetData>
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
