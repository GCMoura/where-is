import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../config/config'

import HomeButton from '../../components/Buttons/HomeButton'

function Ranking(){

  const baseURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000/ranking/'
  : 'https://mybookcaseproject.web.app/register/'

  const user = window.location.href.toString().replace(baseURL, '')

  const history = useHistory()

  const [first, setFirst] = useState([])
  const [second, setSecond] = useState([])
  const [third, setThird] = useState([])

  useEffect(() => {
    let points = []

    firebase.database().ref('ranking').on('value', (snapshot) => {
      snapshot.forEach(item => {
        points.push(item.val().points)
      })
    })
    
    // firebase.database().ref('ranking').on('value', (snapshot) => {
    //   snapshot.forEach(item => {
    //     if(item.val().user === user){
    //       db = item.ref.path.pieces_[0]
    //       id = item.ref.path.pieces_[1]
    //     }
    //   })
    // })
    //console.log(firebase.database().ref('ranking').orderByKey())

    points.sort()
    points.reverse()

    showRanking(points)
    
  }, [])

  function showRanking(points){
    firebase.database().ref('ranking').on('value', (snapshot) => { 
      snapshot.forEach(item => {
        if(points[0] === item.val().points){
          setFirst([
            item.val().user,
            item.val().date,
            item.val().points
          ])
        }
      })
    })
  }

  function handleHomeButton(){
    history.push('/')
  }

  return(
    <div>
      <h1>Ranking Page</h1>
      <h1>{first}</h1>
            
      <HomeButton onClick={handleHomeButton} >
        Retornar à página principal
      </HomeButton>
      
    </div>
  )
}

export default Ranking