class TimeTicker {
    constructor(times, callback) {
        this.times = times;
        this.callback = callback;
        this.myCallback = this.myCallback.bind(this);
        gsap.ticker.add(this.myCallback);
    }

    myCallback(time) {
        if (this.times.length > 0) {
            if (this.times[0] <= time) {
                this.callback(this.times[0]);
                this.times.shift();
            }
        } else {
            gsap.ticker.remove(this.myCallback);
        }
    }
}