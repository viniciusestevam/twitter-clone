import React from 'react';

import {
  Container,
  MenuItemContainer,
  MenuItem,
  ActiveMenuItem,
  TwitterIcon,
  HomeIcon,
  HashIcon,
  NotificationIcon,
  MessagesIcon,
  BookmarksIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon
} from './styles';

import TweetButton from '../TweetButton';

export default function Menu() {
  return (
    <Container>
      <MenuItemContainer>
        <TwitterIcon></TwitterIcon>
      </MenuItemContainer>
      <MenuItemContainer>
        <ActiveMenuItem>
          <HomeIcon />
          <span>Home</span>
        </ActiveMenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem>
          <HashIcon />
          <span>Explore</span>
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem>
          <NotificationIcon />
          <span>Notifications</span>
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem>
          <MessagesIcon />
          <span>Messages</span>
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem>
          <BookmarksIcon />
          <span>Bookmarks</span>
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem>
          <ListIcon />
          <span>Lists</span>
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem>
          <ProfileIcon />
          <span>Profile</span>
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem>
          <MoreIcon />
          <span>More</span>
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem height="50px" dontHover>
          <TweetButton />
        </MenuItem>
      </MenuItemContainer>
    </Container>
  );
}
