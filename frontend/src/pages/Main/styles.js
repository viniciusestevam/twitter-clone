import styled from 'styled-components';

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
  justify-content: ${props => (props.justifyRight ? 'flex-end' : 'flex-start')};
`;
