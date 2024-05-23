import { FC } from 'react';
import { EmptyPageMovies } from '../EmptyMovies';
import { Container } from '@mantine/core';
import { SearchParams } from '../SearchParams';

type Props = {};

export const Movies: FC<Props> = ({}) => {
  return (
    <Container p={0}>
      <SearchParams />
      <EmptyPageMovies />
    </Container>
  );
};
