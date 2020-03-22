import React from 'react';

import { Container } from './styles';

export default function TweetButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <strong>Tweet</strong>
    </Container>
  );
}
