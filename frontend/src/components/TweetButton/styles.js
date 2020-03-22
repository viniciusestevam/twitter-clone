import styled from 'styled-components';
import { blue, darkBlue } from '../../global-styles';

export const Container = styled.button`
  height: 100%;
  border: none;
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
    background-color: ${props => (props.dontHover ? '' : darkBlue)};
  }
`;
