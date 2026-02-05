import { useState } from 'react'

const state = () => {
    const [contador, setContador] = useState(0);
  return (
    <div>
        <p>Contador: {contador}</p>

        {contador < 10 && (
            <button onClick={() => setContador(contador + 1)}>
                Somar
            </button>            
        )}

        {contador === 10 && <p>Chegou no limite😎</p>}
    </div>
  );
}

export default state