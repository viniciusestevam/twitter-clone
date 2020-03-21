import styled from 'styled-components';
import { Twitter } from 'styled-icons/boxicons-logos';
import { HomeCircle, UserCircle } from 'styled-icons/boxicons-solid';

import { blue, lightBlue, darkBlue } from '../../global-styles';
import { Hash, Bookmark } from 'styled-icons/boxicons-regular';
import { NotificationsNone, ListAlt } from 'styled-icons/material';
import { EmailOutline } from 'styled-icons/evaicons-outline';
import { Ellipsis } from 'styled-icons/octicons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  height: 100%;
  width: 250px;
  font-weight: bold;
  font-size: 20px;
`;

export const MenuItemContainer = styled.span`
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.span`
  padding-right: 20px;
  :hover {
    color: ${blue};
    background-color: ${lightBlue};
    cursor: pointer;
    border-radius: 25px;
  }
`;

export const ActiveMenuItem = styled.span`
  padding-right: 20px;
  color: ${blue};
  background-color: ${lightBlue};
  cursor: pointer;
  border-radius: 25px;
`;

export const TwitterIcon = styled(Twitter).attrs({
  height: '55px'
})`
  color: ${blue};
  padding: 10px;
  align-self: flex-start;
  :hover {
    background-color: ${lightBlue};
    cursor: pointer;
    border-radius: 50%;
  }
`;

const iconPadMg = `
padding: 10px;
margin-right: 5px;
`;

export const HomeIcon = styled(HomeCircle).attrs({
  height: '50px'
})`
  ${iconPadMg}
`;

export const HashIcon = styled(Hash).attrs({
  height: '50px'
})`
  ${iconPadMg}
`;

export const NotificationIcon = styled(NotificationsNone).attrs({
  height: '50px'
})`
  ${iconPadMg}
`;

export const MessagesIcon = styled(EmailOutline).attrs({
  height: '50px'
})`
  ${iconPadMg}
`;

export const BookmarksIcon = styled(Bookmark).attrs({
  height: '50px'
})`
  ${iconPadMg}
`;

export const ListIcon = styled(ListAlt).attrs({
  height: '50px'
})`
  ${iconPadMg}
`;

export const ProfileIcon = styled(UserCircle).attrs({
  height: '50px'
})`
  ${iconPadMg}
`;

export const MoreIcon = styled(Ellipsis).attrs({
  height: '50px'
})`
  ${iconPadMg}
`;

export const TweetButton = styled.div`
  height: 55px;
  cursor: pointer;
  width: 100%;
  border-radius: 50px;
  background-color: ${blue};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  :hover {
    background-color: ${darkBlue};
  }
`;
