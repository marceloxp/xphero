function ajustarTamanhoContainer() {
    const gameContainer = document.getElementById('game-container');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const panelWidth = windowWidth - (2 * 20) + 'px';
    const panelHeight = windowHeight - (2 * 20) + 'px';
    gameContainer.style.width = panelWidth;
    gameContainer.style.height = panelHeight;

    const fireElement = document.getElementById('fire');
    fireElement.style.width = panelWidth;
}