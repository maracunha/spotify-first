import styled from '../../core/theme';

const StyledFirst = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: ${props => props.theme.grayDark};
  color: ${props => props.theme.grayLightest};

  header { 
    height: 10vh;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: flex;
  }

  header svg {
    margin-right: 10px;
    margin-left: 10px;
    font-size: 30px;
    align-self: center;
  }

  nav {
    width: 150px;
    background-color: ${props => props.theme.dark};
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }

  #page-content {
    width: 100%;
    height: 86vh;
    overflow: hidden;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  #page-content ul {
    width: 80px;
    display: flex;
  }

  #page-content ul img {
    width: 80px;
    height: 80px;
  }

  #page-content ul li {
    padding: 10px;
  }

  #tracks ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180px;
    overflow: hidden;
  }



  footer {
    background-color: ${props => props.theme.darkFooter};
    height: 4vh;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }

  nav span {
    display: flex;
    font-size: 29px;
    height: 4rem;
    align-items: center;
    justify-content: center;
    font-family: monospace;
  }
`;

export default StyledFirst;
