import styled from 'styled-components'

const RestartButton = styled.button `
  width: 300px;
  height: 50px;
  background: var(--red-light);
  font-family: var(--font-sans);
  font-size: 20px; 
  font-weight: bold;
  line-height: 1;
  cursor: pointer;
  outline: 0;
  transition: 0.5s;
  border-radius: 8px;
  margin: 10px auto;
  &:hover{
    background: var(--red-dark);
    color: var(--font-white);
    opacity: .8;
  }
`

export default RestartButton  