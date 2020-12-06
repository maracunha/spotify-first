import { useStoreState } from 'easy-peasy'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import StyledFirst from './style'
import spotify from '../../core/assets/spotify.png'

import Search from '../../components/Search'

function First() {
  const { data } = useStoreState((state) => state.search)

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
        <ul>
        {data && data.map(artist => (
        <li>
          <img src={artist.images[0]?.url || spotify} alt="photoBand"/>
          {artist.name}
        </li>
        ))}
      </ul>
      </div>
     
      <footer>
        <span>Aqui a parte de baixo</span>
      </footer>
    </StyledFirst>
  )
}

export default First;
