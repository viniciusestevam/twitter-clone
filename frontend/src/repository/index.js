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

export const CREATE_TWEET = gql`
  mutation createTweet($author: String!, $user: String!, $message: String!) {
    createTweet(author: $author, user: $user, message: $message) {
      id
    }
  }
`;
