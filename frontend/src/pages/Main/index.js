import React from 'react';

import Menu from '../../components/Menu';
import { Container, Column } from './styles';

export default function Main() {
  return (
    <Container>
      <Column width="25%" borderRight justifyRight>
        <Menu />
      </Column>
      <Column width="50%" />
      <Column width="25%" borderLeft />
    </Container>
  );
}
