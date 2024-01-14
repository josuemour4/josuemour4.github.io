// Variáveis
const fotos = [
    {
      id: 1,
      nome: "Leão",
      src: "img/leao.jpg",
    },
    {
      id: 2,
      nome: "Girafa",
      src: "img/girafa.jpg",
    },
    {
      id: 3,
      nome: "Elefante",
      src: "img/elefante.jpg",
    },
  ];
  
  // Função para abrir a imagem maior
  function abrirImagem(id) {
    // Obtém a foto a partir do id
    const foto = fotos.find((foto) => foto.id === id);
  
    // Cria uma nova div para exibir a imagem
    const divImagem = document.createElement("div");
    divImagem.id = "imagem-maior";
  
    // Cria um novo elemento img para exibir a imagem
    const img = document.createElement("img");
    img.src = foto.src;
  
    // Adiciona o elemento img à div
    divImagem.appendChild(img);
  
    // Cria um novo elemento p para exibir a descrição
    const pDescricao = document.createElement("p");
    pDescricao.textContent = foto.nome;
  
    // Adiciona o elemento p à div
    divImagem.appendChild(pDescricao);
  
    // Adiciona a div ao DOM
    document.body.appendChild(divImagem);
  }
  
  // Evento de clique na imagem
  document.addEventListener("click", (event) => {
    // Verifica se o evento foi causado por um elemento img
    if (event.target.tagName === "IMG") {
      // Obtém o id da imagem
      const id = event.target.dataset.id;
  
      // Abre a imagem maior
      abrirImagem(id);
    }
  });
  