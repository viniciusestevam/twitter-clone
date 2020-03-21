import React from 'react';
import { useEffect } from 'react';
import { Container, Column } from './styles';

import Menu from '../../components/Menu';
import Feed from '../../components/Feed';

export default function Main() {
  useEffect(() => {
    document.title = 'Home / Twitter';
  }, []);

  return (
    <Container>
      <Column width="25%" borderRight justifyRight>
        <Menu />
      </Column>
      <Column width="50%">
        <Feed />
      </Column>
      <Column width="25%" borderLeft />
    </Container>
  );
}
