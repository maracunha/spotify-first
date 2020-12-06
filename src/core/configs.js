const client_id = process.env.REACT_APP_CLIENT_ID;
const redirect_uri = 'http://localhost:3000';
const authEndpoint = 'https://accounts.spotify.com/authorize';

export const baseURL = 'https://api.spotify.com/v1';
export const authorization = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token`;

export const sessionData = JSON.parse(sessionStorage.getItem('[EasyPeasyStore][0][auth]'))?.data;
