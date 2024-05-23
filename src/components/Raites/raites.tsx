import { Container } from '@mantine/core';
import { FC } from 'react';
import { EmptyRaites } from '../EmptyRaites';

type Props = {};

export const Raites: FC<Props> = ({}) => {
  return (
    <Container p={0}>
      <EmptyRaites />
    </Container>
  );
};
