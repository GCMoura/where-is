import styled from 'styled-components'

const Section = styled.section `
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-botton: 10px;
  font-size: 20px;

  @media(min-width: 700px) {
    height: 60px;
    width: 100vw;
    flex-direction: row;
    justify-content: space-evenly;
  }
`
export default Section