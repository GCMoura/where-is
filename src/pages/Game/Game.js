import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import L from 'leaflet'

import returnCoordsAndCapitals from '../../utils/coordsAndCapitals'
import createCircle from '../../utils/createCircle'

import Section from '../../components/Section/Section'

function Game(){

  const history = useHistory()

  const user = history.location.state.detail

  var round = 0

  const [distanceKm, setDistanceKm] = useState(0)
  const [capital, setCapital] = useState('')
  const [points, setPoints] = useState(0)

  var map = null

  let capitalAndCoord = null

  useEffect(() => {
    
    map = L.map('mapid', {
      center: [-15.613779,-51.855469],
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
        console.log('game over')
        map.remove()
        map = L.map('mapid', {
          center: [-15.613779,-51.855469],
          zoomSnap: 0.1,
          zoom: 4.6,
          maxZoom: 4.6,
          minZoom: 4.6,
          doubleClickZoom: false
        })

        L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
            subdomains:['mt0','mt1','mt2','mt3'],
            opacity: 0.5
        }).addTo(map);

        L.marker([-15.613779,-51.855469])
          .addTo(map)

        L.popup({
          closeButton: false
        })
          .setLatLng([-13.613779,-51.855469])
          .setContent(`${user}, você fez ${points} pontos`)
          .openOn(map);

        setTimeout(() => {
          window.location.reload(false)
        }, 2000);
      }
    })  
  }
  
  //pontuação
  useEffect(() => {
    switch (distanceKm) {
      case distanceKm > 0 && distanceKm <= 10:
        setPoints(points + 200)
        break;
      case distanceKm > 10 && distanceKm <= 50:
        setPoints(points + 100)
        break;
      case distanceKm > 50 && distanceKm <= 100:
        setPoints(points + 50)
        break;
      case distanceKm > 100 && distanceKm <= 200:
        setPoints(points + 25)
      break;
      case distanceKm > 200:
        setPoints(points + 0)
      break;
    }
  }, [distanceKm])  
  
  return(
    <div> 
      <Section>
        <h2>Onde fica: {capital.toUpperCase()} ?</h2>
        <h2>Distância: {distanceKm} km</h2>
        <h2>Pontos: {points}</h2>
      </Section>

      <div id="mapid"></div>
      

    </div>
  )
}

export default Game