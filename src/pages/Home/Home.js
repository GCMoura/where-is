import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Input from '../../components/Input/Input'
import GameButton from '../../components/Buttons/GameButton'
import RankingButton from '../../components/Buttons/RankingButton'

function Home(){

  var history = useHistory()

  const [user, setUser] = useState('')

  function handleGameButton(){
    history.push({
      pathname: `game/${user}`,
      state: {
        detail: user
      }
    })
  }

  function handleRankingButton(){
    history.push(`ranking/${user}`)
  }

  return(
    <div>
      <h1>Home Page</h1>
      
      <Input 
        name='user'
        value={user}
        placeholder="Digite seu nome" 
        required
        onChange={event => { setUser(event.target.value) }}>
      </Input>
      <br/>
      <GameButton onClick={handleGameButton} >
        Game
      </GameButton>
      <br/>    
      <RankingButton onClick={handleRankingButton} >
        Ranking
      </RankingButton>
      
    </div>
  )
}

export default Home