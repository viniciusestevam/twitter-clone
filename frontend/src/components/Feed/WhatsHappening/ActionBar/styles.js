import styled from 'styled-components';
import { Image } from '@styled-icons/evil/Image';
import { blue, lightBlue, darkGrey } from '../../../../global-styles';
import { Gif } from 'styled-icons/material';
import { Stats, PlusCircle } from 'styled-icons/boxicons-regular';
import { SmileBeam } from 'styled-icons/fa-regular';

export const Container = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
`;

export const LeftIconsContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightIconsContainer = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

const iconStyle = `
  color: ${blue};
  padding: 5px;
  border-radius: 50%;
  :hover {
    background-color: ${lightBlue};
    cursor: pointer;
  }
`;

export const ImageIcon = styled(Image).attrs({
  height: '40px'
})`
  ${iconStyle};
`;

export const GifIcon = styled(Gif).attrs({
  height: '40px'
})`
  ${iconStyle}
`;

export const StatsIcon = styled(Stats).attrs({
  height: '40px'
})`
  ${iconStyle}
`;

export const SmileIcon = styled(SmileBeam).attrs({
  height: '30px'
})`
  ${iconStyle}
`;

export const ButtonContainer = styled.div`
  height: 40px;
  width: 90px;
`;

export const PlusIcon = styled(PlusCircle).attrs({
  height: '40px'
})`
  ${iconStyle}
`;

export const Divider = styled.span`
  height: 30px;
  width: 1px;
  background-color: ${darkGrey};
`;

export const Circle = styled.span`
  height: 25px;
  width: 25px;
  border: 2px solid ${blue};
  border-radius: 20px;
  :hover {
    background-color: ${lightBlue};
    cursor: pointer;
  }
`;
