import styled from 'styled-components'

const SubTitle = styled.div `
  width: 95%;
  background: transparent;
  color: var(--font-black);
  font-size: 18px;
  font-family: var(--font-sans);
  display: flex;
  alignt-items: center;
  justify-content: space-evenly;
  margin-bottom: 5px;

  @media(min-width: 700px) {
    height: 30px;
    width: 600px;
    font-size: 28px;
  }
  
`
export default SubTitle