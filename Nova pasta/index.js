const iniciarContador = (tempo) => {    // A função iniciarContador recebe um parâmetro chamado tempo, que representa o número de segundos para o contador
    let segundosRestantes = tempo; // Inicializa a variável segundosRestantes com o valor do tempo fornecido

    const atualizarContador = setInterval(() => { //essa função será executada a cada 1000 milissegundos (1 segundo)
        console.log(segundosRestantes); // Exibe o número de segundos restantes no console
        if (segundosRestantes === 0) {// Verifica se o contador chegou a zero
            clearInterval(atualizarContador); // Para o intervalo para evitar que continue a ser executado
        } else {
            segundosRestantes--; // Decrementa o número de segundos restantes em 1
        }   }, 1000); // Define o intervalo para atualizar o contador a cada 1000 milissegundos (1 segundo)
}

iniciarContador(10); // Chama a função iniciarContador com o valor 10, iniciando um contador de 10 segundos. O console exibirá os segundos restantes a cada segundo até chegar a zero, momento em que exibirá "Tempo esgotado!"