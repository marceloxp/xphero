class NotasAnimadas {
    constructor() {
        this.startTimes = [0.5, 1, 1.5];
        this.duration = 4;
        this.timeline = gsap.timeline();
        this.timeline.pause();
        this.gameContainer = document.getElementById('game-container');
        this.criarAnimacao();
    }

    criarAnimacao() {
        const y1 = this.gameContainer.offsetHeight + 50;
        const self = this;
        const animacao = gsap.to('.nota div', {
            duration: this.duration,
            y: y1,
            ease: 'none',
            stagger: function (index, target, list) {
                return self.startTimes[index];
            }
        });
        this.timeline.add(animacao);
    }

    onClick() {

    }

    play() {
        this.timeline.play();
    }
}