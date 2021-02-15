import styled from 'styled-components'

const Div = styled.div `
  padding: 10px;
  position: absolute;
  top: -70px;
  font: var(--font-mono);
  color: var(--font-white);
  width: 90%;
  height: 7rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
`

function buildAlert(message, color){

  const body = document.querySelector('#root')

  // const div = document.createElement('div')
  // div.classList.add('alert')
  Div.style.background = color

  body.appendChild(Div)

  const parag = document.createElement('p')
  parag.appendChild(document.createTextNode(message))
  Div.appendChild(parag)
  
  Div.style.transform = 'translateY(70px)'
  setTimeout(() => {
    Div.style.transform = 'translateY(-70px)'
  }, 3000);   

}

export default buildAlert