class NotasAnimadas {
    constructor() {
        this.init();
    }

    init() {
        this.startTimes = [0.5, 2, 2.7, 3.5, 3.9, 4.1, 5.3, 6.1, 6.6, 7];
        this.active = false;
        this.actives = [];
        this.duration = 3;
        this.gameContainer = document.getElementById('game-container');
        this.onGameKeyPress();
    }

    play() {
        const animateNext = this.animateNext.bind(this);
        this.ticker = new TimeTicker(this.startTimes, animateNext);
        this.active = true;
    }

    createDivNota() {
        const div = document.createElement('div');
        const uniqueId = generateUniqueId();
        div.classList.add('nota');
        div.setAttribute('id', uniqueId);
        this.gameContainer.appendChild(div);
        return div;
    }

    animateNext() {
        const y = this.gameContainer.offsetHeight + 50;
        const div = this.createDivNota();
        const id = div.id;
        const self = this;
        const animation = gsap.to(div, {
            id: id,
            y: y,
            duration: this.duration,
            ease: 'none',
            onComplete: function () {
                this.targets()[0].remove();
                self.removeNota(id);
            }
        });
        const nota = { id, animation, div };
        this.actives.push(nota);
    }

    getLastNota() {
        return this.actives.length > 0 ? this.actives[0] : null;
    }

    removeNota(id) {
        this.actives = this.actives.filter(nota => nota.id !== id);
    }

    onGameKeyPress() {
        document.addEventListener('keydown', (event) => {
            if (!this.active) {
                return;
            }

            if (event.code === 'KeyA') {
                this.checkAnimationProgress();
            }
        })
    }

    checkAnimationProgress() {
        const nota = this.getLastNota();
        if (!nota) {
            return;
        }
        const progress = nota.animation.progress();
        const div = nota.div;
        const gotcha = (progress >= 0.8 && progress <= 0.9);
        const className = gotcha ? 'ok' : 'not';
        div.classList.add(className);
        setTimeout(() => {
            div.classList.remove(className);
        }, 250);
        if (gotcha) {
            console.log('ok');
            this.removeNota(nota.id);
        } else {
            console.log('ops');
        }
    }
}