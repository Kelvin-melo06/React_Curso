import './App.css'
import imagem1 from './assets/ruaDeNoite.jpg'
import imagem2 from './assets/ruaLindaNoite.jpg'
import State from './Components/state.jsx'
import ListRender from './Components/ListRender.jsx'
import ShowUserDetails from './Components/ShowUserDetails.jsx'
import Button from './Components/Button.jsx'
import Button2 from './Components/Button2.jsx'

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
      
    </div>
  )
}

export default App
