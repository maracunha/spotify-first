import { useStoreActions } from 'easy-peasy'
import { useState } from 'react'
import StyledForm from './style'

function Search() {
  const [search, setSearch] = useState('')  
  const { searchArtist } = useStoreActions((actions) => actions.search)

  const handleSubmit = (event) => {
    event.preventDefault()
    searchArtist(search)
    setSearch('')
  }
  
return (
  <StyledForm onSubmit={handleSubmit}>
    <input 
      type="text"
      value={search}
      placeholder="Enter Artist Name" 
      onChange={(e) => setSearch(e.target.value)}
    />
    <button type="submit">Go!</button>
  </StyledForm>
  );
}

export default Search;
