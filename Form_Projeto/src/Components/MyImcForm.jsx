import "./ImcForm.css"
import { useState } from "react"
import ClassifyImc from "./ClassifyImc"

const MyImcForm = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [imc, setImc] = useState(null);

    const ImcCalcule = () => {
        if (height > 0 && weight > 0){
            const heightInMeters = Number(height) / 100;
            const calculatedImc = Number(weight) / (heightInMeters * heightInMeters);
            setImc(Number(calculatedImc.toFixed(2))); 

            setHeight("");
            setWeight("");
        }else {
            alert("Por favor, insira valores válidos para altura e peso.");
        }
    }

  return (
    
     <div className="container">
        <div className="card">
            <h1>Calculadora de IMC</h1>

            <div className="input-group">
                <label 
                    htmlFor="altura"
                >
                    Altura(cm)
                </label>
                <input 
                type="number"  id="altura" placeholder="Ex: 175"
                step={0.1}
                min={0}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label 
                    htmlFor="peso"
                >
                    Peso(kg)
                </label>
                <input 
                type="number"
                id="peso"
                placeholder="Ex: 70"
                step={0.1}
                min={0}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
            </div>

            <button type="button" onClick={ImcCalcule}>Calcular</button>

            <div className="result">
                <h2>Resultados</h2>
                <p>Seu IMC é: {imc}</p>
                {imc && <ClassifyImc imcUser = {imc} />}
            </div>
        </div>
    </div>
    
  )
}

export default MyImcForm