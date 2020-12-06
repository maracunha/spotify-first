import styled from '../../core/theme';

const StyledMain = styled.main`
  
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.grayDark};
  
  h1 {
    font-size: 40px;
    font-weight: bold;
    padding : 2rem;
    margin-bottom: 40px;
  }

  .link {
    width: 20rem;
    height: 5.6rem;
    margin-top: 20px;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.grayLight};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
    text-decoration: none;
  }
`;

export default StyledMain;
