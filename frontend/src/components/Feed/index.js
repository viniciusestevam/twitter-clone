import React from 'react';

import { Container } from './styles';
import Header from './Header';
import WhatsHappening from './WhatsHappening';
import Tweets from './Tweets';

export default function Feed() {
  return (
    <Container>
      <Header />
      <WhatsHappening />
      <Tweets />
    </Container>
  );
}
