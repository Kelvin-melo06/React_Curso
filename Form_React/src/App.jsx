import './App.css'
import MyForm from './Components/MyForm.jsx'

function App() {
  

  return (
    <div className='App'>
      <MyForm 
      userName = "John Doe"
      userEmail = "john.doe@example.com"
      userBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  )
}

export default App
