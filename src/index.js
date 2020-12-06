import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './core/store';
import { StoreProvider } from 'easy-peasy';
import * as serviceWorker from './serviceWorker';

import GlobalStyle from './core/theme/GlobalStyle'
import { ThemeProvider, theme } from './core/theme'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
