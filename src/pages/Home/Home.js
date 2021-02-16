import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Input from '../../components/Input/Input'
import GameButton from '../../components/Buttons/GameButton'
import RankingButton from '../../components/Buttons/RankingButton'
import Title from '../../components/Title/Title'
import P from '../../components/Paragraph/Paragraph'
import Form from '../../components/Form/Form'

function Home(){

  var history = useHistory()

  const [user, setUser] = useState('')

  function handleSubmit(){
    if(user){
      history.push({
        pathname: `game/${user}`,
        state: {
          detail: user
        }
      })  
    }
  }

  function handleRankingButton(){
    history.push(`ranking`)
  }

  return(
    <div>
      <Title>Onde Fica?</Title>
      <P>Descubra a localização das capitais brasileiras</P> 
      <Form onSubmit={handleSubmit}>
        <Input 
          name='user'
          value={user}
          placeholder="Digite seu nome" 
          required
          onChange={event => { setUser(event.target.value) }}>
        </Input>
        <br/>
        <GameButton type="submit">
          Capitais Brasileiras
        </GameButton>
        <br/>    
        <RankingButton onClick={handleRankingButton} >
          Ranking
        </RankingButton>
      </Form>
    </div>
  )
}

export default Home