import './App.css'
import { useState } from 'react'
import TaskItem from './Components/TaskItem.jsx'


function App() {
  const [task, setTask] = useState([
    {id: 1, name: "Estudar React", done: false},
    {id: 2, name: "Fazer Exercícios", done: true},
    {id: 3, name: "Ler um Livro", done: false}
])

  const [newTask, setNewTask] = useState("");

  const addTask = () =>{
    if(newTask.trim() === "") return;

    const novaTask = {
      id: Date.now(),
      name: newTask,
      done: false
    }

    setTask((prevTask) => [...prevTask, novaTask]);
    setNewTask("");
  }

  const toggleTask = (id) => {
    setTask((prevTask) =>
      prevTask.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
    )
  )
}

  const removeTask = (id) => {
    setTask((prevTask) =>
      prevTask.filter((task) => task.id !== id)
  )
}
  
  return (
    <div className='App' style={ { paddingBottom: "500px" } }>
      
      <h1>Lista de Tarefas</h1>

      <div className='input-Container'>
        <input 
          type = 'text'
          value = { newTask }
          onChange = { (e) => setNewTask(e.target.value) }
        />
      </div>

      <div className='container-Button-Add'>
        <button onClick={addTask}>
          Adicionar Task
        </button>
      </div>

      {task.map((task) => (
        <TaskItem
          key={task.id}
          text = {task.name}
          done = {task.done}
          onRemove = {() => {removeTask(task.id)}}
          onToggle = {() =>{toggleTask(task.id)}}
        />
      ))}
      
    </div>
  )
}

export default App
