import './App.css'
import Events from './components/Events.jsx'
import FirstComponent from './components/FirstComponent.jsx'
import MyComponent from './components/MyComponent.jsx'
import TemplateExpression from './components/TemplateExpression.jsx'

function App() {

  return (
    <div className='App'>
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />

    </div>
  )
}

export default App
