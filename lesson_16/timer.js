export class Timer {
  constructor() {
    this.intervalId = null;
    this.isEnabled = false;
    this.seconds = 0;
  }

  toggleOn() {
    this.isEnabled = true;
    this.intervalId = setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }

  toggleOff() {
    this.isEnabled = false;
    clearInterval(this.intervalId);
  }
}
