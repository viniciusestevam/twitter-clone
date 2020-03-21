import styled from 'styled-components';
import { blue, grey, darkGrey, darkBlue } from '../../global-styles';
import { Twitter } from 'styled-icons/boxicons-logos';
import { User, At } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TwitterLogo = styled(Twitter).attrs({
  height: '100px'
})`
  color: ${blue};
  margin-bottom: 50px;
`;

export const InputContainer = styled.div`
  width: 300px;
  height: 40px;
  background-color: ${grey};
  border-radius: 40px;
  padding: 0px 10px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  ::placeholder {
    color: ${darkGrey};
  }
`;

export const UserIcon = styled(User).attrs({
  height: '20px'
})`
  color: ${darkGrey};
  margin-right: 10px;
`;

export const AtIcon = styled(At).attrs({
  height: '20px'
})`
  color: ${darkGrey};
  margin-right: 10px;
`;

export const LoginButton = styled.button`
  width: 320px;
  height: 50px;
  background-color: ${blue};
  border: none;
  border-radius: 40px;
  margin-top: 20px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  :hover {
    background-color: ${darkBlue};
  }
`;
