import L from 'leaflet'

function createCircle(distanceKm, distance, lat, lng){
  let circle
  if(distanceKm <= 10){
    return (circle = L.circle([lat, lng], {
      radius: distance,
      color: 'green'
    }))
  }else if(distanceKm > 10 && distanceKm <= 50){
    return (circle = L.circle([lat, lng], {
      radius: distance,
      color: 'green'
    }))
  } else if(distanceKm > 50 && distanceKm <= 100){
    return (circle = L.circle([lat, lng], {
      radius: distance,
      color: 'yellow'
    }))
  } else if(distanceKm > 100 && distanceKm <= 200){
    return (circle = L.circle([lat, lng], {
      radius: distance,
      color: 'tomato'
    }))
  } else if(distanceKm > 200){
    return (circle = L.circle([lat, lng], {
      radius: distance,
      color: 'red'
    }))
  } 
}

export default createCircle