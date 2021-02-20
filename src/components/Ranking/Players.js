import styled from 'styled-components'

const Players = styled.div `
  width: 95%;
  background: var(--blue-dark);
  color: var(--font-white);
  font-size: 18px;
  font-family: var(--font-sans);
  border-radius: 8px;
  padding: 5px 15px;
  display: flex;
  alignt-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  border: 0.5px solid black;  

  @media(min-width: 700px) {
    height: 30px;
    width: 600px;
    font-size: 32px;
  }
`
export default Players