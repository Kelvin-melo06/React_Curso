import './App.css'
import imagem1 from './assets/ruaDeNoite.jpg'
import imagem2 from './assets/ruaLindaNoite.jpg'
import State from './Components/state.jsx'
import ListRender from './Components/ListRender.jsx'
import ShowUserDetails from './Components/ShowUserDetails.jsx'
import Button from './Components/Button.jsx'
import Button2 from './Components/Button2.jsx'
import CarDetails from './Components/CarDetails.jsx'


const car = [
  {id: 1, brand: "Ford", color: "Preto", year: 2020, km: 0},
  {id: 2, brand: "Chevrolet", color: "Branco", year: 2021, km: 2000},
  {id: 3, brand: "Dodge", color: "Vermelho", year: 2019, km: 5000}
]


function App() {
  
  return (
    <div className='App' style={{paddingBottom: "500px"}}>
      
      <h1>Avançando em React</h1>

      <img src={imagem1} alt="rua De Noite" />
      <img src={imagem2} alt="rua Linda Noite" />
      <State />

      <ListRender />

      <ShowUserDetails name="Matheus" age={30} city="São Paulo" />

      <Button 
      text="Salvar"
      variant="primary"
      onClick={()=>{console.log("Salvou")}}
      />

      <Button
      text="Excluir"
      variant="danger"
      onClick={()=>{console.log("Excluiu")}}
      />

      <Button2 text="Enviar" />

      {car.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          model={car.color}
          year={car.year}
          km={car.km}
        />
      ))}

    </div>
  )
}

export default App
