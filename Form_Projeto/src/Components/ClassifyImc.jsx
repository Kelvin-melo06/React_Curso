

const ClassifyImc = ({imcUser}) => {
  let classification = "";

  if (imcUser < 18.5) {
    classification = "Abaixo do peso";
  } else if (imcUser >= 18.5 && imcUser < 25) {
    classification = "Peso normal";
  } else if (imcUser >= 25 && imcUser < 30) {
    classification = "Sobrepeso";
  } else if (imcUser >= 30 && imcUser < 35) {
    classification = "Obesidade grau I";
  } else if (imcUser >= 35 && imcUser < 40) {
    classification = "Obesidade grau II";
  } else {
    classification = "Obesidade grau III";
  }

  return (
    <div className="classification">
      <h3>{classification}</h3>
    </div>
  )
}

export default ClassifyImc