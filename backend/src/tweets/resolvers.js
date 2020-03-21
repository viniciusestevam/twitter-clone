import Tweet from './model/Tweet';
import { PubSub } from 'apollo-server';

const pubsub = new PubSub();
const MESSAGE_CREATED = 'MESSAGE_CREATED';

export default {
  Query: {
    tweets: () => {
      return Tweet.find();
    }
  },
  Subscription: {
    newTweet: {
      subscribe: () => pubsub.asyncIterator(MESSAGE_CREATED)
    }
  },
  Mutation: {
    createTweet: async (_, args) => {
      const tweet = await Tweet.create({ ...args });
      pubsub.publish(MESSAGE_CREATED, { ...args });
      return tweet;
    }
  }
};
