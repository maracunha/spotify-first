import { action, createStore, thunk, persist } from 'easy-peasy';
import { client } from './api';
// import data from '../mocks/search'

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
    error: null,
    artists: null,
    tracks: null,
    episodes: null,
    setLoading: action((state, loading) => {
      state.loading = loading;
    }),
    setError: action((state, error) => {
      state.error = error;
    }),
    setArtists: action((state, artists) => {
      state.artists = artists;
    }),
    setTracks: action((state, tracks) => {
      state.tracks = tracks;
    }),
    setEpisodes: action((state, episodes) => {
      state.episodes = episodes;
    }),
    searchArtist: thunk(async (actions, payload) => {
      actions.setLoading(true);
      try {
        const response = await client.get(`/search?q=${payload}&type=artist,track,episode`);
        actions.setArtists(response.artists.items)
        actions.setTracks(response.tracks.items)
        actions.setEpisodes(response.episodes.items)
      } catch ({ error }) {
        actions.setError(error.status)
        console.error(error.message);
      }
      actions.setLoading(false);
    })
  }
});

export default store;
