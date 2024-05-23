import { FC } from 'react';
import styles from './styles.module.css';
import downIcon from '../../assets/down.svg';
import { Container, Group, InputWrapper, Select, Image, Title, Flex, Button } from '@mantine/core';
import classNames from 'classnames';

type Props = {};

export const SearchParams: FC<Props> = ({}) => {
  const icon = <Image src={downIcon} w={24} h="auto" />;

  return (
    <Container p={24} className={classNames(styles.root)}>
      <Title size={32} fw="bold">
        Movies
      </Title>
      <Group>
        <InputWrapper label="Genres" styles={{ label: { fontWeight: 600 } }}>
          <Select placeholder="Select genre" rightSection={icon} />
        </InputWrapper>

        <InputWrapper label="Release year" styles={{ label: { fontWeight: 600 } }}>
          <Select placeholder="Select release year" rightSection={icon} />
        </InputWrapper>

        <InputWrapper label="Release year" styles={{ label: { fontWeight: 600 } }}>
          <Flex align={'flex-end'} gap={8}>
            <Select w={138} placeholder="From" />
            <Select w={138} placeholder="To" />
          </Flex>
        </InputWrapper>
        <Button variant="transparent" c={'#7B7C88'} p={0} mt="auto" fw={'normal'}>
          Reset filters
        </Button>
      </Group>

      <Group>
        <InputWrapper ml="auto" label="Sort by" styles={{ label: { fontWeight: 600 } }}>
          <Select placeholder="Select release year" rightSection={icon} />
        </InputWrapper>
      </Group>
    </Container>
  );
};
