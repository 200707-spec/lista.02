// Array de produtos
let produtos = [
    { nome: "Camisa gremio", preco: 100, categoria: "Roupas" },
    { nome: "Calça ", preco: 120, categoria: "Roupas" },
    { nome: "Notebook", preco: 3500, categoria: "Eletrônicos" },
    { nome: "Fone de Ouvido", preco: 150, categoria: "Eletrônicos" },
    { nome: "Tênis nike", preco: 200, categoria: "Calçados" }
  ];
  
  // Função para filtrar por categoria
  function filtrarPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
  }
  
 // Exemplo de uso
let produtosEletronicos = filtrarPorCategoria("Eletrônicos");
console.log("Produtos Eletrônicos:", produtosEletronicos);


let produtosRoupas = filtrarPorCategoria("Roupas");
console.log("Produtos Roupas:", produtosRoupas);

let produtosCalçados = filtrarPorCategoria("Calçados");
console.log("Produtos Calçados:", produtosCalçados);