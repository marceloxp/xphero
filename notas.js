class NotasAnimadas {
    constructor() {
        this.startTimes = [0, 0.7];
        this.timeline = gsap.timeline();
        this.timeline.pause();
        this.gameContainer = document.getElementById('game-container');
    }

    criarAnimacao(startTime) {
        const nota = document.createElement('div');
        nota.classList.add('nota');
        this.gameContainer.appendChild(nota);

        const options = {
            duration: 5, // Duração da animação em segundos
            y: this.gameContainer.offsetHeight + 50, // Altura do contêiner menos o padding (20px em cima e 20px em baixo)
            ease: "none", // Tipo de easing (linear)
            onComplete: () => {
                // Remover a nota após a animação ser concluída
                nota.remove();
            }
        };

        return gsap.to(nota, { ...options, startTime: startTime });
    }

    criarNotasComStartTimes() {
        this.startTimes.forEach((startTime) => {
            this.timeline.add(this.criarAnimacao(startTime), startTime);
        });
    }

    iniciarAnimacao() {
        this.timeline.play();
    }
}

const notasAnimadas = new NotasAnimadas();