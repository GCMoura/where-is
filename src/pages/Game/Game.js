import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import L from 'leaflet'
import firebase from '../../config/config'

import returnCoordsAndCapitals from '../../utils/coordsAndCapitals'
import createCircle from '../../utils/createCircle'

import Section from '../../components/Section/Section'
import P from '../../components/Paragraph/Paragraph'
import Result from '../../components/Result/Result'
import RankingButton from '../../components/Buttons/RankingButton'
import RestartButton from '../../components/Buttons/RestartButton'

function Game(){

  const baseURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000/game/'
  : 'https://mybookcaseproject.web.app/register/'

  const history = useHistory()

  const user = window.location.href.toString().replace(baseURL, '')
  
  var round = 0

  const [distanceKm, setDistanceKm] = useState(0)
  const [capital, setCapital] = useState('')
  const [points, setPoints] = useState(0)
  const [gameOver, setGameOver] = useState(null)

  var map = null

  var capitalAndCoord = null

  useEffect(() => {
    const root = document.querySelector('#root')
    const div = document.createElement('div')
    div.setAttribute('id', 'mapid')
    root.appendChild(div)
    
    map = L.map('mapid', {
      center: [-14.613779, -52.855469],
      zoomSnap: 0.1,
      zoom: 4.6,
      maxZoom: 4.6,
      minZoom: 4.6,
      doubleClickZoom: false
    })
     
    L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
        subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(map);

    capitalAndCoord = returnCoordsAndCapitals()

    setCapital(capitalAndCoord.capital)
    
    userClick(map)

  }, [])
  
  function userClick(map){

    map.on('click', (event) => {

      round++

      const chosenUserLocation = L.marker([event.latlng.lat, event.latlng.lng]).addTo(map)

      const capitalChosen = L.marker(capitalAndCoord.coord).addTo(map)

      const distance = map.distance(capitalAndCoord.coord, [event.latlng.lat, event.latlng.lng])
  
      setDistanceKm((distance / 1000).toFixed(2))

      const distanceKm = (distance / 1000).toFixed(2)

      let circle = createCircle(distanceKm, distance, event.latlng.lat, event.latlng.lng)

      circle.addTo(map)

      setTimeout(() => {
        chosenUserLocation.remove()
        capitalChosen.remove()  
        circle.remove()
      }, 3000);

      if(round < 2){
        capitalAndCoord = returnCoordsAndCapitals()
        setCapital(capitalAndCoord.capital)
      } else {
        
        setTimeout(() => {
          console.log('game-over')
          setGameOver(true)
          map.remove()
        }, 3200);
      }
    })  
  }
  
  //pontuação
  useEffect(() => {
      if(distanceKm > 0 && distanceKm <= 50){
        setPoints(points + 200)
      } else if(distanceKm > 50 && distanceKm <= 100){
        setPoints(points + 100)
      } else if(distanceKm > 100 && distanceKm <= 150){
        setPoints(points + 50)
      } else if(distanceKm > 150 && distanceKm <= 200) {
        setPoints(points + 25)
      } else {
        setPoints(points + 0)
      }
  }, [distanceKm]) 
  
  function updateUserPoints(points){
    let db
    let id
    firebase.database().ref('ranking').on('value', (snapshot) => {
      snapshot.forEach(item => {
        if(item.val().user === user){
          db = item.ref.path.pieces_[0]
          id = item.ref.path.pieces_[1]
        }
      })
      return firebase.database().ref().child(db + '/' + id).update({
        points: points 
      }).catch(error => {
        alert(error)
      })
    })

  }

  function HandleGameOver(props){
    const isGameOver = props.isGameOver
    if(isGameOver){
      document.querySelector('#mapid').style.display = 'none'
      document.querySelector('#section').style.display = 'none'

      updateUserPoints(points)

      return (
        <div>
          <Result> Total de Pontos: {points} </Result>
          <RankingButton onClick={handleRankingButton} >
            Ranking
          </RankingButton>
          <br/>
          <RestartButton onClick={handleRestartButton} >
            Restart
          </RestartButton>
        </div>
      )
    }
    return false
  }

  function handleRankingButton(){
    let path = `/ranking/${user}`
    history.push(path)
  }

  function handleRestartButton(){
    window.location.reload(false)
  }
  
  return(
    <div> 
      <Section id="section">
        <P>Onde fica: {capital.toUpperCase()} ?</P>
        <P>Distância: {distanceKm} km</P>
        <P>Pontos: {points}</P>
      </Section>
      
      <HandleGameOver isGameOver={gameOver} />  
    </div>
  )
}

export default Game