// Chamando a função para ajustar o tamanho do contêiner quando a página é carregada e redimensionada
window.addEventListener('load', () => {
    ajustarTamanhoContainer();
    notasAnimadas.criarNotasComStartTimes();
    notasAnimadas.iniciarAnimacao();
});
window.addEventListener('resize', ajustarTamanhoContainer);