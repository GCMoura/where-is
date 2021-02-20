import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../config/config'

import HomeButton from '../../components/Buttons/HomeButton'
import SubTitle from '../../components/Ranking/SubTitle'
import InputSubTitle from '../../components/Input/InputSubTitle'
import InputRanking from '../../components/Input/InputFirstPlayer'
import Title from '../../components/Title/Title'
import FirstPlayer from '../../components/Ranking/FirstPlayer'
import Players from '../../components/Ranking/Players'

function Ranking(){

  const baseURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000/ranking/'
  : 'https://mybookcaseproject.web.app/register/'

  const user = window.location.href.toString().replace(baseURL, '')

  const history = useHistory()

  const [first, setFirst] = useState([])
  const [players, setPlayers] = useState([])
  
  useEffect(() => {
    let larger = 0
    let numberOfPlayers = 7
    let playersWithEqualPoints = 0
    let playersArray = []

    firebase.database().ref('ranking').on('value', (snapshot) => {
      snapshot.forEach(item => {
        if(item.val().points > larger){
          larger = item.val().points
        }
      })
      
      firebase.database().ref('ranking').on('value', (snapshot) => { 
        snapshot.forEach(item => {
          let userName = userNameManipulation(item.val().user)
          if(item.val().points === larger && playersWithEqualPoints === 0){
            setFirst([
              userName,
              item.val().date,
              item.val().points
            ])
            playersWithEqualPoints++
          } else {
            let newPlayer = [userName, item.val().date, item.val().points]
            playersArray.push(newPlayer)
          }
        })
        playersArray.reverse()

        let newArray = playersArray.slice(0, numberOfPlayers)

        setPlayers(newArray)
      })
    })

  }, [])

  function userNameManipulation(name){
    let index = name.lastIndexOf('-')
    name = name.slice(0, index)
    return name
  }
  
  function handleHomeButton(){
    document.getElementById('mapid').outerHTML = ''
    history.push('/')
  }

  return(
    <>
      <Title>Ranking</Title>
      <SubTitle> 
        <InputSubTitle 
          type="text" 
          // size="7" 
          value='Jogador' 
          readOnly
        />        
        <InputSubTitle 
          type="text" 
          // size="7" 
          value='Data'
          readOnly 
        /> 
        <InputSubTitle 
          type="text" 
          // size="7" 
          value='Pontos'
          readOnly
        /> 
      </SubTitle>
      <FirstPlayer> 
        <InputRanking 
          type="text" 
          // size="7" 
          value={first[0] || ''} 
          readOnly
        />        
        <InputRanking 
          type="text" 
          // size="7" 
          value={first[1] || ''}
          readOnly 
        /> 
        <InputRanking 
          type="text" 
          // size="7" 
          value={first[2] || ''} 
          readOnly
        /> 
      </FirstPlayer>
      {players.map((player, index) => {
        return (
          <Players key={index}>
            <InputRanking  
              type="text" 
              // size="7" 
              value={player[0]} 
              readOnly
            />        
            <InputRanking 
              type="text" 
              // size="7" 
              value={player[1]}
              readOnly 
            /> 
            <InputRanking 
              type="text" 
              // size="7" 
              value={player[2]} 
              readOnly
            /> 
          </Players>
          )
      })} 
                
      <HomeButton onClick={handleHomeButton} >
        Retornar à página principal
      </HomeButton>
      
    </>
  )
}

export default Ranking