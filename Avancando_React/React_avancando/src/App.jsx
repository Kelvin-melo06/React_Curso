import './App.css'
import imagem1 from './assets/ruaDeNoite.jpg'
import imagem2 from './assets/ruaLindaNoite.jpg'
import State from './Components/state.jsx'

function App() {
  
  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      <img src={imagem1} alt="rua De Noite" />
      <img src={imagem2} alt="rua Linda Noite" />
      <State />
    </div>
  )
}

export default App
