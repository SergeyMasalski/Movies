import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
