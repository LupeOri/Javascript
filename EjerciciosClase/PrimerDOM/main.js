function calculate() {
  let number1 = document.querySelector('input[name="number1"]');
  let number2 = document.querySelector('input[name="number2"]');

  let resultado = parseFloat(number1.value) + parseFloat(number2.value);

  document.getElementById("result").innerText = resultado;
}
