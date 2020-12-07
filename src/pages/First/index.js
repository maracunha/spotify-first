import { useStoreState } from 'easy-peasy'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import StyledFirst from './style'
import spotify from '../../core/assets/spotify.png'

import Search from '../../components/Search'

function First() {
  const { artists, tracks, episodes } = useStoreState((state) => state.search)

  return (
    <StyledFirst>
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
