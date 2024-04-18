// Função para ajustar o tamanho do contêiner às dimensões da janela do navegador
function ajustarTamanhoContainer() {
    const gameContainer = document.getElementById('game-container');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    gameContainer.style.width = windowWidth - (2 * 20) + 'px';
    gameContainer.style.height = windowHeight - (2 * 20) + 'px'; // Altura da janela menos o padding (20px em cima e 20px em baixo)
}