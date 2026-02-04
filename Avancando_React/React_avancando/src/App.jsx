import './App.css'
import imagem1 from './assets/ruaDeNoite.jpg'
import imagem2 from './assets/ruaLindaNoite.jpg'

function App() {
  
  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      <img src={imagem1} alt="rua De Noite" />
      <img src={imagem2} alt="rua Linda Noite" />
    </div>
  )
}

export default App
