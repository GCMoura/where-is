import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../config/config'

import Input from '../../components/Input/Input'
import GameButton from '../../components/Buttons/GameButton'
import RankingButton from '../../components/Buttons/RankingButton'
import Title from '../../components/Title/Title'
import P from '../../components/Paragraph/Paragraph'
import Form from '../../components/Form/Form'

function Home(){

  var history = useHistory()

  const [user, setUser] = useState('')

  function createUserRanking(date, time){
    const data = {
      user: `${user}-${time}`,
      points: 0,
      date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
    
    return firebase.database().ref('ranking').push(data)
      .then(() => {
        console.log('Ranking incluído com sucesso')
      })
      .catch(error => {
        alert(error)
      })
  }

  function handleSubmit(){
    if(user){
      const date = new Date()   
      const time = date.getTime() 

      createUserRanking(date, time)
      
      history.push({
        pathname: `game/${user}-${time}`
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