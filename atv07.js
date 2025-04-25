// Função para simular a contagem regressiva
function contagemRegressiva() {
    let segundos = 5;
    
    // Função para mostrar a contagem regressiva no console
    let intervalo = setInterval(() => {
      console.log(segundos);
      segundos--;
    
      if (segundos < 0) {
        console.log("Tempo esgotado!");
        clearInterval(intervalo); 
        
      }
    }, 1000); 
    
  }
  
  contagemRegressiva();