import styled from '../../core/theme'

const StyledForm = styled.form`
  display: flex;
  align-self: center;

  input {
    display: flex;
    color: #000;
    padding: 6px 48px;
    height: 40px;
    width: 100%;
    border: 0;
    border-radius: 500px;
    text-overflow: ellipsis;
    outline: 0px auto;
    outline-offset: 0px;
  }

  button {
    margin-left: 10px;
    height: 50px;
    width: 50px;
    text-overflow: ellipsis;
    border-radius: 500px;
    align-self: center;
    text-decoration: none;
    cursor: pointer;
    outline: 0px auto;
    outline-offset: 0px;


  }
`;

export default StyledForm;
