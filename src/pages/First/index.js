import { useStoreState } from 'easy-peasy'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Redirect } from 'react-router-dom';

import StyledFirst from './style'
import spotify from '../../core/assets/spotify.png'
import store from '../../core/store'
import { sessionData } from '../../core/configs'

import Search from '../../components/Search'
import { useEffect } from 'react';

function First() {
  const { artists, tracks, episodes, error } = useStoreState((state) => state.search)

  const redirectTo = async (href) => {
    await store.persist.clear().then(() => {
      window.location.href = href;
    });
  };

  useEffect(() => {
    if (error === 401) {
      redirectTo('/invalidToken')
    }
  },[error])

  return (
    <StyledFirst>
    {!sessionData?.authenticated && <Redirect to='/invalidToken' />}
      <header>
        <FiArrowLeft />
        <FiArrowRight />
        <Search />
      </header>
      <nav>
        <span>First</span>
      </nav>
      
      <div id="page-content">

        <div id="artists">
          <ul>
          {artists && artists.map(artist => (
          <li>
            <img src={artist.images[0]?.url || spotify} alt="photoBand"/>
            {artist.name}
          </li>
          ))}
        </ul>
        </div>

        <div id="tracks">
        <p>Musicas mais Listadas</p>
          <ul>
            { tracks && tracks.map(artist => <li>{artist.name}</li>) }
          </ul>
        </div>

        <div id="episodes">
          <ul>
          {episodes && episodes.map(artist => (
          <li>
            <img src={artist.images[0]?.url || spotify} alt="photoBand"/>
            {artist.name}
          </li>
          ))}
        </ul>
        </div>

      </div>
     
      <footer>
        <span>Aqui a parte de baixo</span>
      </footer>
    </StyledFirst>
  )
}

export default First;
