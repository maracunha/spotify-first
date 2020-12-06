import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

import StyledMain from './style'
import spotifyLogo from '../../core/assets/spotify.png'

import { authorization, sessionData } from '../../core/configs'

function Main() {
  const { setToken } = useStoreActions((actions) => actions.auth)

  const getHashParams = () => {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  
  useEffect(() => {
    const params = getHashParams();
    const access_token = params.access_token;
    if (!access_token) return null
    setToken(access_token);
    if (access_token) window.location.reload();
  },[setToken])

  return (
    <StyledMain>
      {sessionData?.authenticated && <Redirect to='/first' />}
      <h1>Esse é o top mega master</h1>
      <img src={spotifyLogo} alt="logo"/>
      {/* coloque-o no rodapé do seu site, blog ou newsletter ou na seção de créditos. */}
      {/* <div>Ícones feitos por <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div> */}
      <a className="link" href={authorization}>Faça login no Spotify</a>
    </StyledMain>
  );
}

export default Main;
