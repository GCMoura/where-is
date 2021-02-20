import styled from 'styled-components'

const Input = styled.input `
  width: 32%;
  background: transparent;
  border: transparent;
  color: var(--font-white);
  font-size: 18px;
  font-family: var(--font-sans);  
  text-align: center;
  outline: none;

  @media(min-width: 700px) {
    font-size: 32px;
  }
`

export default Input