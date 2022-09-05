const form = document.getElementById('formulario');

// Cancela a ação do Submit 
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputHeight = e.target.querySelector('#height');
  const inputWeight = e.target.querySelector('#weight');

  const height = Number(inputHeight.value);
  const weight = Number(inputWeight.value);

  if (!weight) {
    setResult('Peso inválido!', false);
    return;
  }

  if (!height) {
    setResult('Altura inválida!', false);
    return;
  }

  const imc = getImc(height, weight);
  const classFImc = getClassfImc(imc);
  
  const msg = `Seu IMC é ${imc} (${classFImc})`;

  setResult(msg, true);

});

function getClassfImc(imc) {
  const classification = ['Abaixo do Peso', 'Peso Normal', 'Sobrepreso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III'];

  if(imc >= 39.9) return classification[5];
  if(imc >= 34.9) return classification[4];
  if(imc >= 29.9) return classification[3];
  if(imc >= 24.9) return classification[2];
  if(imc >= 18.5) return classification[1];
  if(imc < 18.5) return classification[0];
  
}

function getImc(height, weight){
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function createP(){
  const paragraph = document.createElement('p');
  return paragraph;
}

function setResult(msg, isValid) {
  const result = document.getElementById('resultado');
  result.innerHTML = '';
  const paragraph = createP();
  
  if(isValid) {
    paragraph.classList.add('paragrafo-resultado');
  } else {
    paragraph.classList.add('bad');
  }

  paragraph.innerHTML = msg;
  result.appendChild(paragraph);
}