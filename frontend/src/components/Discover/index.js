import React, { useState } from 'react';

import {
  Container,
  SearchContainer,
  SearchIcon,
  SearchInput,
  TrendsContainer,
  TrendingTitle,
  ConfigIcons,
  TrendingTopicsContainer,
  TrendingTopic,
  Topic,
  ArrowDown,
  ShowMore
} from './styles';

export default function Discover() {
  const [trends, setTrends] = useState([
    {
      id: 1,
      name: '#GraphQL',
      tweets: '127K Tweets',
      link: 'https://www.graphql.com/'
    },
    {
      id: 1,
      name: '#NodeJs',
      tweets: '999K Tweets',
      link: 'https://nodejs.org/en/'
    },
    {
      id: 1,
      name: '#React',
      tweets: '378K Tweets',
      link: 'https://reactjs.org/'
    },
    {
      id: 1,
      name: '#linkedin.com/in/viniciusestevam1',
      tweets: '31K Tweets',
      link: 'https://linkedin.com/in/vinicius-estevam1'
    },
    {
      id: 1,
      name: '#github.com/estevam31',
      tweets: '31K Tweets',
      link: 'https://github.com/estevam31'
    }
  ]);

  return (
    <Container>
      <SearchContainer>
        <SearchIcon />
        <SearchInput value="Search Twitter" />
      </SearchContainer>
      <TrendsContainer>
        <TrendingTitle>
          Trends for you <ConfigIcons />
        </TrendingTitle>
        <TrendingTopicsContainer>
          {trends.map(t => (
            <TrendingTopic key={t.id}>
              <Topic>
                <a href={t.link} target="blank">
                  {t.name}
                </a>
                <span>{t.tweets}</span>
              </Topic>
              <ArrowDown />
            </TrendingTopic>
          ))}
        </TrendingTopicsContainer>
        <ShowMore>
          <span>Show more</span>
        </ShowMore>
      </TrendsContainer>
    </Container>
  );
}
