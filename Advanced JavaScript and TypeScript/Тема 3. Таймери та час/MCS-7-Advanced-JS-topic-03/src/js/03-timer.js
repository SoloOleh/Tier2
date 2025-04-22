const timer = {
  deadline: new Date('2025-03-05T00:00:00'),
  refs: {
    days: document.querySelector('.js-timer-days'),
    hours: document.querySelector('.js-timer-hours'),
    minutes: document.querySelector('.js-timer-minutes'),
    seconds: document.querySelector('.js-timer-seconds'),
  },
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadline - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      const timeComponents = this.getTimeComponents(diff);

      this.refs.days.textContent = this.pad(timeComponents.days);
      this.refs.hours.textContent = this.pad(timeComponents.hours);
      this.refs.minutes.textContent = this.pad(timeComponents.minutes);
      this.refs.seconds.textContent = this.pad(timeComponents.seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};

timer.start();

/*
 getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
*/
