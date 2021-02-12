import React from 'react'
import { useHistory } from 'react-router-dom'

import HomeButton from '../../components/Buttons/HomeButton'

function Ranking(){

  const history = useHistory()

  const user = history.location.state.detail

  function handleHomeButton(){
    history.push('/')
  }

  return(
    <div>
      <h1>Ranking Page</h1>
      <h2> {user} </h2>
      
      <HomeButton onClick={handleHomeButton} >
        Home
      </HomeButton>
      
    </div>
  )
}

export default Ranking