// Função para mostrar a hora atual no formato desejado
function mostrarRelogio() {
    // Criando um objeto Date para obter a data e hora atuais
    let dataAtual = new Date();
    
    // Extraindo os componentes da hora
    let hora = dataAtual.getHours().toString().padStart(2, '0');
    let minuto = dataAtual.getMinutes().toString().padStart(2, '0');
    let segundo = dataAtual.getSeconds().toString().padStart(2, '0');
    

    let horaFormatada = `${hora}:${minuto}:${segundo}`;
    
    console.clear();
    
    console.log(horaFormatada);
  }
  
  setInterval(mostrarRelogio, 1000);