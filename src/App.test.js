import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './core/store';
import App from './App';

test('renders login no Spotify', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Faça login no Spotify/i)).toBeInTheDocument();
});
