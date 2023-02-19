// Função que realiza as operações
function calcular() {
    // Obter os valores dos inputs
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var operacao = document.getElementById('operacao').value;
    
    // Realizar a operação selecionada
    if (operacao == '+') {
      resultado = num1 + num2;
    } else if (operacao == '-') {
      resultado = num1 - num2;
    } else if (operacao == '*') {
      resultado = num1 * num2;
    } else if (operacao == '/') {
      resultado = num1 / num2;
    }
    
    // Exibir o resultado
    document.getElementById('resultado').innerHTML = resultado;
  }
  
  // Adicionar evento de clique no botão de calcular
  document.getElementById('calcular').addEventListener('click', calcular);
  