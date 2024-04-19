window.addEventListener('load', () => {
    ajustarTamanhoContainer();
    const notasAnimadas = new NotasAnimadas();
    setTimeout(() => {
        notasAnimadas.play();
    })
});
window.addEventListener('resize', ajustarTamanhoContainer);