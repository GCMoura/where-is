import React from 'react'
import { useHistory } from 'react-router-dom'

import HomeButton from '../../components/Buttons/HomeButton'

function Ranking(){

  const history = useHistory()

  
  function handleHomeButton(){
    history.push('/')
  }

  return(
    <div>
      <h1>Ranking Page</h1>
            
      <HomeButton onClick={handleHomeButton} >
        Home
      </HomeButton>
      
    </div>
  )
}

export default Ranking