window.addEventListener('load', () => {
    ajustarTamanhoContainer();
    window.notasAnimadas = new NotasAnimadas();
    setTimeout(() => {
        notasAnimadas.play();
    }, 1000);
});
window.addEventListener('resize', ajustarTamanhoContainer);