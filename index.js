// Array de start times em segundos
const startTimes = [0, 1.5];

// Função para criar uma animação para uma nota com um startTime específico
function criarAnimacao(startTime) {
    const gameContainer = document.getElementById('game-container');
    const nota = document.createElement('div');
    nota.classList.add('nota');
    gameContainer.appendChild(nota);

    const options = {
        duration: 5, // Duração da animação em segundos
        y: document.getElementById('game-container').offsetHeight + 50, // Altura do contêiner menos o padding (20px em cima e 20px em baixo)
        ease: "none", // Tipo de easing (linear)
        onComplete: () => {
            // Remover a nota após a animação ser concluída
            nota.remove();
        }
    };

    return gsap.to(nota, { ...options, startTime: startTime });
}

// Função para criar e animar as notas com start times usando uma Timeline
function criarNotasComStartTimes() {
    const tl = gsap.timeline();

    // Loop sobre o array de start times
    startTimes.forEach((startTime) => {
        // Adiciona uma animação à Timeline com startTime específico
        tl.add(criarAnimacao(startTime), startTime);
    });
}

// Função para ajustar o tamanho do contêiner às dimensões da janela do navegador
function ajustarTamanhoContainer() {
    const gameContainer = document.getElementById('game-container');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    gameContainer.style.width = windowWidth - (2 * 20) + 'px';
    gameContainer.style.height = windowHeight - (2 * 20) + 'px'; // Altura da janela menos o padding (20px em cima e 20px em baixo)
}

// Chamando a função para ajustar o tamanho do contêiner quando a página é carregada e redimensionada
window.addEventListener('load', () => {
    ajustarTamanhoContainer();
    // Chamando a função para criar e animar as notas com delays usando uma Timeline
    criarNotasComStartTimes();
});
window.addEventListener('resize', ajustarTamanhoContainer);