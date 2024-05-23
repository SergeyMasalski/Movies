import { Button, Container, Flex, Image, Text } from '@mantine/core';
import { FC } from 'react';
import img from '../../assets/noRaitings.svg';

type Props = {};

export const EmptyRaites: FC<Props> = ({}) => {
  return (
    <Container p={0}>
      <Flex direction={'column'} gap={16} align={'center'} mih="100vh" justify={'center'}>
        <Image src={img} w={400} h="auto" />
        <Text fw={600}>You haven't rated any films yet</Text>
        <Button color="#9854F6">Find movies</Button>
      </Flex>
    </Container>
  );
};
