import styled from 'styled-components';
import {
  grey,
  darkGrey,
  lightGrey,
  blue,
  lightBlue
} from '../../global-styles';
import { Search, Cog, ChevronDown } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 10px;
  padding-left: 30px;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  width: 300px;
  height: 40px;
  background-color: ${grey};
  border-radius: 40px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(Search).attrs({
  height: '20px'
})`
  color: ${darkGrey};
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  color: ${darkGrey};
`;

export const TrendsContainer = styled.div`
  width: 300px;
  height: 500px;
  margin-top: 20px;
  background-color: ${lightGrey};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const TrendingTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  height: 50px;
  width: 100%;
  background: none;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid ${grey};
  justify-content: space-between;
`;

export const ConfigIcons = styled(Cog).attrs({
  height: '35px'
})`
  color: ${blue};
  padding: 5px;
  margin-right: 20px;
  :hover {
    background-color: ${lightBlue};
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const TrendingTopicsContainer = styled.div`
  width: 100%;
`;

export const TrendingTopic = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${grey};
  display: flex;
`;

export const Topic = styled.span`
  width: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-self: center;
  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  span {
    color: ${darkGrey};
  }
`;

export const ArrowDown = styled(ChevronDown).attrs({
  height: '35px'
})`
  color: ${darkGrey};
  padding: 5px;
  border-radius: 50%;
  margin-right: 20px;
  :hover {
    background-color: ${lightBlue};
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const ShowMore = styled.div`
  color: ${blue};
  display: flex;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  height: 50px;
  align-items: center;
  padding-left: 20px;
`;
