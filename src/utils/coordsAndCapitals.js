const capitals = ['Porto Alegre', 'Florianópolis', 'Curitiba', 'São Paulo', 'Rio de Janeiro', 'Vitória', 'Belo Horizonte', 'Cuiabá', 'Campo Grande', 'Goiânia', 'Brasília', 'Porto Velho', 'Rio Branco', 'Manaus', 'Boa Vista', 'Macapá', 'Belém', 'Palmas', 'São Luís', 'Teresina', 'Fortaleza', 'Natal', 'João Pessoa', 'Recife', 'Aracaju', 'Maceió', 'Salvador']
const coords = [[-30.035,-51.229], [-27.600,-48.499], [-25.432,-49.251], [-23.556,-46.641], [-22.912,-43.210], [-20.313,-40.316], [-19.925,-43.961], [-15.598,-56.101], [-20.464,-54.619], [-16.682,-49.251], [-15.794,-47.879], [-8.751,-63.880], [-9.981,-67.813], [-3.133,-59.985], [2.812,-60.677], [0.039,-51.072], [-1.454,-48.466], [-10.184,-48.334], [-2.563,-44.241], [-5.084,-42.802], [-4.117,-38.452], [-5.822,-35.211], [-7.132,-34.870], [-8.058,-34.889], [-10.934,-37.078], [-9.646,-35.724], [-12.998,-38.501]]

function returnCoordsAndCapitals(){
  let index = Math.floor(Math.random() * capitals.length)

  let coord = coords[index]
  let capital = capitals[index]

  capitals.splice(index, 1)  
  coords.splice(index, 1) 

  return ({
    coord,
    capital
  })

}

export default returnCoordsAndCapitals