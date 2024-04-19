class NotasAnimadas {
    constructor() {
        this.startTimes = [0.5];
        this.duration = 10;
        this.gameContainer = document.getElementById('game-container');
    }

    play() {
        const functionAnimate = this.animateNext.bind(this);
        this.ticker = new TimeTicker(this.startTimes, functionAnimate);
    }

    createDivNota() {
        const div = document.createElement('div');
        const uniqueId = generateUniqueId();
        div.classList.add('nota');
        div.setAttribute('id', uniqueId);

        div.onclick = this.onClick.bind(this);

        this.gameContainer.appendChild(div);
        return div;
    }

    animateNext() {
        const y = this.gameContainer.offsetHeight + 50;
        const div = this.createDivNota();
        const id = div.id;
        gsap.to(div, {
            id: id,
            duration: this.duration,
            y: y,
            ease: 'none',
            onUpdate: function () {
                // console.log(this.progress());
            },
            onComplete: function () {
                this.targets()[0].remove();
            }
        });
    }

    onClick(event) {
        const element = event.target;
        const id = element.id;
        const animation = gsap.getById(id);
        const progress = animation.progress();
        console.log("🚀 ~ NotasAnimadas ~ onClick ~ progress:", progress)
        if (progress >= 0.8 && progress <= 0.9) {
            alert('Correto');
        } else {
            console.log('ops');
        }
    }
}