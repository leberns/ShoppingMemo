import React, { Component, StrictMode } from 'react';
import { Route } from 'react-router';
import { Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, orange } from "@mui/material/colors";

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

const theme = createTheme();

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          <Layout>
              <Route exact path="/" component={Home} />
              <Route exact path="/counter" component={Counter} />
              <Route exact path="/fetch-data" component={FetchData} />
          </Layout>
        </ThemeProvider>
      </StrictMode>
    );
  }
}
