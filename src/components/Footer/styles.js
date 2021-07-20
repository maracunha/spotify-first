import styled from '../..core/theme'

const StyledFooter = styled.footer`
  display: flex;
  background-color: ${props => props.theme.darkFooter};
  align-items: center;
  height: 4vh;
  grid-row: 3 / 4;
  grid-column: 1 / 3;

  a {
  text-decoration: none;
  color: white;
  }

  a svg {
    margin-right: 0.5rem;
  }
`;

export default StyledFooter;
