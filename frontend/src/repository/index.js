import gql from 'graphql-tag';

export const GET_TWEETS = gql`
  query {
    tweets {
      id
      author
      user
      message
      createdAt
    }
  }
`;

export const NEW_TWEET = gql`
  subscription {
    newTweet {
      id
      author
      user
      message
      createdAt
    }
  }
`;
