import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import L from 'leaflet'

function Game(){

  const history = useHistory()

  const user = history.location.state.detail
 
  const center = [-15.613779,-51.855469]
  const zoomSnap = 0.1
  const zoom = 4.6
  const maxZoom = 4.6
  const minZoom = 4.6

  useEffect(() => {
    var map = L.map('mapid', {
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
    
    teste(map)
  }, [])

  function teste(map){
    map.on('click', (event) => {
      console.log(event.latlng)
    })

  }
  
  
  return(
    <div> 
      <h1>Game Page</h1>
      <h2> {user} </h2>

      <div id="mapid"></div>
      

    </div>
  )
}

export default Game