import React from 'react';
import { Query } from 'react-apollo';

import { Container } from './styles';
import Header from './Header';
import WhatsHappening from './WhatsHappening';
import Tweets from './Tweets';

import { GET_TWEETS, NEW_TWEET } from '../../repository';

export default function Feed() {
  return (
    <Container>
      <Header />
      <WhatsHappening />
      <Query query={GET_TWEETS}>
        {({ data, loading, subscribeToMore }) => {
          if (!data) return null;
          if (loading) return <span>Loading...</span>;
          subscribeToMore({
            document: NEW_TWEET,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const { newTweet } = subscriptionData.data;
              if (prev.tweets.find(t => t.id === newTweet.id)) {
                return prev;
              }
              return {
                ...prev,
                tweets: [newTweet, ...prev.tweets]
              };
            }
          });
          return <Tweets tweets={data.tweets}></Tweets>;
        }}
      </Query>
      <Tweets />
    </Container>
  );
}
