class Main {
    constructor() {
        this.initialize = this.initialize.bind(this);
    }

    initialize() {
        window.addEventListener('load', () => {
            this.startGame();
        });
    }

    async startGame() {
        setTimeout(async () => {
            this.ticker = new TimeTicker();
        }, 1000);
    }
}

const main = new Main();
main.initialize();
