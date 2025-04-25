// Função que recebe dois números e uma operação
function executarOperacao(num1, num2, operacao) {
    return operacao(num1, num2); // Executa a operação recebida
  }
  
  // Funções para as operações matemáticas
  
  // Soma
  function soma(a, b) {
    return a + b;
  }
  
  // Subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Divisão
  function divisao(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "não pode dividir por zero";
    }
  }
  
  // Testando a função com diferentes operações
  console.log(executarOperacao(10, 5, soma));         // 10 + 5 = 15
  console.log(executarOperacao(10, 5, subtracao));   // 10 - 5 = 5
  console.log(executarOperacao(10, 5, multiplicacao)); // 10 * 5 = 50
  console.log(executarOperacao(10, 5, divisao));     // 10 / 5 = 2
  console.log(executarOperacao(10, 0, divisao));     // não pode dividir por zero
  