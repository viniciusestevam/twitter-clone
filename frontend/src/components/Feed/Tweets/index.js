import React from 'react';

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

export default function Tweets({ tweets }) {
  return (
    <Container>
      {tweets &&
        tweets.map(tweet => (
          <Tweet key={tweet.id}>
            <ProfileContainer>
              <ProfileIcon />
            </ProfileContainer>
            <RightContainer>
              <Header>
                <UserData>
                  <TweetAuthor>{tweet.author}</TweetAuthor>
                  <TweetData>{tweet.user}</TweetData>
                  <TweetData>
                    ·{' '}
                    <ReactTimeAgo date={Number(tweet.createdAt)} locale="en" />
                  </TweetData>
                </UserData>
                <ArrowDown />
              </Header>
              <Content>
                <span>{tweet.message}</span>
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
