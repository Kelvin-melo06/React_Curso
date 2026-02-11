import React from 'react'

const CarDetails = ({brand, color, year, km}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>Ano: {year}</li>
            <li>Kilometragem: {km}</li>
        </ul>
    </div>
  )
}

export default CarDetails