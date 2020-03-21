import httpServer from './app';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('[DB] => Connected');
    httpServer.listen({ port: 8000 }, () => {
      console.log('[SERVER] => Apollo Server on http://localhost:8000/graphql');
    });
  });
