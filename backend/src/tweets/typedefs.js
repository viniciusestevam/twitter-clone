import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    tweets: [Tweet!]!
  }

  type Subscription {
    newTweet: Tweet
  }

  type Mutation {
    createTweet(
      author: String!
      user: String!
      time: Date!
      message: String!
    ): Tweet!
  }

  type Tweet {
    id: ID!
    author: String!
    user: String!
    time: Date!
    message: String!
  }
`;
