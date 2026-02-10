import React from 'react'

const Button = ({text, variant, onClick}) => {
  return (
    <div>
        <button className={`btn ${variant}`}
        onClick={onClick}>
            {text}

        </button>
    </div>
  )
}

export default Button