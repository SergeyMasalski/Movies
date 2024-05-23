import { Flex, Group, Image, Tabs, Text } from '@mantine/core';
import { FC } from 'react';
import icon from '../../assets/iconApp.svg';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

type Props = {};

export const Navbar: FC<Props> = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <Flex direction={'column'} gap={24}>
        <Group gap={12}>
          <Image src={icon} />
          <Text c="#9854F6" size="24px" fw={'bolder'}>
            ArrowFlicks
          </Text>
        </Group>

        <Tabs color="#E5D5FA" variant="pills" orientation="vertical">
          <Tabs.List className={classNames(styles.tabs)}>
            <Tabs.Tab
              value="movies"
              className={classNames(styles.tab)}
              onClick={() => {
                navigate('/movies');
              }}
            >
              Movies
            </Tabs.Tab>
            <Tabs.Tab
              value="ratedMovies"
              className={classNames(styles.tab)}
              onClick={() => {
                navigate('/ratedMovies');
              }}
            >
              Rated movies
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Flex>
    </>
  );
};
