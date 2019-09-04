// Backend Logic
// var player1 = new Player();
// var player2 = new Player();


export function Player() {
  this.turnScore = 0,
  this.totalScore = 0
}

Player.prototype.calculateTotal = function() {
  this.totalScore = this.turnScore + this.totalScore;
  this.turnScore = 0;
};


export function addition(a,b) {
  return a + b
}
