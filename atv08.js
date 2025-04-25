// Criando um objeto com dados de um usuário
let usuario = {
    nome: "luiz henrique",
    email: "brumvazluis@email.com",
    idade: 17
  };
  
  // Exibindo o objeto original no console
  console.log("Objeto original:", usuario);
  
  // Convertendo o objeto para JSON usando JSON.stringify()
  let usuarioJson = JSON.stringify(usuario);
  console.log("Objeto convertido para JSON:", usuarioJson);
  
  // Reconvertendo o JSON para um objeto usando JSON.parse()
  let usuarioObjeto = JSON.parse(usuarioJson);
  console.log("JSON reconvertido para objeto:", usuarioObjeto);
  