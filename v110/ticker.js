class TimeTicker {
    constructor(callback) {
        this.init();
        this.myCallback = this.myCallback.bind(this);
        gsap.ticker.add(this.myCallback);
    }

    init() {
        this.startTimes =
            [
                [0.5, 2, 2.7, 3.5, 3.9, 4.1, 5.3, 6.1, 6.6, 7],
                [1, 2.5, 3.2, 4, 4.4, 4.6, 5.8, 6.6, 5.1, 7.5],
                [0.5, 2, 2.7, 3.5, 3.9, 4.1, 5.3, 6.1, 6.6, 7],
            ];

        this.notasAnimadas = 
        [
            new NotasAnimadas(1, 'KeyA'),
            new NotasAnimadas(2, 'KeyS'),
            new NotasAnimadas(3, 'KeyD'),
        ];
    }

    myCallback(time) {
        for (let k = 0; k < this.startTimes.length; k++) {
            let times = this.startTimes[k];
            if (times.length > 0) {
                if (times[0] <= time) {
                    this.notasAnimadas[k].animateNext();
                    times.shift();
                }
            }
        }
        let total = 0;
        for (let k = 0; k < this.startTimes.length; k++) {
            let times = this.startTimes[k];
            total += times.length;
            if (total > 0) {
                break;
            }
        }
        if (total <= 0) {
            gsap.ticker.remove(this.myCallback);
            console.log('Ticker finalizado');
        }
    }
}