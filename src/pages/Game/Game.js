import React from 'react'
import { useHistory } from 'react-router-dom'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'


function Game(){

  const history = useHistory()

  const user = history.location.state.detail

  const center = [-15.613779,-51.855469]
  const zoomSnap = 0.1
  const zoom = 4.6
  const maxZoom = 4.6
  const minZoom = 4.6

  return(
    <div> 
      <h1>Game Page</h1>
      <h2> {user} </h2>

      <MapContainer 
        center={center} 
        zoom={zoom} 
        zoomSnap={zoomSnap} 
        zoom={zoom} 
        maxZoom={maxZoom}
        minZoom={minZoom}
        doubleClickZoom={false}>

        <TileLayer
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'
          subdomains="['mt0','mt1','mt2','mt3']"
        />

        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}

      </MapContainer>

    </div>
  )
}

export default Game