import React from 'react';

import {
  Container,
  ProfileContainer,
  ProfileIcon,
  TextArea,
  RightContainer
} from './styles';
import ActionBar from './ActionBar';

export default function WhatsHappening() {
  return (
    <Container>
      <ProfileContainer>
        <ProfileIcon />
      </ProfileContainer>
      <RightContainer>
        <TextArea />
        <ActionBar></ActionBar>
      </RightContainer>
    </Container>
  );
}
