import { FC } from 'react';
import { Route } from 'react-router';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

const theme = createTheme();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/fetch-data" component={FetchData} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
