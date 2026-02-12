import { useState } from 'react'

const Button2 = ({text}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () =>{
        setLoading(true);

        setTimeout(() =>{
            setLoading(false);
        },2000);
    }
  return (
    <div>
        <button onClick={handleClick}>
            {loading ? "Carregando..." : text}
        </button>
    </div>
  )
}

export default Button2