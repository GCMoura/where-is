import styled from 'styled-components'

const Input = styled.input `
  background: transparent;
  border: transparent;
  color: var(--font-black);
  font-size: 18px;
  font-family: var(--font-sans);  
  text-align: center;
  width: 32%;

  @media(min-width: 700px) {
    font-size: 26px;
  }
`

export default Input