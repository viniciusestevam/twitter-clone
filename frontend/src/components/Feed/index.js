import React from 'react';

import { Container } from './styles';
import Header from './Header';
import WhatsHappening from './WhatsHappening';

export default function Feed() {
  return (
    <Container>
      <Header />
      <WhatsHappening />
    </Container>
  );
}
