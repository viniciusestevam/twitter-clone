import mongoose from 'mongoose';

const TweetSchema = new mongoose.Schema(
  {
    author: String,
    user: String,
    message: String
  },
  { timestamps: true }
);

export default mongoose.model('Tweet', TweetSchema);
