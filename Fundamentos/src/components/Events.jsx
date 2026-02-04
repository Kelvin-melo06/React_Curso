import React from 'react'

const Events = () => {

    const handleEvent = () =>{
        console.log("Testando Evento");
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Também posso renderizar isso!</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={handleEvent}>
                Clique Aqui
            </button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events