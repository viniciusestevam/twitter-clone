import styled from 'styled-components';
import { grey } from '../../global-styles';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const Column = styled.div`
  display: flex;
  height: 100%;
  width: ${props => props.width};
  background-color: ${props => props.color};
  border-left: ${props => (props.borderLeft ? `1px solid ${grey}` : '')};
  border-right: ${props => (props.borderRight ? `1px solid ${grey}` : '')};
  justify-content: ${props => (props.justifyRight ? 'flex-end' : 'flex-start')};
`;
