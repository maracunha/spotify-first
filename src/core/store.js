import { action, createStore, thunk, persist } from 'easy-peasy';
import { client } from './api';

const store = createStore({
  auth: persist({
    authLoading: false,
    spotifyAuthToken: '',
    authenticated: false,
    setToken: action((state, payload) => {
      state.spotifyAuthToken = payload;
      state.authenticated = true;
      state.authLoading = true;
    },
    {
      allow: ['spotifyAuthToken', 'authenticated']
    }),
  }),
  search: {
    loading: false,
    error: '',
    data: null,
    setLoading: action((state, loading) => {
      state.loading = loading;
    }),
    setError: action((state, error) => {
      state.error = error;
    }),
    setData: action((state, data) => {
      state.data = data;
    }),
    searchArtist: thunk(async (actions, payload) => {
      actions.setLoading(true);
      try {
        const response = await client.get(`/search?q=${payload}&type=artist,track,episode`);
        actions.setData(response.artists.items)
      } catch ({ error }) {
        console.log(error.message);
      }
      actions.setLoading(false);
    })
  }
});

export default store;
