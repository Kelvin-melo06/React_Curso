import React from 'react'

const ShowUserDetails = ({name,age,city}) => {
  return (
    <div>
        <p>O nome do usuário é: {name}</p>
        <p>A idade do usuário é: {age}</p>
        <p>A cidade do usuário é: {city}</p>
    </div>
  )
}

export default ShowUserDetails