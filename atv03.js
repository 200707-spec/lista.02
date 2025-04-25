// Função para contar o número de vogais em uma string
function contarVogais(str) {
    // Definir as vogais
    const vogais = "aeiou";
    let contador = 0;
  
    // Percorrer cada caractere da string e verificar se é uma vogal
    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  
  // Exemplo de uso
  let resultado = contarVogais("Exemplo de String");
  console.log("Quantidade de vogais:", resultado);
  