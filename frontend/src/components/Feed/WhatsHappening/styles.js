import styled from 'styled-components';
import { darkGrey, grey } from '../../../global-styles';
import { UserCircle } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #fff;
  display: flex;
  border-left: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

export const ProfileContainer = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
`;

export const ProfileIcon = styled(UserCircle).attrs({
  height: '70px'
})`
  color: ${darkGrey};
  padding: 10px;
  margin: 20px 0px;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 60%;
  padding: 20px 10px;
  border: none;
  font-size: 20px;
  overflow: hidden;
  resize: none;
`;
