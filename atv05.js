// Função para mostrar a data e hora atual no formato desejado
function mostrarDataHoraAtual() {
    let dataAtual = new Date();
     
    let dia = dataAtual.getDate().toString().padStart(2, '0');  
    let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');  
    let ano = dataAtual.getFullYear();
      
    let hora = dataAtual.getHours().toString().padStart(2, '0');
    let minuto = dataAtual.getMinutes().toString().padStart(2, '0');
    let segundo = dataAtual.getSeconds().toString().padStart(2, '0');
     
    let dataHoraFormatada = `Hoje é {dia}/{mes}/{ano} e agora são {hora}:{minuto}:{segundo}`;
    
    console.log(dataHoraFormatada);
  }
  
  // Chamando a função para mostrar a data e hora
  mostrarDataHoraAtual();
  