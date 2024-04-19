window.addEventListener('load', () => {
    ajustarTamanhoContainer();
    const notasAnimadas = new NotasAnimadas();
    setTimeout(() => {
        notasAnimadas.play();
    }, 1000);
});
window.addEventListener('resize', ajustarTamanhoContainer);