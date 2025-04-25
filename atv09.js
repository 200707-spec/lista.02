// Simulando a resposta de uma API como uma string JSON
let respostaApi = `{
    "tarefas": [
      { "descricao": "Estudar JS", "concluida": true },
      { "descricao": "Ler livro", "concluida": false },
      { "descricao": "Praticar exercícios", "concluida": true }
    ]
  }`;
  
  // Fazendo o parse da string JSON para objeto JavaScript
  let dados = JSON.parse(respostaApi);
  
  // Função para exibir apenas tarefas concluídas
  function mostrarTarefasConcluidas(tarefas) {
    console.log("Tarefas concluídas:");
    tarefas.forEach(tarefa => {
      if (tarefa.concluida) {
        console.log("- " + tarefa.descricao);
      }
    });
  }
  
  mostrarTarefasConcluidas(dados.tarefas);