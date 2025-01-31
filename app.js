let listaDeAmigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();
    
    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    // Verifica se o nome já foi adicionado
    if (listaDeAmigos.includes(nomeAmigo)) {
        alert(`O nome '${nomeAmigo}' já está na lista!`);
        return;
    }
    
    // Adiciona o nome à lista e atualiza a exibição
    listaDeAmigos.push(nomeAmigo);
    atualizarListaDeAmigos();
    
    // Limpa o campo de entrada
    inputAmigo.value = "";
}

function atualizarListaDeAmigos() {
    const listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = ""; // Limpa a lista antes de atualizar
    
    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];
    
    // Exibe o resultado do sorteio
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}
