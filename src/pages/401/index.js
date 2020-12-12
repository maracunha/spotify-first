import { useStore } from 'easy-peasy';
import StyledDiv from './style';

function InvalidTokenPage() {
  const store = useStore()

  return (
    <StyledDiv>
      <h1>ahh não... O Spotify te chutou para fora.</h1>
      <h1>Será necessário refazer o login.</h1>
      <a className="link" onClick={() => store.persist.clear()}  href="/">Voltar para página inicial</a>
    </StyledDiv>
  )
}

export default InvalidTokenPage;
