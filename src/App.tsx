import { AppShell } from '@mantine/core';
import { FC } from 'react';
import { Navbar } from './components/Navbar';
import styles from './App.module.css';
import classnames from 'classnames';
import { Route, Routes } from 'react-router-dom';
import { Movies } from './components/Movies';
import { Raites } from './components/Raites';

const App: FC = () => {
  return (
    <>
      <AppShell navbar={{ width: 280, breakpoint: 'xs' }}>
        <AppShell.Navbar bg="#F2EBF9" className={classnames(styles.navbar)}>
          <Navbar />
        </AppShell.Navbar>

        <AppShell.Main bg="#F5F5F6">
          <Routes>
            <Route path="/" element={<div>Start Page</div>} />
            <Route path="movies" element={<Movies />} />
            <Route path="ratedMovies" element={<Raites />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default App;
