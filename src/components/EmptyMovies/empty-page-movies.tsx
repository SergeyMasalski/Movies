import { FC } from 'react';
import img from '../../assets/noFilms.svg';
import styles from './styles.module.css';
import { Image, Text } from '@mantine/core';
import classNames from 'classnames';

type Props = {};

export const EmptyPageMovies: FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <Image w={320} h="auto" src={img} />
      <Text fw={600}>We don't have such movies, look for another one</Text>
    </div>
  );
};
