const ClassifyImc = ({ imcUser }) => {
  const classifications = {
    under: {
      label: "Abaixo do peso",
      color: "under",
      animation: "reveal",
    },
    normal: {
      label: "Peso normal",
      color: "normal",
      animation: "reveal",
    },
    over1: {
      label: "Sobrepeso",
      color: "over",
      animation: "reveal",
    },
    over2: {
      label: "Obesidade grau I",
      color: "over",
      animation: "reveal",
    },
    over3: {
      label: "Obesidade grau II",
      color: "over",
      animation: "reveal",
    },
    over4: {
      label: "Obesidade grau III",
      color: "over",
      animation: "reveal",
    },
  };

  let classification = "";

  if (imcUser < 18.5) {
    classification = "under";
  } else if (imcUser >= 18.5 && imcUser < 25) {
    classification = "normal";
  } else if (imcUser >= 25 && imcUser < 30) {
    classification = "over1";
  } else if (imcUser >= 30 && imcUser < 35) {
    classification = "over2 ";
  } else if (imcUser >= 35 && imcUser < 40) {
    classification = "over3";
  } else {
    classification = "over4";
  }

  const current = classifications[classification]; 

  return (
   <>
      <div className= {`classification ${current.animation}`}>
        <h3 className={current.color}>{current.label}</h3>
      </div>
   </>
  );
};

export default ClassifyImc;
