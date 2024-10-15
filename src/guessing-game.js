class GuessingGame {
    constructor() {
      this.min = null;
      this.max = null;
      this.currentGuess = null;
    }
  
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
      if (this.max - this.min === 1) {
        this.currentGuess = this.max;
      } else {
        this.currentGuess = Math.round((this.min + this.max) / 2);
      }
      return this.currentGuess;
    }
  
    lower() {
      this.max = this.currentGuess;
    }
  
    greater() {
      this.min = this.currentGuess;
    }
  }
  
  
module.exports = GuessingGame;
