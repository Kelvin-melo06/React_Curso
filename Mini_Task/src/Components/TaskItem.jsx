import React from 'react'

const TaskItem = ({text, done, onToggle, onRemove}) => {
  return (
    <div>
        <span 
            onClick={onToggle}
            className='text-span'
            style={done ? {textDecoration: 'line-through'} : {}}
            >
            {text}
        </span>

        <button
            className='remove-btn'
            onClick={onRemove}
         >
            Remover
        </button>
    </div>
  )
}

export default TaskItem