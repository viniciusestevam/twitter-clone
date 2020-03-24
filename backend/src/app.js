import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import express from 'express';
import cors from 'cors';

import resolvers from './tweets/resolvers';
import typeDefs from './tweets/typedefs';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

app.use(cors());
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

export default httpServer;
