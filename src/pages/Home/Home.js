import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import buildAlert from '../../utils/buildAlert'

import Input from '../../components/Input/Input'
import GameButton from '../../components/Buttons/GameButton'
import RankingButton from '../../components/Buttons/RankingButton'

function Home(){

  var history = useHistory()

  const [user, setUser] = useState('')

  function handleGameButton(){
    if(user){
      history.push({
        pathname: `game/${user}`,
        state: {
          detail: user
        }
      })  
    } else {
      buildAlert('Por favor insira o nome do jogador', '#8f1d08')
    }
  }

  function handleRankingButton(){
    history.push(`ranking`)
  }

  return(
    <div>
      <h1>Home Page</h1>
      
      <Input 
        name='user'
        value={user}
        placeholder="Digite seu nome" 
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